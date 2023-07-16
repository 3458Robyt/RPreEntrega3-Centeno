import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ addToCart }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'https://fakestoreapi.com/products';
        if (categoryId) {
          apiUrl += `?category=${categoryId}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
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
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
