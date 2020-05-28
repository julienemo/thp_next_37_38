import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, loadError } from "../Redux";
import { Form, Input, Button } from "antd";

import { GoToProfile } from "../Routes/Redirect";
import { StoreUser } from "../Tools";
import { LetUserIn } from "../API";

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

const Register = () => {
  const [error, setError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    LetUserIn("REGISTER", values)
      .then((response) => {
        if (response.error) {
          setError(response.message[0].messages[0].message);
        } else {
          return response;
        }
        return response;
      })
      .then((response) => {
        dispatch(setUser(response.jwt, response.user.id));
        StoreUser(response);
        GoToProfile(history);
      })
      .catch((error) => {
        dispatch(loadError(error));
      });
  };

  return (
    <div className="page">
      {error && <p className="error_message">{error}</p>}
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
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

        <Form.Item
          label="Confirm your password"
          name="password-confirm"
          rules={[
            {
              required: true,
              message: "Please confirm password",
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

export default Register;
