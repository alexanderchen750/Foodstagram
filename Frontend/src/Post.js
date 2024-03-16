import PropTypes from 'prop-types';
import "./Post.css"
import { Avatar } from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import  { useAuthContext} from './hooks/useAuthContext';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

Post.propTypes = {
    user_id: PropTypes.string.isRequired, // Assuming user is a string
    postId : PropTypes.string,
    postImage: PropTypes.string, // Assuming postImage is an optional string
    likes: PropTypes.array,  // Assuming likes is an optional number
    timestamp: PropTypes.string, // Assuming timestamp is an optional string
    blogtext: PropTypes.string, // Assuming blogtext is an optional string
}

function Post({user_id, postId, postImage, likes, timestamp, blogtext}) {
    const navigate = useNavigate();
    const [likedStatus, setLikedStatus] = useState(false);
    const [localLikes, setLocalLikes] = useState(likes);
    const {user} = useAuthContext()
    const fetchCurrentUserId = async () => {
        if(user){  
            const response = await fetch('/api/users/userID', {
                method: 'GET',
                headers: {
                  'Authorization' : `Bearer ${user.token}`
                }
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`); // or handle error more gracefully
            }    
            const json = await response.json();   
            return json.userId;     
        }
        return null
       
        
    };
    const checkIfUserLikedPost = async () => {
        if(!user){
            return;
        }
        const currentUserId = await fetchCurrentUserId();
        //setLikedStatus(likes.includes(currentUserId));
        setLikedStatus(localLikes.includes(currentUserId));
    };

    useEffect(() => {
        if (user) {
            setLikedStatus(localLikes.includes(user._id));
        }
    }, [localLikes, user]); // React to changes in localLikes or user

    useEffect(() => {
        setLocalLikes(likes); // Synchronize localLikes with likes prop if it changes externally
        checkIfUserLikedPost();
    }, [likes]);

    const handleUserIdClick = () => {
        navigate(`/account/${user_id}`); // Navigate to Account page on click
    };

    const handleLikeClick = async () => {
        if (!user) {
            console.log('User is not logged in');
            return;
        }

        const endpoint = likedStatus ? `/api/posts/unlike/${postId}` : `/api/posts/like/${postId}`;
    
        try {
            const res = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                },
            });
    
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Failed to update like status');
            }
    

            setLikedStatus(!likedStatus);
            setLocalLikes(prev => 
                !likedStatus 
                ? [...prev, user._id] 
                : prev.filter(id => id !== user._id) 
            );
   

        } catch (error) {
            console.error('Error updating like status:', error);
            
        }
    };
    
    return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar className="avatar" onClick={handleUserIdClick}>{user_id}</Avatar>
            {user_id} • <span className="avatar" >{timestamp.substring(0, 10)}</span>
            </div>
           
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
                    <FavoriteBorderIcon 
                        className={`postIcon ${likedStatus ? 'liked' : ''}`} 
                        onClick={handleLikeClick}
                    />
                

                </div>

            </div>
            Liked by {localLikes.length} people.
        </div>
    </div>
    )
}

export default Post
