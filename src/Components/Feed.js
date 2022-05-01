import React, { useState } from 'react';
import '../Styles/Feed.css';
import Post from "./Post";
import Postsdata from '../Data';
import CreateIcon from "@material-ui/icons/Create";
import {MdArticle}from "react-icons/md";
import {FaPhotoVideo}from "react-icons/fa";
function Feed({type}) {
  const [input,setInput]=useState('')
  const [posts, setPosts] = useState(Postsdata)
  const post = (e) => {
    e.preventDefault();
    setPosts([{
      name: 'ENSMR',
      description: 'This is a test',
      message: input
    },... Postsdata])
    setInput('')
  }
  return (
    <div className='split right'>
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form onSubmit={post}>
            <textarea className="input_class" type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">

          <div className="re">
                    <FaPhotoVideo style={{color :'blue'}}/>
                    <span>Images/Videos</span>
          </div>

          <div className="re">
                    <MdArticle style={{color :'pink'}}/>
                    <span>Article</span>
          </div>
      </div>
    </div>
     <div className='posts_container'></div>
     {posts?.map((post, index) => (
      <Post
        key={index}
        name={post.name}
        timestamp={post.timestamp}
        message={post.message} 
        isStudent={true}/>
    ))
    }
    </div>
    </div>
    
  );
}
export default Feed
