import { React, useState } from "react";

export default function Uploadpost({ handleadditionpost }) {
  const [disp, setdisp] = useState("flex");
  const [disp2, setdisp2] = useState("none");
  const [image, setImage] = useState("");
  const handleopenarea = (e) => {
    setdisp2("flex");
    setdisp("none");
  };
  const onImageChange = (event) => {
    setImage(event.target.value);
    // if (event.target.files && event.target.files[0]) {
    //   setImage(URL.createObjectURL(event.target.files[0]));
    //   console.log(image);
    // }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const senddata = {
      title: e.target[0].value,
      caption: e.target[1].value,
      imgurl: image,
    };
    handleadditionpost(senddata);
    // console.log(senddata);
    // console.log(e);
    setdisp("block");
    setdisp2("none");
  };

  return (
    <div className="postingarea">
      <div className="ttle" style={{ display: disp }}>
        <div className="tbar">Post Something</div>
        <div className="lbar">
          <div className="profileimg">
            <img src="propic2.png" alt="" />
          </div>
          <div className="inputpost">
            <input
              type="text"
              placeholder="Share something with the other hackers in the hive"
              onClick={handleopenarea}
            />
          </div>
        </div>
      </div>

      <div className="ipcont ttle" style={{ display: disp2 }}>
        <div className="tt">Write what's on your mind</div>
        <form className="formpost" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="
          Title of your post"
          />
          <textarea placeholder="Enter your thoughts here" align="top" />
          <div className="buttonwrapper">
            <button className="submitbtn btn">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
