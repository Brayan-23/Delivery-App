import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

import Navbar from '../../components/SellerNavbar';
import api from '../../utils/apiURL';

function SellerOrders() {
  const [orders, setOrders] = useState();
  const orderNumberLength = 4;

  useEffect(() => {
    const getOrders = async () => {
      const response = await api.get('/sale');
      setOrders(response.data);
    };

    getOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        { orders ? (
          orders.map((order) => (
            <Link key={ order.id } to={ `/seller/orders/${order.id}` }>
              <p
                data-testid={ `seller_orders__element-order-id-${order.id}` }
              >
                {String(order.id).padStart(orderNumberLength, '0')}
              </p>

              <p
                data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              >
                {order.status}
              </p>

              <p
                data-testid={ `seller_orders__element-order-date-${order.id}` }
              >
                { moment(`${order.saleDate}`).format('DD/MM/YYYY') }
              </p>

              <p
                data-testid={ `seller_orders__element-card-price-${order.id}` }
              >
                {`R$ ${order.totalPrice.toString().replace('.', ',')}` }
              </p>

              <p
                data-testid={ `seller_orders__element-card-address-${order.id}` }
              >
                { `${order.deliveryAddress}, ${order.deliveryNumber}` }
              </p>
            </Link>
          ))
        ) : <p> Você não tem pedidos </p> }
      </div>
    </>
  );
}

export default SellerOrders;
