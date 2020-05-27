import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { changeList } from "../Redux";
import { CreatePost } from "../API";

const NewPost = () => {
  console.log("in new post");
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    CreatePost(userId, token, values)
      .then((response) => {
        if (response.error) {
          setError(response.message);
        } else {
          console.log(response);
          dispatch(changeList(values));
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <>
      {error && <p className="error_message">{error}</p>}
      <Form
        name="newPost"
        className="post-preview"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="text"
          rules={[
            {
              required: true,
              message: "Please do say something, I insist",
            },
          ]}
        >
          <Input placeholder="Say something" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Let'em'all know
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewPost;
