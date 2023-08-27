import "./ItemDetail.css";
import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ productDetails }) => {
  const { id, price, category, image, description, title } = productDetails;
  const { addToCart } = useContext(CartContext);
  console.log("ide de producto itemdetail:", productDetails.id);

  const handlerOnAdd = (toCart) => {
    addToCart({ ...productDetails, toCart: toCart });
  };

  return (
    <div className="detailsBigContainer">
      <div className="ItemDetailsContainer">
        <img src={image} alt={id} />
        <div className="detailsContainer">
          <div>
            <p>{title}</p>
            <br></br>
            <p>Category - {category}</p>
            <br></br>
            <p>Description - {description}</p>
            <br></br>
            <p>Price - {price} $</p>
            <br></br>
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
