import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/3.jpeg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpeg";

import "./index.css";

function Home() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <>
      <Navbar />
      <div className="container">
        <Card images={images} />
      </div>
    </>
  );
}

export default Home;
