import React, { createContext, useState, useContext } from "react";

// creating a context
export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    // search on cartlist if the product.id exist or not, saving matchs on const = index
    const index = cartList.findIndex((i) => i.id == product.id);
    // if exist:
    if (index > -1) {
      // go to "toCart" and save on variable
      const oldQty = cartList[index].toCart;
      // getting theh first item
      cartList.splice(index, 1);
      // save on list modifying qty
      setCartList([
        ...cartList,
        { ...product, toCart: product.toCart + oldQty },
      ]);
    } else {
      // if do not exist the item, create on list
      setCartList([...cartList, { ...product, toCart: product.toCart }]);
    }
  };
  const cleanCart = () => {
    setCartList([]);
  };
  const deleteItem = (id) => {
    // sell on cartlist all items do not equail to product id (product for delete)
    setCartList(cartList.filter((product) => product.id !== id));
  };
  const qtyItem = () => {
    return cartList.reduce((acum, product) => acum = acum + product.toCart, 0 )
  };
  const totalPrice = () => {
    return cartList.reduce((acum, value) => (acum +(value.toCart * value.price)), 0)
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        cleanCart,
        deleteItem,
        qtyItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
