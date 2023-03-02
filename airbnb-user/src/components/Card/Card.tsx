import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

type PropsType = { images: string[] };

function Card({ images }: PropsType) {
  const [imageNb, setImageNb] = useState(0);
  return (
    <div className="card">
      <div className="imagesView">
        <img src={images[imageNb]} alt="home" />
      </div>
      <div className="description">
        <div className="location">
          <p>Kumluca, Antalya, Turkey</p>
          <p>
            <FontAwesomeIcon icon={faStar} /> 4.74
          </p>
        </div>
        <div className="date"><p>Mar 2-7</p></div>
        <div className="price"><p>$87 night</p></div>

      </div>
    </div>
  );
}

export default Card;
