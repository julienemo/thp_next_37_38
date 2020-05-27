import React from "react";
import { useSelector } from "react-redux";
import toLike from "../Images/toLike.svg"

const Post = (post) => {
  const hasUser = useSelector((state) => state.user.hasUser)
  
  const display = () => { 
    let objectPost = post.post
    return (
      <div className="post-preview" >
        <p>{objectPost.text}</p>
        {hasUser && <div className="post-detail">
          <p>{objectPost.user && objectPost.user.username}</p>
          <p>{objectPost.like ? objectPost.like : "0"}
            <img src={toLike} alt="a button to like the post" />
          </p>
        </div>}
      </div>)
  }

  return (
    <>
      {post.post.text && display()}
    </>)
}

export default Post