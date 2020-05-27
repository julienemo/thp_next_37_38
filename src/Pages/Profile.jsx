import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShortID from "shortid";
import { Form, Input, Button } from "antd";

import Cookies from "js-cookie";

import { fetchProfile, changeProfile } from "../Redux"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Profile = () => { 
  console.log('in profile')
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile)
  const loading = useSelector((state) => state.profile.loading);
  const error = useSelector((state) => state.profile.error);
  const dispatch = useDispatch();

  const onFinish = values => {
    console.log('Success:', values);
    dispatch(changeProfile(values))
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  !profile && dispatch(fetchProfile())
  
  return (<div className="page">
    <p>This is your profile</p>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p>Your user name: {profile?profile.username: "none"}</p>
      <Form.Item
        label="Or change your username here: "
        name="username"
      >
        <Input />
      </Form.Item>

      <p>Your description: {profile?profile.description: "none"}</p>

      <Form.Item
        label="Or change your description here: "
        name="description"
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>)
}

export default Profile;
