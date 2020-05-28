import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { addPost, loadError } from "../Redux";
import { CreatePost } from "../API";

const NewPost = () => {
  const userId = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);
  const error = useSelector((state) => state.post.error);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    CreatePost(userId, token, values)
      .then((response) => {
        if (response.error) {
          loadError(response.message);
        } else {
          dispatch(addPost(response));
        }
      })
      .catch((error) => {
        loadError(error);
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
            Let'em know
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewPost;
