import React, { forwardRef } from "react";
import "../Styles/PostMycommunity.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



const PostMycommunity = forwardRef(
    ({ text, image, user }) => {



        return ( <div className = "post" >
            < div className = "post__avatar" >
            < Avatar src = 'lien de photo' / >
            </div> <div className = "post__body" >
            <div className = "post__header" >
            <div className = "post__headerText" >
            < h3 > { user.displayName } </h3> </div>
             <div className="post-container"> 
             < div className = "post__headerDescription" >
            < p > { text } </p> </div> </div> 
            <img className = "PostImg"
            src = { image }
            alt = "" / >
            </div>
            <div className = "post__footer" >
            <ChatBubbleOutlineIcon fontSize = "small" / >
            <RepeatIcon fontSize = "small" / >
            <FavoriteBorderIcon fontSize = "small" / >
            <PublishIcon fontSize = "small" / >
            </div> </div> </div>
        );
    }
);

export default PostMycommunity;