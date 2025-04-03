import React from "react";
import { useSelector } from "react-redux";

import CartCard from "./CartCard";
import CartForm from "./CartForm";
const Cart = () => {
  const moviesInCart = useSelector((state) => state.Movies.cart);

  if (moviesInCart.length == 0) {
    return (
      <div className="h-[calc(100vh-329px)]">
        <h2>cart is empty</h2>
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap p-8 gap-2 w-full">
        <CartForm></CartForm>
        <div className=" flex flex-col gap-5 min-h-[calc(100vh-329px)] min-w-3/4">
          {moviesInCart.map((movie) => (
            <CartCard movie={movie}></CartCard>
          ))}
        </div>
      </div>
    );
  }
};

export default Cart;
