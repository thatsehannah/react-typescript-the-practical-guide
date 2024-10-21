import { useState } from 'react';

import Cart from './Cart.tsx';
import { useAppSelector } from '../store/hooks.ts';

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const totalQty = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

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
          <button onClick={handleOpenCartClick}>Cart ({totalQty})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
