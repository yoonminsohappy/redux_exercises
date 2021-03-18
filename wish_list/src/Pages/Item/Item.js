import React, { useEffect } from "react";
import "./Item.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../store/actions/index";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const store = useSelector((store) => store.cartReducer);

  // useEffect(() => {
  //   console.log("here>>", { store });
  // });
  return (
    <div className="Item">
      <div className="frontContainer">
        <img
          src={item.img}
          alt="상품 이미지"
          className="itemImage"
          onClick={() => history.push("/cart")}
        ></img>
        <div className="bottomWrapper">
          <div className="itemInfo">
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">{item.price}원</div>
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
