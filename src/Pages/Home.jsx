import React from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import ShortID from "shortid"

import Post from "../Components/Post"

import { 
  makeRequestHomePost,
  requestFailHomePost,
  requestSuccessHomePost,
  fetchHomePost
} from "../Redux"

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
    {list && <div>{list.map(el => (<Post key={ShortID.generate()} text={el.text}/>))}</div>}
    {error && <div className="error">{error}</div>}
  </div>)
}

export default Home;