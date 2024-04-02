import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Button } from 'react-bootstrap';

import data from "../data/products.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts(data);
  }, []);

  return (
    <Container>
      <h2>Bienvenido a ERPresicionGear</h2>
      <p>
        En ERPresicionGear nos dedicamos a ofrecer una amplia variedad de instrumentos de alta precisión para metrología.
        Nuestro objetivo es proporcionar a nuestros clientes las herramientas necesarias para realizar mediciones precisas y confiables en diversos campos, incluyendo la industria, la investigación y la educacion.
      </p>
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
    </Container>
  );
};

export default Home;
