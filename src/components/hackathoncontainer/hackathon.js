import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Hackathon(props) {
  console.log(props);

  const name = props.name;
  const track = props.track;
  const location = props.location;
  const date = props.date;
  const link = props.link;
  const handlenavavigate = (e) => {
    window.open(link);
  };
  return (
    <div className="hackathon">
      <div className="hackathoncontainer">
        <div className="topbarhc">{name}</div>
        <div className="medbarhc">
          <div className="themetab">{track}</div>
        </div>
        <div className="bottombarhc">
          <div className="place">{location}</div>
          <div className="time">{date}</div>
        </div>
        <div className="btnplacement">
          <button className="hackbtn" onClick={handlenavavigate}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
