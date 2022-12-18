import React from "react";
import Hackathon from "../hackathoncontainer/hackathon";
import SideBar from "../sidebar/SideBar";

export default function Hackathonpage() {
  return (
    <div className="hackathonpagecontainer">
      <SideBar />
      <div className="containerhack">
        <div className="ttleee">Explore upcoming Hackathons</div>
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
        <Hackathon
          name="IEE Hack 2022"
          track="IOT"
          location="Bengaluru"
          date="17 December 2022"
          link="https://jithack.tech/"
        />
        <Hackathon
          name="Mesohack 2022"
          track="CyberSecurity"
          location="Bengaluru"
          date="26 December 2022"
          link="https://centuriton.com/"
        />
        <Hackathon
          name="SWOC Hackercup 2022"
          track="Blockchain"
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
        <Hackathon
          name="Creatathon 2022"
          track="IOT"
          location="Bengaluru"
          date="17 December 2022"
          link="https://jithack.tech/"
        />
        <Hackathon
          name="IIT hack"
          track="Open innovation"
          location="Bengaluru"
          date="26 December 2022"
          link="https://centuriton.com/"
        />
        <Hackathon
          name="Ramiah hackathon 2022"
          track="Open innovation"
          location="Bengaluru"
          date="26 December 2022"
          link="https://centuriton.com/"
        />
      </div>
    </div>
  );
}
