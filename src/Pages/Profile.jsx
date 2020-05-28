import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ShortID from "shortid";
import { Form, Input, Button } from "antd";

import Post from "../Components/Post";

import { GetPostList, GetProfile, ModifyProfile } from "../API";
import { setList, loadError, clearUser } from "../Redux";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("current user " + currentUser);
  const token = useSelector((state) => state.user.token);
  const list = useSelector((state) => state.post.list);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  const { userSlug } = useParams();
  console.log("userslug " + userSlug);
  const userId = userSlug === undefined ? currentUser : Number(userSlug);
  const isMe = userId === currentUser;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    GetProfile(userId, token)
      .then((response) => {
        if (response.error) {
          dispatch(loadError(response.message));
        } else {
          setProfile({
            username: response.username,
            description: response.description,
          });
        }
      })
      .catch((error) => {
        dispatch(loadError(error));
      });

    GetPostList(userId)
      .then((response) => {
        if (response.error) {
          dispatch(loadError(response.message));
        } else {
          dispatch(setList(response));
        }
      })
      .catch((error) => {
        dispatch(loadError(error));
      });
  }, []);

  const onFinish = (values) => {
    if (!values.username) {
      values = { description: values.description };
    }
    console.log(values);
    ModifyProfile(userId, token, values)
      .then((response) => {
        console.log(response);
        if (response.error) {
          dispatch(loadError(response.message));
        } else {
          setProfile(response);
        }
      })
      .catch((error) => {
        dispatch(loadError(error));
      });
  };

  return (
    <div className="page">
      <p>Profile of user {userId}</p>
      {error && <p className="error_message">{error}</p>}
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <p> username: {profile ? profile.username : "NONE"}</p>
        {isMe && (
          <Form.Item label="Or change your username here: " name="username">
            <Input />
          </Form.Item>
        )}

        <p>
          description:{" "}
          {profile
            ? profile.description
              ? profile.description
              : "none"
            : "none"}
        </p>

        {isMe && (
          <Form.Item
            label="Or change your description here: "
            name="description"
          >
            <Input />
          </Form.Item>
        )}

        {isMe && (
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        )}
      </Form>
      {list && list.map((el) => <Post key={ShortID.generate()} post={el} />)}
    </div>
  );
};

export default Profile;
