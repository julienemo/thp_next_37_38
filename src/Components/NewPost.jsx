import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeList} from "../Redux"

const NewPost = () => { 
  console.log('in new post');
  const userId = useSelector((state) => state.user.currentUser)
  const token = useSelector((state) => state.user.token)

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("submit Success:", values);
    fetch("https://api-minireseausocial.mathis-dyk.fr/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ ...values, user: userId}),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        dispatch(changeList())
      })
      .catch((error) => {
        window.location.reload();
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (

      <Form
      name="newPost"
      className="post-preview" 
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="text"
        >
          <Input placeholder="Say something"/>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Let'em'all know
          </Button>
        </Form.Item>
      </Form>
  );

}

export default NewPost;