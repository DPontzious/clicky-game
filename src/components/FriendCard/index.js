import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      {/* <span className="card" onClick={() => props.shuffleFriend(props.id)} >
      </span> */}

    </div >
  );
}

export default FriendCard;
