import React from "react";

export default function ChatRoominfo(props) {
  const name = props.name;
  const member = props.member;
  const details = props.details;
  return (
    <div className="chatroominfocard">
      <div className="dhha">
        <img src="text.png" alt="" />|<div className="chatroomname">{name}</div>
        |<div className="chatroommemberinfo">{member} online</div>
      </div>
      <div className="chatroomdetails">{details}</div>
    </div>
  );
}
