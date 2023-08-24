import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;
