import React from "react";
import { useSelector } from "react-redux";
import toLike from "../Images/toLike.svg"
import { Link} from "react-router-dom"
import Moment from "moment";
const Post = (post) => {
  const hasUser = useSelector((state) => state.user.hasUser)
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.currentUser);
  const deletePost = (id) => {
    console.log('in delete post')
    fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  const display = () => { 
    const objectPost = post.post
    const date = Moment(objectPost.created_at).format("YYYY-MM-DD")
    const postOwner = objectPost.user?objectPost.user.id: null; 
    const isMine = postOwner == userId;
    console.log(isMine)
    return (
      <div className="post-preview">
        {hasUser && (
          <div className="post-detail">
            {objectPost.user && (
              <p>
                <Link to={`/user/${objectPost.user.id}`}>
                  <strong>{objectPost.user.username}</strong>
                </Link>{" "}
                  said on {date}:
              </p>
            )}
            <p>
              {objectPost.like ? objectPost.like : "0"}
              <img src={toLike} alt="a button to like the post" />
            </p>
          </div>)}
        
        {isMine && (
          <div className="post-detail">
            <p>
              <button onClick={() => { deletePost(objectPost.id)}}>Delete</button>
            </p>
          </div>)}
        <p>{objectPost.text}</p>
      </div>
    );
  }

  return (
    <>
      {post.post.text && display()}
    </>)
}

export default Post