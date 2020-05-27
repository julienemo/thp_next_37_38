import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShortID from "shortid";

import Post from "../Components/Post";
import NewPost from "../Components/NewPost";
import { GetPostList } from "../API";

const Home = () => {
  console.log("in home");
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);
  const hasUser = useSelector((state) => state.user.hasUser);

  useEffect(() => {
    GetPostList()
      .then((response) => {
        if (response.error) {
          setError(response.message);
        } else {
          setList(response);
          console.log(response.length);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="page">
      <p>
        Welcome to <strong>Julie Social Network</strong>. This website is a
        training to Redux and React. We use auth and routing to create a small
        social media website.
      </p>
      {list && (
        <div>
          {hasUser && <NewPost />}
          {list.map((el) => (
            <Post key={ShortID.generate()} post={el} />
          ))}
        </div>
      )}
      {error && <p className="error_message">{error}</p>}
    </div>
  );
};

export default Home;
