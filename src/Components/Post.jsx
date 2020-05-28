import React from "react";
import { useSelector, useDispatch } from "react-redux";
import toLike from "../Images/toLike.svg";
import { Link } from "react-router-dom";
import Moment from "moment";

import { deletePost, loadError } from "../Redux";
import { DeletePost } from "../API";

const Post = (post) => {
  const hasUser = useSelector((state) => state.user.hasUser);
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const deleteCurrentPost = (id) => {
    DeletePost(id, token)
      .then((response) => {
        if (response.error) {
          dispatch(loadError(response.message));
        } else {
          dispatch(deletePost(response.id));
        }
      })
      .catch((error) => {
        dispatch(loadError(error));
      });
  };
  const display = () => {
    const objectPost = post.post;
    const date = Moment(objectPost.created_at).format("YYYY-MM-DD");
    const postOwner = objectPost.user ? objectPost.user.id : null;
    const isMine = postOwner === userId;

    return (
      <div className="post-preview">
        {hasUser && (
          <div className="post-detail">
            {objectPost.user && (
              <p>
                <Link exact to={`/user/${objectPost.user.username}`}>
                  <strong>{objectPost.user.username}</strong>
                </Link>{" "}
                said on {date}:
              </p>
            )}
            <p>
              {objectPost.like ? objectPost.like : "0"}
              <img src={toLike} alt="a button to like the post" />
            </p>
          </div>
        )}
        <p>{objectPost.text}</p>
        {hasUser && isMine && (
          <div className="post-btn">
            <p>
              <button
                onClick={() => {
                  deleteCurrentPost(objectPost.id);
                }}
              >
                Delete
              </button>
            </p>
          </div>
        )}
      </div>
    );
  };

  return <>{post.post.text && display()}</>;
};

export default Post;
