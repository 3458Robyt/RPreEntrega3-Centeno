import React from 'react';
import Item from "../Item/Item";

const ItemList = ({productsList}) => {

  return (
    <>
      {productsList.map((product) => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}

export default ItemList