import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    // Aquí puedes realizar la lógica para cargar los detalles del producto según el ID del item
    // Puedes utilizar el hook useEffect para hacerlo una vez que el componente se monta
    // o cuando el ID del item cambie
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Detalle de Producto</h2>
      <div>
        <h3>Nombre del Producto</h3>
        <p>Descripción del producto</p>
        <p>Precio: $99.99</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
