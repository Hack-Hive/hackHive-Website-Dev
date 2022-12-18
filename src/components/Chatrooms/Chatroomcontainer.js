import React from "react";
import ChatRoominfo from "./ChatRoominfo";

export default function Chatroomcontainer() {
  const handlelink = () => {
    window.open("http://127.0.0.1:5500/index.html");
  };
  return (
    <div className="chatroomcontainer">
      <div className="titlechat">Join the conversation yourself</div>
      <button
        style={{ background: "none", border: "none", color: "white" }}
        onClick={handlelink}
      >
        <ChatRoominfo
          name="Kasukabe Defense Group"
          member="3/26"
          details="Discussion on how to win JITHACK 2022"
        />
      </button>
      <button
        style={{ background: "none", border: "none", color: "white" }}
        onClick={handlelink}
      >
        <ChatRoominfo
          name="The Akatsuki"
          member="3/26"
          details="Discussion on how to acquire all nine tails"
        />
      </button>

      <button
        style={{ background: "none", border: "none", color: "white" }}
        onClick={handlelink}
      >
        <ChatRoominfo
          name="Gan Gan Galaxy"
          member="3/26"
          details="Discussion on how to win WBBA championship"
        />
      </button>

      <button
        style={{ background: "none", border: "none", color: "white" }}
        onClick={handlelink}
      >
        <ChatRoominfo
          name="Team Rocket"
          member="3/26"
          details="Discussion on how to lose again"
        />
      </button>
    </div>
  );
}
