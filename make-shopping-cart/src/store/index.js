import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";



// const logger  = (store) => (next) => (action) => {
//   console.log(store)
//   console.log(next)
//   console.log(action)
//   next(action)
// }

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // middleware: [logger],
});
