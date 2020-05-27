import React, { useEffect, useState} from "react";
import { Form, Input, Button } from "antd";
import Cookies from "js-cookie";

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

const Connection = () => {
  const [error, setError] = useState(null)

  const onFinish = (values) => {
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          let error = response.message[0].messages[0].message
          setError(error)
        } else { 
          Cookies.set("social_network_token", response.jwt);
          Cookies.set("current_user_id", response.user.id);
          window.location.href = "/profile";
        }
      })
      .catch((error) => {
        setError(error)
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="page">
      {error && <p>{error}</p>}
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
          name="identifier"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Connection;
