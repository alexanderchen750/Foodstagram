
import './Account.css';
import { Avatar } from '@mui/material'

/*(self note) need to check: 
- avatar pic is initail of username, so username[0]
- if not logged in or rigestered, do not show account at all, meaning use an if statment for Timeline 
- add a box?
- edit account? add a profile pic? change username?
- create pages for each posts likes and comments?*/
/*
function LikesButton() {
  return (
    <span className='like'>
      Likes 
    </span>
  );
}

function PostsButton() {
  return (
    <button>
      Posts 
    </button>
  );
}

function CommentsButton() {
  return (
    <button>
      Comments
    </button>
  );
}
*/
export default function Account() {
  return (
    <div>
      <div className="account">

        <div className="account__top">

          <div className="account__title">
           Your Foodagram account:
          </div>

        </div>

        <div className="account__bottom">

          <div className="account__username">
          <span className="avatar">
            <Avatar>Z</Avatar> alsadeg
          </span>
          </div> 

        </div>
      </div>

      <div className="account_info">

          <div className="info__left">

          <div className="info__posts">
            <span className='posts'>
              Your Posts 
            </span>
          </div>

          <div className="info__likes">
            <span className='like'>
             Your Likes 
            </span>
          </div>
           
          <div className="info__comments">
            <span className='comments'>
            Your Comments 
            </span>
          </div>

          </div>
        </div>
    </div>
  );
}
