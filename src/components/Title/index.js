import React from "react";
import "./style.css";

function Title(props) {
  return (
    <header>
      <h1 className="title">Current Score {props.score}</h1>
      <h1 className="title">High Score {props.highScore}</h1>
      <h3 className="instructions">Click on an image to earn points but don't click an image more than once. See if you can get the high score!</h3>
    </header>
  );
}



export default Title;
