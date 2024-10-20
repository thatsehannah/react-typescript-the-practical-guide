import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { Product } from '../types/Product';

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const formattedTotalPrice = cartItems
    .reduce((total, current) => total + current.price * current.quantity, 0)
    .toFixed(2);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (item: Product) => {
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
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default CartItems;
