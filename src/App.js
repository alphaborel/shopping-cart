import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';

class App extends Component {
  render() {
    var cartItemsList = [
  { id: 1, name: 'Mediocre Iron Watch', priceInCents: 3.99, quantity: 1 },
  { id: 2, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 , quantity: 2 },
  { id: 3, name: 'Intelligent Paper Knife', priceInCents: 19.99 , quantity: 1 },
]
    return (
      <div>
      <CartHeader />
      <CartItems items={cartItemsList} />
      <CartFooter copy="&copy; 2016"/>
      </div>
    );
  }
}
export default App;
