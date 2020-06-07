import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShortID from "shortid";

import Post from "../Components/Post";
import NewPost from "../Components/NewPost";
import { GetPostList } from "../API";
import { setList, loadError } from "../Redux";

const Home = () => {
  const list = useSelector((state) => state.post.list);
  const error = useSelector((state) => state.post.error);
  const hasUser = useSelector((state) => state.user.hasUser);
  const dispatch = useDispatch();

  useEffect(() => {
    GetPostList()
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
  }, [dispatch]);

  return (
    <div className="page">
      <p>
        Welcome to <strong>Julie Social Network</strong>. This website is a
        training to Redux and React. We use auth and routing to create a small
        social media website. Therefore there is ZERO css effort!
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
