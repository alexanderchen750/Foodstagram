
import './Account.css';

function LikesButton() {
  return (
    <button>
      Likes 
    </button>
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
           (avatar)Alsadeg
          </div>

        </div>
      </div>

      <div className="account_info">

          <div className="info__left">
            <div className="info__posts">
             <PostsButton />
            </div>

            <div className="info__likes">
             <LikesButton />
           </div>

         
           <div className="info__comments">
             <CommentsButton />
           </div>

          </div>
        </div>
    </div>
  );
}
