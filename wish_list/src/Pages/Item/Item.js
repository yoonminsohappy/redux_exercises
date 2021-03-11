import React from "react";
import "./Item.scss";

const Item = () => {
  return (
    <div className="Item">
      <div className="itemContainer">
        <img src="images/cup.png" alt="크로우캐년" className="itemImage"></img>
        <div className="itemInfo">
          <div className="itemName">크로우캐년 퍼플마블</div>
          <div className="itemPrice">21,000원</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
