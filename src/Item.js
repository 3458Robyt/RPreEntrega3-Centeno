import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item">
      <Link to={`/item/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default Item;
