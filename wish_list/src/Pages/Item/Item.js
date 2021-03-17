import React, { useEffect } from "react";
import "./Item.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/index";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.cartReducer);

  useEffect(() => {
    console.log({ store });
  });
  return (
    <div className="Item">
      <div className="frontContainer">
        <img src="images/cup.png" alt="상품 이미지" className="itemImage"></img>
        <div className="bottomWrapper">
          <div className="itemInfo">
            <div className="itemName">ㅎㅇ</div>
            <div className="itemPrice">ㅎㅇ</div>
          </div>
          {/* <button className="cartIconWrapper"> */}
          <img
            src="images/cart.png"
            alt="카트"
            className="cartIcon"
            onClick={() => dispatch(addToCart(item))}
          ></img>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
