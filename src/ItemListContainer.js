import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let apiUrl = 'https://fakestoreapi.com/products';
    if (categoryId) {
      apiUrl += `?category=${categoryId}`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [categoryId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Catálogo</h2>
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
