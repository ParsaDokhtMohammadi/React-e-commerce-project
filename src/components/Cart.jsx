import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card"
import CartCard from "./CartCard";
const Cart = () => {
  const moviesInCart = useSelector((state) => state.Movies.cart);
  
  if (moviesInCart.length == 0) {
    
    return <div className="h-[calc(100vh-329px)]"><h2>cart is empty</h2></div>;
  } else {
    return (
      <div className=" flex flex-col gap-5 min-h-[calc(100vh-329px)]">
          {moviesInCart.map(movie=>
            <CartCard movie={movie}></CartCard>
          )}
      </div>
    );
  }
};

export default Cart;
