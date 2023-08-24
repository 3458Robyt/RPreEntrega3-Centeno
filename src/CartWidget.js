import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const CartWidget = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="cart-widget bg-white">
      <Link to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 cart-icon" viewBox="0 0 16 16">
          {/* SVG code for your cart icon */}
        </svg>
      </Link>
      <span className="cart-notification">
        {cartItems.length}
      </span>
    </div>
  );
};

export default CartWidget;
