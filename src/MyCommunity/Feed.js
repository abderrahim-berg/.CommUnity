import React, { useState } from 'react';
import './styles/Feed.css';
import Post from "./Post";
import Postsdata from './Data';

import {MdArticle}from "react-icons/md";
import {FaPhotoVideo}from "react-icons/fa";
import SchoolProfilHeader from './SchoolProfilHeader';
function Feed({type}) {
  const [selectedMedia,setSelectedMedia]=useState(null)
  const fileSelectHandler = event => {
    setSelectedMedia(event.target.files[0])
  }
  const [input,setInput]=useState('')
  const [posts, setPosts] = useState(Postsdata)
  const post = (e) => {
    e.preventDefault();
    setPosts([{
      name: 'ENSMR',
      description: 'This is a test',
      message: input,
      postImages: []
      
    },... Postsdata])
    setInput('')
  }
  return (
    <div className='split right'>
    <div className="feed">
      <div>
        <SchoolProfilHeader school='ENSMR' schoolDescription='khassna bash n3mro hnaya olla nkhalliwh hakka?'
        image="https://files.clubetudiants.ma/inline/1551028532"/>
      </div>
      <div className="feed_inputContainer">
        <div className="feed_input">
         
          <form onSubmit={post}>
            <textarea className="input_class" type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">

          <div className="re">
                    <input type='file' id='file' onChange={fileSelectHandler} style={{display: "none"}}/>
                    <FaPhotoVideo style={{color :'blue'}}/>
                    <label htmlFor='file'><span>Images/Videos</span></label>
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
        reactions={post.reactions}
        isStudent={true}
        postImage={post.postImages}/>
    ))
    }
    </div>
    </div>
    
  );
}
export default Feed