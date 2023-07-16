import React from 'react';
import { BsCart } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItemCount }) => {
  return (
    <div className="cart-widget bg-white">
      <Link to="/cart">
        <BsCart className="cart-icon" />
        <Badge pill bg="primary" className="cart-notification">
          {cartItemCount}
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
