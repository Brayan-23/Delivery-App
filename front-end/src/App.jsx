import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomerProvider from './context/CustomerContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Customer/Products';
import Checkout from './pages/Customer/Checkout';
import Details from './pages/Customer/CustomerOrders';
import CustomerOrderDetails from './pages/Customer/CustomerOrderDetails';
import SellerOrders from './pages/Seller/SellerOrders';
<<<<<<< HEAD
import SellerOrderDetails from './pages/Seller/SellerOrderDetails';
=======
import Manage from './pages/Admin/Manage';
>>>>>>> ca47e766cf9c2a1297c7168e37a958e2942239f6

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <CustomerProvider>
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ Details } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
      </CustomerProvider>
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/admin/manager" component={ Manage } />
    </BrowserRouter>
  );
}

export default App;
