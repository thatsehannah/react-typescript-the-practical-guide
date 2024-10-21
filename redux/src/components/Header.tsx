import { useState } from 'react';

import Cart from './Cart.tsx';
import { useAppSelector } from '../store/hooks.ts';

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartLength = useAppSelector((state) => state.cart.items.length);

  const handleOpenCartClick = () => {
    setCartIsVisible(true);
  };

  const handleCloseCartClick = () => {
    setCartIsVisible(false);
  };

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <img
            src='logo.png'
            alt='Elegant model'
          />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartLength})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
