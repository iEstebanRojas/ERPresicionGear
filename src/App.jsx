import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contact from './views/Contact';
import Error404 from './views/Error404';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import Products from './views/Products';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;