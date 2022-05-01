import React, { useState } from 'react';
import  "../Styles/Post.css";
import { Dropdown } from 'react-bootstrap';
import Avatar from "@material-ui/core/Avatar";
import {AiOutlineEllipsis} from "react-icons/ai";


function Post({name, timestamp, message , photoUrl,isStudent}) {
  let editIcon;
  if (!isStudent) {
    editIcon = <div className="re">
    <Dropdown>

    <Dropdown.Toggle  style={{background:"none",border:"none",cursor:"pointer",maxHeight:"50px"}}>
    <AiOutlineEllipsis/>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-5">Edit</Dropdown.Item>
      <Dropdown.Item href="#/action-6">Delete</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>              
  </div>;
  } else {
    editIcon = <></>;
  }
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
            <h2>{name}</h2>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="feed__inputOptions">
  
              {/* <div className="re" onClick={handleClick}>
                  <AiOutlineStar />
                  <p>{stars}</p>
`                       </div>*/}
          {editIcon}
      </div>       
    </div>
  );
}

export default Post ;