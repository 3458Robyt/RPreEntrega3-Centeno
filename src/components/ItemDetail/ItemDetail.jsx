import "./ItemDetail.css";
import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ productDetails }) => {
  const { id, price, category, image, description, rating } = productDetails;
  const { addToCart } = useContext(CartContext);

  const handlerOnAdd = (toCart) => {
    addToCart({ ...productDetails, toCart: toCart });
  };

  return (
    <div className="detailsBigContainer">
      <div className="ItemDetailsContainer">
        <img src={image} alt={id} />
        <div className="detailsContainer">
          <div>
            <p>#0{id}</p>
            <p>Category - {category}</p>
            <p>Description - {description}</p>
            <p>Price - {price} $</p>
            <p>Rating - {rating.rate} ({rating.count} reviews)</p>
          </div>
          <div>
            <div className="buyPrice">
              <ItemCount product={productDetails} onAdd={handlerOnAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
