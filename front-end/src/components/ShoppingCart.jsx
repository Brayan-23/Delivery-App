import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomerContext } from '../context/CustomerContext';

export default function ShoppingCart({ products = [], buttonEnabled = false }) {
  const { setCart } = useContext(CustomerContext);
  const fixNumberFormat = (number) => number.toFixed(2).toString().replace('.', ',');

  const totalValue = () => {
    let total = 0;
    if (buttonEnabled) {
      total = products.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    } else {
      total = products.reduce((acc, curr) => acc + curr.SaleProduct.quantity
      * Number(curr.price), 0);
    }
    return fixNumberFormat(total);
  };

  const removeFromCart = (id) => {
    const newCart = products.filter((item) => item.id !== id);
    setCart(newCart);
  };

  console.log('array que chegou no shopping cart :', products);

  const itemNumber = 'customer_checkout__element-order-table-item-number';
  const unitPrice = 'customer_checkout__element-order-table-unit-price';
  const subTotal = 'customer_checkout__element-order-table-sub-total';

  return (
    <section>
      <h2> Meu Pedido </h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            { buttonEnabled ? <th>Remover item</th> : <div /> }
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={ `${itemNumber}-${index}` }
              >
                {index + 1}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>

              <td
                data-testid={ `${unitPrice}-${index}` }
              >
                {fixNumberFormat(Number(product.price))}
              </td>

              <td
                data-testid={ `${subTotal}-${index}` }
              >
                { buttonEnabled ? (
                  fixNumberFormat(Number(product.price * product.quantity))
                ) : (
                  fixNumberFormat(Number(product.price * product.SaleProduct.quantity))
                ) }
              </td>

              { buttonEnabled ? (
                <td>
                  <button
                    type="button"
                    id="deleteBtn"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ () => removeFromCart(product.id) }
                  >
                    Remover
                  </button>
                </td>) : <div /> }
            </tr>
          )) }
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: ${totalValue()}` }
      </div>
    </section>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.array,
  buttonEnabled: PropTypes.bool,
}.isRequired;
