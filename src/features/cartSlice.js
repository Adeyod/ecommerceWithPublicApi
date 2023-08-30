import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      let cpyCurrentCartItems = [...state.cartItems];

      const index = cpyCurrentCartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (index === -1) {
        cpyCurrentCartItems.push({
          ...payload,
          quantity: 1,
        });
        toast.success(`${payload.title} has been added to cart`);
      } else {
        cpyCurrentCartItems[index] = {
          ...cpyCurrentCartItems[index],
          quantity: cpyCurrentCartItems[index].quantity + 1,
        };
        toast.success(
          `${payload.title}'s quantity has been increased by one in the cart`
        );
      }
      state.cartItems = cpyCurrentCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      let newUpdatedCartItems = [...state.cartItems];

      const index = newUpdatedCartItems.findIndex(
        (item) => item.id === payload.id
      );

      const { quantity } = newUpdatedCartItems[index];
      if (quantity <= 1) {
        newUpdatedCartItems = newUpdatedCartItems.filter(
          (item) => item.id !== payload.id
        );
        toast.error(`${payload.title} has been removed from cart`);
      } else {
        newUpdatedCartItems[index] = {
          ...newUpdatedCartItems[index],
          quantity: newUpdatedCartItems[index].quantity - 1,
        };
        toast.error(
          `${payload.title}'s quantity has been reduced by 1 in the cart`
        );
      }
      state.cartItems = newUpdatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    emptyCart: (state) => {
      state.cartItems = [];
      localStorage.clear('cartItems');
      toast.error('cart is empty');
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, quantity, discountPercentage } = cartItems;
          const discountedPercentage = (price * discountPercentage) / 100;
          const actualPrice = price - discountedPercentage;
          const itemTotal = actualPrice * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total.toFixed(2);
    },

    deleteFromCart(state, action) {
      const { payload } = action;
      let currentCartItems = [...state.cartItems];

      const index = currentCartItems.findIndex(
        (item) => item.id === payload.id
      );
      const newCurrentCartItems = currentCartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = newCurrentCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      toast.error(`${payload.title} is deleted from cart`);
    },
  },
});

export const {
  getTotal,
  addToCart,
  deleteFromCart,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
