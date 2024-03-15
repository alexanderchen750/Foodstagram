import CommentList from './CommentList';
import PropTypes from 'prop-types';
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
//import {useEffect, useState} from 'react';

Post.propTypes = {
    user: PropTypes.string.isRequired, // Assuming user is a string
    postImage: PropTypes.string, // Assuming postImage is an optional string
    likes: PropTypes.number, // Assuming likes is an optional number
    timestamp: PropTypes.string, // Assuming timestamp is an optional string
    blogtext: PropTypes.string, // Assuming blogtext is an optional string
    comments: PropTypes.shape ({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
}

function Post({user, postImage, likes, timestamp, blogtext, comments}) {
    /*const handleLike = (id) => {
        console.log("like clicked!")
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                postID: id,
            })
        })
        
    }*/

    return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar className="avatar">{user}</Avatar>
            {user} • <span className="avatar">{timestamp.substring(0, 10)}</span>
            </div>
            <MoreHorizIcon className="threeDots"/>
        </div>
        <div className="post__image">
            <img
            src={postImage}
            alt=""
            />
        </div>
        <div className="post__blogtext">
            {blogtext}
        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorderIcon className="postIcon"/>
                    {/*<FavoriteBorderIcon onClick={handleLike()} className="postIcon"/>*/}
                    <ChatBubbleOutlineIcon className="postIcon"/>
                    <TelegramIcon className="postIcon"/>

                </div>
                <div className="post__iconSave">
                    <BookmarkBorderIcon className="postIcon"/>
                </div>

            </div>
            Liked by {likes} people.
                <CommentList comments={comments} />
        </div>
    </div>
    )
}

export default Post
