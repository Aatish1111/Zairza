import React from "react";
import topbg from '../img/bgblog.png'
import './UpperNav.css'

const UpperNav = () => {
  return (
    <div class="container">
      <img src={topbg} alt=""/>
      <div class="centered">
        <h1>Insightful<br/>Blogs For You</h1>
      </div>
    </div>
  );
};

export default UpperNav;
