import React from "react";
import { IItem } from "./App";

interface IProps {
  items: IItem[];
  itemsCartTwo: IItem[];
}

interface IState {}

class CartTwo extends React.PureComponent<IProps, IState> {
  render() {
    const { itemsCartTwo } = this.props;
    console.log(itemsCartTwo);
    let totalItems = itemsCartTwo.reduce((a, c) => a + c.price, 0).toFixed(2);
    let totalTaxes = itemsCartTwo.reduce((a, c) => a + c.price * c.tax, 0);
    let totalImport = itemsCartTwo.reduce(
      (a, c) => a + c.price * c.importTax,
      0
    );
    let totalCart =
      Number(totalItems) +
      Math.ceil(Number(totalTaxes) * 20) / 20 +
      Math.ceil(Number(totalImport) * 20) / 20;

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
                {itemsCartTwo.map(({ id, title, price, importTax, tax }) => (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{(price * tax + price * importTax).toFixed(2)}</td>
                    <td>
                      {Math.ceil(
                        (price * tax + price * importTax + price) * 20
                      ) / 20}
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

export default CartTwo;
