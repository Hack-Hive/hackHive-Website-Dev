import { React, useState, useEffect } from "react";
import Chatroomcontainer from "../Chatrooms/Chatroomcontainer";
import Feed from "../feed/Feed";
import Uploadpost from "../feed/uploadpost";
import Hackcontainer from "../hackathoncontainer/hackacontainer";
import SideBar from "../sidebar/SideBar";
import { db } from "../../firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Home = (props) => {
  const [data, setData] = useState({});
  const handleadditionpost = async (ip) => {
    console.log(ip);
    setData(ip);
    // console.log(data);

    await setDoc(doc(db, "Feedpost", "rahulsharma4329"), {
      title: ip.title,
      caption: ip.caption,
    });
  };
  return (
    <div>
      <div className="maincontainer">
        <div className="sidebarcontainer">
          <SideBar />
        </div>
        <div className="contentcontainer">
          <Uploadpost handleadditionpost={handleadditionpost} />
          <Feed data={data} />
          <Hackcontainer />
          <Chatroomcontainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
