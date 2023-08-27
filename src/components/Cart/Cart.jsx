import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import NotFound from "../NotFound/NotFound";
import "./Cart.css";

const Cart = () => {
  // import "tools" (variables and functions) of context
  const { cartList, cleanCart, deleteItem, qtyItem, totalPrice } =
    useCartContext();

  return (
    <>
      {!cartList.length > 0 ? (
        <NotFound />
      ) : (
        <div className="cartContainer">
          <p className="cartTitle">Cart</p>
          {cartList.map((product) => (
            <div key={product.id} className="itemContainer">
              <div className="itemContainerLeft">
                <Link to={`/details/${product.id}`}>
                  <img src={product.img} alt={product.id} className="imgCart"/>
                </Link>
              </div>
              <div className="textCart itemContainerRight">
                <div>
                  <p>#0{product.id}</p>
                  <p>Date of collection - {product.category}</p>
                  <p>Stock available - {product.stock}</p>
                  <p>Contract - {product.contract}</p>
                  <p>Price - {product.price} ETH</p>
                </div>
                <p
                  className="btnDelete"
                  key={product.id}
                  onClick={() => deleteItem(product.id)}
                >
                  Detele item
                </p>
              </div>
            </div>
          ))}
          <div className="totalCart1">
            <p className="totalCartTitle">Total</p>
            <div className="totalCartData">
              <p>Total items</p>
              <p>{qtyItem()}</p>
            </div>
            <div className="totalCartData">
              <p>Total price</p>
              <p>ETH {totalPrice()}</p>
            </div>
            <h2 className="complete">Go buying!</h2>
            <div className="buttonsCart">
              <p onClick={() => cleanCart()}>Clean cart</p>
              <Link to={"/checkout"}>Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
