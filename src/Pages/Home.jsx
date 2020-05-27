import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ShortID from "shortid"
import Cookies from "js-cookie";

import Post from "../Components/Post"
import NewPost from "../Components/NewPost"


const Home = () => { 
  console.log('in home')
  const [list, setList] = useState(null)
  const [error, setError] = useState(null)
  const hasUser = useSelector((state) => state.user.hasUser)
  const URL = `https://api-minireseausocial.mathis-dyk.fr/posts?_sort=created_at:desc`

  useEffect(() => { 
    console.log('url changed')
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.message)
        } else {
          console.log(response)
          setList(response)
        }
      }).catch((error) => {setError(error) });
  },[URL])
  
  return (
    <div className="page">
      <p>Welcome to <strong>Julie Social Network</strong>.
      This website is a training to Redux and React.
      We use auth and routing to create a small social media website.</p>
      {hasUser && <NewPost />}
      {list && <div>
        {list.map(el => (<Post key={ShortID.generate()} post={el} />))}
      </div>}
      {error && <div className="error">
        {error}
      </div>}
    </div>
  )
}

export default Home;