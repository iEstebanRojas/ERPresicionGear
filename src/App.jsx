import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:id" component={Products} />
        <Route exact path="/item/:id" component={ProductDetail} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
