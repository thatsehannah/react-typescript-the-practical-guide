export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export type CartItemNoQty = Omit<CartItem, 'quantity'>;
