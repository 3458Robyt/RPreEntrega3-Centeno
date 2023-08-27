import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import NotFound from "../NotFound/NotFound";
import "./Checkout.css";

const Checkout = () => {
  const { cartList, qtyItem, totalPrice } = useCartContext();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [endBuy, setEndBuy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: { name: name, email: email },
      items: cartList,
      total: totalPrice(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order);

    setName("");
    setSurname("");
    setEmail("");
    setEndBuy(true);
  };

  return (
    <>
      {!cartList.length > 0 ? (
        <NotFound />
      ) : (
        <div className="cartContainer">
          <p className="cartTitle">Checkout</p>
          {cartList.map((product) => (
            <div key={product.id} className="itemContainer">
              <div className="itemContainerLeft">
                <img src={product.img} className="imgCart" alt={product.id} />
              </div>
              <div className="textCart itemContainerRight">
                <div>
                  <p>#0{product.id}</p>
                  <p>Date of collection - {product.category}</p>
                  <p>Stock available - {product.stock}</p>
                  <p>Contract - {product.contract}</p>
                  <p>Price - {product.price} ETH</p>
                </div>
              </div>
            </div>
          ))}
          <div className="totalCart2">
            <p className="totalCartTitle">Total</p>
            <div className="totalCartData">
              <p>Total items</p>
              <p>{qtyItem()}</p>
            </div>
            <div className="totalCartData">
              <p>Total price</p>
              <p>ETH {totalPrice()}</p>
            </div>
          </div>

          {endBuy == false ? (
            <form onSubmit={handleSubmit}>
              <h2 className="complete">Complete the form and finish!</h2>
              <div className="nameInputs">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  required
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button className="endBuy" type="submit">
                End buy
              </button>
            </form>
          ) : (
            <div className="grayBg">
              <h2>Thanks for buy!</h2>
              <p>You will receive your order once the payment is confirmed.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
