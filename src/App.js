import './App.css';
import { useState } from 'react';
import GumList from './components/BubbleGum';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([])
  const addGumToCart = (gum) => setCart([...cart, gum])
  return (
    <div>
      <h1 className='title'>Bubble Gum Shop</h1>
      <div className='content'>
      <GumList onClickFunction={addGumToCart} />
      <Cart cart={cart}/>
      </div>
    </div>
  )
}

export default App;
