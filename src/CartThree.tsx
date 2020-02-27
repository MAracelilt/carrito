import React from "react";
import { IItem } from "./App";

interface IProps {
  items: IItem[];
  itemsCartThree: IItem[];
}

interface IState {}

class CartThree extends React.PureComponent<IProps, IState> {
  render() {
    const { itemsCartThree } = this.props;
    console.log(itemsCartThree);
    let totalItems = itemsCartThree.reduce((a, c) => a + c.price, 0).toFixed(2);
    let totalTaxes = itemsCartThree
      .reduce((a, c) => a + c.price * c.tax, 0)
      .toFixed(2);
    let totalImport = itemsCartThree
      .reduce((a, c) => a + c.price * c.importTax, 0)
      .toFixed(2);
    let totalCart =
      Number(totalItems) + Number(totalTaxes) + Number(totalImport);

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
                {itemsCartThree.map(({ id, title, price, importTax, tax }) => (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{((tax + importTax) * price).toFixed(2)}</td>
                    <td>
                      {(price * tax + price * importTax + price).toFixed(2)}
                    </td>
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

export default CartThree;
