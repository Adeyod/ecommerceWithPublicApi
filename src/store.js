import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import cartReducer, { getTotal } from './features/cartSlice';

const globalStore = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
globalStore.dispatch(getTotal());
export default globalStore;
