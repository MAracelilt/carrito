import React from "react";
import { IItem } from "./App";

interface IProps {
  items: IItem[];
  itemsCartOne: IItem[];
}

interface IState {}

class CartOne extends React.PureComponent<IProps, IState> {
  render() {
    const { itemsCartOne } = this.props;
    console.log(itemsCartOne);
    let totalItems = itemsCartOne.reduce((a, c) => a + c.price, 0).toFixed(2);
    let totalTaxes = itemsCartOne
      .reduce((a, c) => a + c.price * c.tax, 0)
      .toFixed(2);
    let totalCart = Number(totalItems) + Number(totalTaxes);

    console.log(totalItems);
    console.log(totalTaxes);
    console.log(totalCart);

    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <table cellPadding={3} cellSpacing={4}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Tasas</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsCartOne.map(({ id, title, price, tax }) => (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{(price * tax).toFixed(2)}</td>
                    <td>{(price * tax + price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row mt-2">
            <h5>Total Cesta {totalCart}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default CartOne;
