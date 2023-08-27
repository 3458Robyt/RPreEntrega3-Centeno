import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, price, title, image } = product;

  return (
    <div className={product.category}>
      <div className="ItemContainer">
        <img src={image} alt={id}/> 
        <div className="price">
          <p>{title}</p>
          <p>{price} $</p>
        </div>
        <Link to={`/details/${product.id}`}>
          <div className="detailsBtn">View Details</div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
