import React, { useState } from 'react';
import '../Styles/Feed.css';
import Post from "./Post";
import Postsdata from '../Data';
import CreateIcon from "@material-ui/icons/Create";
import {MdArticle}from "react-icons/md";
import {FaPhotoVideo}from "react-icons/fa";
import SchoolProfilHeader from './SchoolProfilHeader';
import ShowPost from './ShowPost';

function Feed() {
  const [selectedMedia,setSelectedMedia]=useState(null)
  const fileSelectHandler = event => {
    setSelectedMedia(event.target.files[0])
  }
  const [input,setInput]=useState('')
  const [posts, setPosts] = useState(Postsdata)
  const [showPost,setShowPost] = useState(false);

  const popPost =()=>{
    setShowPost(prev =>!prev);
  };
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
  

    
  <div className="split right"> 
    <div className="feed">
      <div>
     
        <SchoolProfilHeader school='ENSMR' schoolDescription='School description will be inserted'
        image="https://files.clubetudiants.ma/inline/1551028532"/>
      </div>
    <div className="feed_inputContainer">
    <div className="feed_input">
      <CreateIcon />
      <form onSubmit={post}>
        <textarea className="input_class" type='text' value={input} onChange={e => setInput(e.target.value)} onClick={popPost} />
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
     <div className='posts_container'>
     {posts?.map((post, index) => (
      <Post
        key={index}
        name={post.name}
        timestamp={post.timestamp}
        message={post.message} 
        isStudent={true}
        postImage={post.postImages}/>
    ))
    }  
    </div>
    <ShowPost showPost={showPost} setShowPost={setShowPost}/>
  </div> 
</div>

  );
}
export default Feed