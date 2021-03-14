import React from "react";
import "./Item.scss";

const Item = ({ img, name, price }) => {
  return (
    <div className="Item">
      <div className="itemContainer">
        <img src={img} alt="크로우캐년" className="itemImage"></img>
        <div className="itemInfo">
          <div className="itemName">{name}</div>
          <div className="itemPrice">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
