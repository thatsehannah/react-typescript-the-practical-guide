import { createPortal } from 'react-dom';

import CartItems from './CartItems.tsx';

type CartProps = {
  onClose: () => void;
  onClearCart: () => void;
};

const Cart = ({ onClose, onClearCart }: CartProps) => {
  return createPortal(
    <>
      <div className='cart-backdrop' />
      <dialog
        id='cart-modal'
        open
      >
        <h2>Your Cart</h2>
        <CartItems />
        <p id='cart-actions'>
          <button onClick={onClearCart}>Clear</button>
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
};

export default Cart;
