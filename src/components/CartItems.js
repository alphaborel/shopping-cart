import React, { Component } from 'react';

class CartItems extends Component {

  render() {
    let theList = this.props.items;
    return (
      <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
        </div>
      </div>
      <div class="collection-item">
    { theList.map((theList)=>

      <div class="row">
      <div class="col-md-8">{theList.name}</div>
      <div class="col-md-2">{theList.priceInCents}</div>
      <div class="col-md-2">{theList.quantity}</div>
      </div>

     )}
      </div>
      </div>
      </div>
    );
  }
}

export default CartItems;
