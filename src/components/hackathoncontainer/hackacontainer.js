import React from "react";
import Hackathon from "./hackathon";
import { Link, useNavigate } from "react-router-dom";
export default function Hackcontainer() {
  const navigate = useNavigate();
  const handlebmore = () => {
    navigate("/hackathons");
  };
  return (
    <>
      <div className="hackacontainer">
        <span className="hackatitle">
          Participate in these upcoming amazing hackathons
        </span>
        <div className="hackathonboxes">
          <Hackathon
            name="JITHACK 2022"
            track="Open innovation"
            location="Bengaluru"
            date="17 December 2022"
            link="https://jithack.tech/"
          />
          <Hackathon
            name="Centuriton"
            track="Open innovation"
            location="Bengaluru"
            date="26 December 2022"
            link="https://centuriton.com/"
          />
        </div>

        <div className="bmore">
          <button className="bbtn " onClick={handlebmore}>
            Browse More
          </button>
        </div>
      </div>
    </>
  );
}
