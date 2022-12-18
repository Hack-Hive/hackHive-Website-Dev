import React, { useState } from "react";
import "./post.css";

export default function Post(props) {
  const [liked, setliked] = useState(false);
  const handlesubmit = () => {
    if (liked == true) {
      setliked(false);
    } else {
      setliked(true);
    }
  };
  const username = props.username;
  const profileimgurl = props.profileimgurl;
  console.log(profileimgurl);
  const postimgurl = props.postimgurl;
  const caption = props.caption;
  const title = props.title;
  return (
    <div>
      <div className="postcontainer">
        <div className="topbar">
          <div className="profileimg">
            <img src={profileimgurl} alt="" />
          </div>
          <div className="usrname">{username}</div>
        </div>
        <div className="midbar">
          <div className="photopost">
            <img src="post.jpg" alt="" />
          </div>
          <div className="title">{title}</div>
          <div className="caption">{caption}</div>
        </div>
        <div className="endbar">
          <div className="reactions">
            <button className="ritem" onClick={handlesubmit}>
              <img src={!liked ? "likeiconhol.png" : "likeicon.png"} alt="" />
              Like
            </button>
            <button className="ritem">
              <img src="comment.png" alt="" />
              Comment
            </button>
            <button className="ritem">
              <img src="shareicon.svg" alt="" />
              Share
            </button>
          </div>
          <div className="caption"></div>
          <div className="comments"></div>
        </div>
      </div>
    </div>
  );
}
