import { React, useEffect } from "react";
import Post from "../Post";
import { db } from "../../firebase";
import { doc, getDocs, collection } from "firebase/firestore";

export default function Feed(props) {
  // console.log(props.data.title);
  console.log(props.data.profileimgurl);
  return (
    <div className="feed">
      <Post
        username="Rahul Sharma"
        title={props.data.title || "Will participate at all hackathons"}
        caption={
          props.data.caption ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reiciendis aliquam nisi qui provident sunt voluptates quod hic, a ab ratione natus sapiente rerum modi, alias nobis beatae nesciunt minima debitis? Ea, dolorem!"
        }
        profileimgurl={props.data.profileimgurl || "propic2.png"}
      />
      <Post
        username="Rishi raj Ganguly"
        title="Will participate at all hackathons"
        profileimgurl={"profilepic.png"}
        caption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reiciendis aliquam nisi qui provident sunt voluptates quod hic, a ab ratione natus sapiente rerum modi, alias nobis beatae nesciunt minima debitis? Ea, dolorem!"
        }
      />
      <Post
        username="Ujjwal Jha"
        title="Participated in JITHACK 2022"
        profileimgurl={"profilepic.png"}
        caption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reiciendis aliquam nisi qui provident sunt voluptates quod hic, a ab ratione natus sapiente rerum modi, alias nobis beatae nesciunt minima debitis? Ea, dolorem!"
        }
      />
      <Post
        username="Suraj k"
        title="Great experience at hackathon"
        profileimgurl={"profilepic.png"}
        caption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reiciendis aliquam nisi qui provident sunt voluptates quod hic, a ab ratione natus sapiente rerum modi, alias nobis beatae nesciunt minima debitis? Ea, dolorem!"
        }
      />
    </div>
  );
}
