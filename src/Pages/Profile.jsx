import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ShortID from "shortid";
import { Form, Input, Button } from "antd";

import Post from "../Components/Post";
import { GetPostList, GetProfile, ModifyProfile } from "../API";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Profile = () => {
  console.log("in profile");

  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);

  const { userSlug } = useParams();
  const userId = userSlug === undefined ? currentUser : userSlug;
  const isMe = userId == currentUser;

  console.log(userId);

  const [profile, setProfile] = useState(null);
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetPostList(userId)
      .then((response) => {
        if (response.error) {
          setError(response.message);
        } else {
          setList(response);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    GetProfile(userId, token).then((response) => {
      if (response.error) {
        setError(response.message);
      } else {
        setProfile({
          username: response.username,
          description: response.description,
        });
      }
    });
  }, []);

  const onFinish = (values) => {
    let newProfile = {};
    if (values.username) {
      newProfile.username = values.username;
    }
    if (values.description) {
      newProfile.description = values.description;
    }
    const finalProfile = {
      ...profile,
      ...newProfile,
    };
    setProfile(finalProfile);
    ModifyProfile(userId, token, values).then((response) => {
      if (response.error) {
        setError(response.message);
      }
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
      {list && (
        <div>
          {list.map((el) => (
            <Post key={ShortID.generate()} post={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
