import React from "react";

const Post = (text) => {
  console.log('in post')

  const display = () => { 
    return (
      <div className="post-preview" >
        {text.text}
      </div>)
  }

  return (
    <>
      {text.text && display()}
    </>)
}

export default Post