import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ConSideImg from "../images/Con_Side.jpg";
import ConFrontImg from "../images/Con_Front.jpg";
import ConFoodImg from "../images/Con_Food.jpg";

function HomePage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={5.5}>
        {/* 1st Layer*/}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          style={{
            backgroundImage: `url(${ConSideImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 5 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>P</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.05, end: 0.05 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Welcome To Caviar Con</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 0.9 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>San Diego Private Chef</h1>
        </ParallaxLayer>
        {/* 2nd Layer*/}
        <ParallaxLayer
          offset={2} //Prev 1.5
          factor={0.25}
          speed={0}
          style={{
            backgroundColor: "#4a6741",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.62, end: 1.62 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Fine Dining Experiences</h1>
        </ParallaxLayer>
        {/* 3rd Layer*/}
        <ParallaxLayer
          sticky={{ start: 2.25, end: 3.25 }} //Prev 1.75-2.75
          style={{
            backgroundImage: `url(${ConFrontImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.85, end: 1.85 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Seasonal Curated Menus</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.55, end: 2.55 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Quality Ingredients</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.15, end: 3.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Unforgettable Experiences</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.25} //Prev 3.25
          factor={0.25}
          speed={0}
          style={{
            backgroundColor: "#4a6741",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.88, end: 3.88 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Get In Touch For Your Next Dinner Party</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.5, end: 5.5 }}
          style={{
            backgroundImage: `url(${ConFoodImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.5, end: 4.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>CONTACT FORM</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
