import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../css/Products.css';

function Navbar() {
  const [userName, setUserName] = useState('');

  const logout = () => {
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user.name);
  }, []);

  return (
    <nav className="navbar">
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        <p>Produtos</p>
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        <p>Meus Pedidos</p>
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        to="/userProfile"
      >
        <p>{ userName }</p>
      </div>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ logout }
      >
        <p>Sair</p>
      </Link>
    </nav>
  );
}

export default Navbar;
