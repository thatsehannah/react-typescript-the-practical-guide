import { ReactNode } from 'react';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { useAppSelector, useCartDispatch } from '../store/hooks';
import { CartItemNoQty } from '../types/CartItem';

const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const formattedTotalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (item: CartItemNoQty) => {
    dispatch(addToCart(item));
  };

  let content: ReactNode;

  if (cartItems.length === 0) {
    content = <p>No items in cart!</p>;
  } else {
    content = (
      <ul id='cart-items'>
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className='cart-item-actions'>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div id='cart'>
      {content}
      <p id='cart-total-price'>
        Cart Total: $<strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default CartItems;
