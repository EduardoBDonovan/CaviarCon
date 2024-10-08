import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ConSideImg from "../images/Con_Side.jpg";
import ConFrontImg from "../images/Con_Front.jpg";
import ConFoodImg from "../images/Con_Food.jpg";

function HomePage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={5}>
        <ParallaxLayer
          sticky={{ start: 0, end: 0.5 }}
          style={{
            backgroundImage: `url(${ConSideImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
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
          sticky={{ start: 1.75, end: 2.25 }}
          style={{
            backgroundImage: `url(${ConFrontImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3.25}
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
          sticky={{ start: 3.5, end: 4 }}
          style={{
            backgroundImage: `url(${ConFoodImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.2, end: 0.2 }}
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
          sticky={{ start: 0.8, end: 0.8 }}
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
        <ParallaxLayer
          sticky={{ start: 1.12, end: 1.12 }}
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
        <ParallaxLayer
          sticky={{ start: 1.35, end: 1.35 }}
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
          sticky={{ start: 1.75, end: 1.75 }}
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
          sticky={{ start: 2.15, end: 2.15 }}
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
          sticky={{ start: 2.87, end: 2.87 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
            color: "white",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          <h1>Get In Touch For Your Next Dinner Party</h1>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.5, end: 3.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
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
