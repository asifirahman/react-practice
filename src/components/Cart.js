import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemAccordion from "./ItemAccordion";
import { clearCart } from "../utils/store/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="res-menu">
      <h2>Cart</h2>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      <hr className="line-break" />
      <ItemAccordion items={cartItems} />
    </div>
  );
}
