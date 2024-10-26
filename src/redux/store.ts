import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './FilterSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    filters: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
