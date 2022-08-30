import React from "react";
import p1 from "../img/p1.png"
import p2 from "../img/p2.png"
import p3 from "../img/p4.png"
import './Card.css'

const Card = () => {
  return (
    <div className="Card">
      <div className="Cards">
        <div className="Cards_img">
          <img src={p1} alt='' />
        </div>
        <div className="Cards_text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>
      <div className="Cards">
        <div className="Cards_img">
          <img src={p2} alt='' />
        </div>
        <div className="Cards_text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>
      <div className="Cards">
        <div className="Cards_img">
          <img src={p3} alt='' />
        </div>
        <div className="Cards_text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;