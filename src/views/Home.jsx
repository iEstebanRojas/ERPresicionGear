import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import data from "../data/products.json";
import backgroundImage from "../assets/background.jpg"; // Importa la imagen de fondo desde tu directorio de assets

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Espera de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(data);
      } catch (error) {
        setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
      <Container style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px' }}>
        <h2>Bienvenido a ERPresicionGear</h2>
        <p>
          En ERPresicionGear nos dedicamos a ofrecer una amplia variedad de instrumentos de alta precisión para metrología.
          Nuestro objetivo es proporcionar a nuestros clientes las herramientas necesarias para realizar mediciones precisas y confiables en diversos campos, incluyendo la industria, la investigación y la educación.
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!error && (
          <>
            <h3>Productos destacados</h3>
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col-md-4 mb-3">
                  <Card>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.detail}</Card.Text>
                      <Button as={Link} to={`/item/${product.id}`} variant="primary">Ver detalles</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Home;

