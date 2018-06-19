import React, { Component } from 'react';

const somefunc = () => {
  console.log('Im here!');
}

class CartItems extends Component {

  render() {

    return (
      <div className="container">
      <h1>Cart Items</h1>
      </div>
    );
  }
  // somefunc = () => {
  //   console.log('Im here!');
  // }

}


export default CartItems;
