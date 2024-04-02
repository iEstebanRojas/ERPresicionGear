import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        
        const filteredProducts = data.filter((product) => product.category === categoryId);
        
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [categoryId]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
