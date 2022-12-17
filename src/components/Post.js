import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div>
      <div className="postcontainer">
        <div className="topbar">
          <div className="profileimg">
            <img src="profilepic.png" alt="" />
          </div>
          <div className="usrname">Abstract Jason</div>
        </div>
        <div className="midbar">
          <div className="photopost">
            <img src="post.jpg" alt="" />
          </div>
          <div className="title">Great Experience at Hackathon</div>
          <div className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            qui deserunt provident quibusdam dolores officiis sunt, amet
            molestias saepe modi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quis, modi fugiat inventore reprehenderit tempore
            eligendi. Deserunt illo atque tenetur quo.
          </div>
        </div>
        <div className="endbar">
          <div className="reactions">
            <button className="ritem">
              <img src="likeiconhol.png" alt="" />
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
