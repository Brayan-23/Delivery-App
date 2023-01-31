import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../css/Products.css';

function Navbar() {
  const [userName, setUserName] = useState('');

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
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/orders"
      >
        MEUS PEDIDOS
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        to="/userProfile"
      >
        { userName }
      </div>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Navbar;
