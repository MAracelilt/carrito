import React from "react";
import "./App.css";
import ShoppingCart from "./ShoppingCart";
import CartOne from "./CartOne";
import CartTwo from "./CartTwo";
import CartThree from "./CartThree";
import libro from "./images/libro.jpg"
import bombones from "./images/bombones.jpg"
import chocolate from "./images/chocolate.jpg"
import pelicula from "./images/pelicula.png"
import perfume from "./images/perfume.jpg"
import pills from "./images/pills.png"

export interface IItem {
  id: number;
  title?: string;
  image?: string;
  importTax: number;
  tax: number;
  price: number;
  quantity?: number;
  cart?: number;
}

interface IProps {}

interface IState {
  items: IItem[];
  itemsCartOne: IItem[];
  itemsCartTwo: IItem[];
  toggleContent: "emptyCart" | "cartOne" | "cartTwo" | "cartThree";
}

let items: IItem[] = [
  {
    id: 1,
    title: "Libro",
    image:libro,
    importTax: 0,
    price: 12.49,
    quantity: 1,
    cart: 1,
    tax: 0
  },
  {
    id: 2,
    title: "Pelicula DVD",
    image:pelicula,
    importTax: 0,
    price: 14.99,
    quantity: 1,
    cart: 1,
    tax: 0.1
  },
  {
    id: 3,
    title: "Barrita chocolate",
    image:chocolate,
    importTax: 0,
    price: 0.85,
    quantity: 1,
    cart: 1,
    tax: 0
  },
  {
    id: 4,
    title: "Caja bombones",
    image:bombones,
    importTax: 0.05,
    price: 10,
    quantity: 1,
    cart: 2,
    tax: 0
  },
  {
    id: 5,
    title: "Perfume",
    image:perfume,
    importTax: 0.05,
    price: 47.5,
    quantity: 1,
    cart: 2,
    tax: 0.1
  },
  {
    id: 6,
    title: "Perfume",
    image:perfume,
    importTax: 0.05,
    price: 27.99,
    quantity: 1,
    cart: 3,
    tax: 0.1
  },
  {
    id: 7,
    title: "Perfume",
    image:perfume,
    importTax: 0,
    price: 18.99,
    quantity: 1,
    cart: 3,
    tax: 0.1
  },
  {
    id: 8,
    title: "Pastillas para el estómago",
    image:pills,
    importTax: 0,
    price: 9.75,
    quantity: 1,
    cart: 3,
    tax: 0
  },
  {
    id: 9,
    title: "Bombones",
    image:bombones,
    importTax: 0.05,
    price: 11.25,
    quantity: 1,
    cart: 3,
    tax: 0
  }
];
class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      items: [],
      itemsCartOne: [],
      itemsCartTwo: [],
      toggleContent: "emptyCart"
    };
  }

  render() {
    const { toggleContent } = this.state;
    return (
      <>
      
<nav className="navbar navbar-dark bg-success mb-5">
  <a className="navbar-brand" href="#">
   
    <h3>Productos</h3>
  </a>
</nav>
        <ShoppingCart items={items} />
        <div className="row mt-3">
          <div className="col-2"></div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success ml-5"
              onClick={() => {
                this.setState({ toggleContent: "cartOne" });
              }}
              onBlur={()=> this.setState({toggleContent: "emptyCart"})}
            >
              Cesta 1
            </button>
            {toggleContent === "cartOne" && (
          <CartOne
            items={items}
            itemsCartOne={items.filter(b => b.cart === 1)}
          />
        )}
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success ml-5"
              onClick={() => {
                this.setState({ toggleContent: "cartTwo" });
              }}
              onBlur={()=> this.setState({toggleContent: "emptyCart"})}
            >
              Cesta 2
            </button>
            {toggleContent === "cartTwo" && (
          <CartTwo
            items={items}
            itemsCartTwo={items.filter(b => b.cart === 2)}
          />
        )}
            
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success ml-5"
              onClick={() => {
                this.setState({ toggleContent: "cartThree" });
              }}
              onBlur={()=> this.setState({toggleContent: "emptyCart"})}
            >
              Cesta 3
            </button>
            {toggleContent === "cartThree" && (
          <CartThree
            items={items}
            itemsCartThree={items.filter(b => b.cart === 3)}
          />
        )}
          </div>
        </div>
        
        
        
      </>
    );
  }
}

export default App;
