import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    const index = cartList.findIndex((i) => i.id === product.id);
    if (index > -1) {
      const oldQty = cartList[index].toCart;
      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...product, toCart: product.toCart + oldQty },
      ]);
    } else {
      setCartList([...cartList, { ...product, toCart: product.toCart }]);
    }
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartList(cartList.map(existing =>
      existing.id === itemId
        ? { ...existing, toCart: newQuantity }
        : existing
    ));
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  const qtyItem = () => {
    return cartList.reduce((acum, product) => acum + product.toCart, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (acum, value) => acum + value.toCart * value.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        updateCartItemQuantity,
        deleteItem,
        qtyItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
