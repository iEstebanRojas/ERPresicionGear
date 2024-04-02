import React from 'react';

const ProductDetail = ({ productName, productPrice }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <p>Precio: ${productPrice}</p>
    </div>
  );
};

export default ProductDetail;
