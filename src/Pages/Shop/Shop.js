import './Shop.css';
import React from 'react';
import GumList from '../../Components/BubbleGum';
import Cart from '../../Components/Cart';
import Button from '../../Components/Shared/Button/Button';
import candy from '../../Store/Candy.json';
import { AddCandy, GetCandy } from '../../Service/Candy/CandyStoreService';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      candy: candy
    };
  };
  render() {
    const addGumToCart = (gum) => this.setState({ cart: [...this.state.cart, gum] })
    const candy = GetCandy();
    const addCandyToSelection = (candy) => AddCandy(candy);
    return (
      <div>
        <h1 className='title'>Bubble Gum Shop</h1>
        <div className='content'>
          <div className='gum-form'>
            <GumList onClickFunction={addGumToCart} candy={candy} />
            <Button btnLabel="Add Candy" onClickEvent={addCandyToSelection} />
          </div>
          <Cart cart={this.state.cart} />
          <AddCandy />
        </div>
      </div>
    )
  }
}

export default Shop;