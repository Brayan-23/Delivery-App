import React from 'react';

export default function ShoppingCart() {
  return (
    <section>
      <h2> Meu Pedido </h2>
      <table>
        <thead>
          <tr>
            <th
              data-testid="customer_checkout__element-order-table-item-number-<index"
            >
              Item
            </th>
            <th
              data-testid="customer_checkout__element-order-table-name-<index>"
            >
              Descrição
            </th>
            <th
              data-testid="customer_checkout__element-order-table-quantity-<index>"
            >
              Quantidade
            </th>
            <th
              data-testid="customer_checkout__element-order-table-unit-price-<index>"
            >
              Valor
            </th>
            <th
              data-testid="customer_checkout__element-order-table-sub-total-<index>"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <button
              type="button"
              id="deleteBtn"
              data-testid="customer_checkout__element-order-table-remove-<index></index>"
            >
              Remover
            </button>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
