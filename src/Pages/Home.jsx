import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShortID from "shortid"
import Cookies from "js-cookie";

import Post from "../Components/Post"

import { fetchHomePost } from "../Redux"

const Home = () => { 
  console.log('in home')
  const list = useSelector((state) => state.HomePost.list)
  const error = useSelector((state) => state.HomePost.error)
  const loading = useSelector((state) => state.HomePost.loading)
  const dispatch = useDispatch();
  
  !list && dispatch(fetchHomePost())

  return (<div className="page">
    <p>Welcome to <strong>Julie Social Network</strong>.
    This website is a training to Redux and React.
    We use auth and routing to create a small social media website.</p>
    {loading &&  <div><p>Loading...</p></div>}
    {list && <div>{list.map(el => (<Post key={ShortID.generate()} post={el}/>))}</div>}
    {error && <div className="error">{error}</div>}
  </div>)
}

export default Home;