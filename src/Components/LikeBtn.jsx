import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import liked from "../Images/liked.svg"
import toLike from "../Images/toLike.svg"

const LikeBtn = ({ id, like }) => { 
  console.log( id) 
  console.log(' in like btn')
  console.log('original like ' + like)
  const token = Cookies.get("social_network_token")
  const [isLiked, setIsLiked] = useState(false)
  const [newLike, setNewLike] = useState(like)
  const [img, setImg] = useState(toLike)

  const URL = `https://api-minireseausocial.mathis-dyk.frs/posts/${id}?jwt=${token}`

  const toggleLike = () => { 
    const delta = isLiked ? -1 : 1;
    setImg(isLiked ? toLike : liked)
    setIsLiked(!isLiked)
    setNewLike(newLike + delta)
    console.log('will post to change like')
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ like: newLike }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch Success:", data);
        Cookies.set("social_network_token", data.jwt);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.error("fetch Error:", error);
        window.location.reload();
      });
  }

  return (
    <button
      className="like-btn"
      onClick={(id,like) => {toggleLike(id,like) }}
    >
      <img src={img} alt="a button to like the post" />
    </button>
  )
}

export default LikeBtn;