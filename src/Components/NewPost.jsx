import React from "react";
import { Form, Input, Button } from "antd";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { changeList} from "../Redux"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const NewPost = () => { 
  console.log('in new post');
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.HomePost.list)

  const onFinish = (values) => {
    console.log("submit Success:", values);
    fetch("https://api-minireseausocial.mathis-dyk.fr/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsImlhdCI6MTU5MDUyOTM5NSwiZXhwIjoxNTkzMTIxMzk1fQ.ZnFhEiJmsoadmC7MCNyJsvofhyOiQm74u337IuGSNa0`
      },
      body: JSON.stringify({ ...values, user: 72 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch Success:", data);
        dispatch(changeList())
      })
      .catch((error) => {
        console.error("fetch Error:", error);
        window.location.reload();
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="page">
      <Form
        {...layout}
        name="basic"
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Let'em'all know
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

}

export default NewPost;