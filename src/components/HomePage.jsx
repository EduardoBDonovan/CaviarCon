import React from "react";
import { Parallax, Background } from "react-parallax";
import ConFrontImg from "../images/Con_Front.jpg";
import ConSideImg from "../images/Con_Side.jpg";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <Parallax className="firstImage" bgImage={ConSideImg} strength={500}>
        <div className="contentHead">
          <span className="welcome">Welcome to CaviarCon</span>
        </div>
        <div className="contentHeadFoot">
          <span className="chef">San Diego Based Chef</span>
        </div>
      </Parallax>

      <Parallax className="secondImage" strength={500}>
        <div className="contentHead">
          <span className="welcome">Welcome to CaviarCon</span>
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;
