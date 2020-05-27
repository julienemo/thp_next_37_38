import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import ShortID from "shortid";
import { Form, Input, Button } from "antd";

import Post from "../Components/Post"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Profile = () => { 
  console.log('in profile');
  const [profile, setProfile] = useState(null);
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);
  const { userSlug } = useParams();
  const userId = userSlug === undefined ? currentUser : userSlug

  console.log(userId)

  const postURL = `https://api-minireseausocial.mathis-dyk.fr/posts?user.id=${userId}`
  const profileURL = `https://api-minireseausocial.mathis-dyk.fr/users/${userId}`
  const isMe = userId === currentUser

  useEffect(() => {
    console.log('url changed')
    fetch(postURL)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.message)
        } else {
          console.log(response)
          setList(response)
        }
      }).catch((error) => { setError(error) });
  }, [postURL, userId])

  const onFinish = values => {
    console.log('Success:', values);
    setProfile(values);
    profile && fetch(profileURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.status === "error") {
          console.log('update profile')
        } else {
          console.log('fetch home post success')
        }
      })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  !profile && fetch(profileURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.message)
        } else {
          setProfile({
            username: response.username,
            description: response.description,  
          })
        }
      })

  return (<div className="page">
    <p>Profile of user {userId}</p>
    {error && <p>{error}</p>}
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p> username: {profile ? profile.username: "NONE"}</p>
      {isMe && <Form.Item
        label="Or change your username here: "
        name="username"
      >
        <Input />
      </Form.Item>}

      <p>description: {profile ? profile.description?profile.description:"none": "none"}</p>

      {isMe && <Form.Item
        label="Or change your description here: "
        name="description"
      >
        <Input />
      </Form.Item>}

      {isMe && <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>}
    </Form>
    {list && <div>{list.map(el => (<Post key={ShortID.generate()} post={el} />))}</div>}

  </div>)
}

export default Profile;
