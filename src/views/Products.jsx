import React from 'react';
import productsData from '../data/products.json';

const Products = () => {
  return (
    <div>
      <h2>Productos</h2>
      {productsData.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
