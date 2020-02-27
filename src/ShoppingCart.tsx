import React from "react";
import { IItem } from "./App";
import imported from "./images/imported.png"



interface IProps{
items:IItem[]
}

interface IState{
 
}

class ShoppingCart extends React.PureComponent<IProps, IState>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      total: 0,
      quantity:0
    }
    
  }

  

  render() {
    const {items} = this.props;
    
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            
          {items.map(({id, title, price, image, importTax}) => (
            <div key={id} className="card ml-2" style={{width: "10rem"}}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <img src={image} style={{width: "90px", height: "60px"}}/>
                <div className="card-text mt-1">
                 {price} €
                 {importTax !== 0 &&<p style={{fontStyle:"oblique"}}>Imported</p>}
                </div>
              </div>
            </div> 
           ))} 
           </div>
            </div>
           
      </>
    );
  }
}

export default ShoppingCart;
