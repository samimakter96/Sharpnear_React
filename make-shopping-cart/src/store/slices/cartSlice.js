// Action Types
// export const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
// export function addCartItem(productData) {
//   return { type: CART_ADD_ITEM, payload: productData };
// }

// export function removeCartItem(productId) {
//   return { type: CART_ADD_ITEM, payload: { productId } };
// }

// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId },
//   };
// }

// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId },
//   };
// }

// Reducer
// export default function cartReducer(state = [], action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const existingItem = state.find(
//         (cartItem) => cartItem.productId === action.payload.productId
//       );
//       if (existingItem) {
//         return state.map((cartItem) => {
//           if (cartItem.productId === existingItem.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           }
//           return cartItem;
//         });
//       }
//       return [...state, { ...action.payload, quantity: 1 }];

//     case CART_REMOVE_ITEM:
//       return state.filter(
//         (cartItem) => cartItem.productId !== action.payload.productId
//       );
//     case CART_ITEM_INCREASE_QUANTITY:
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity + 1 };
//         }
//         return cartItem;
//       });

//     case CART_ITEM_DECREASE_QUANTITY:
//       return state
//         .map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity - 1 };
//           }
//           return cartItem;
//         })
//         .filter((cartItem) => cartItem.quantity > 0);
//     default:
//       return state;
//   }
// }


/* same but using Redux toolkit */

import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1);
    },
  },
});


export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

export default slice.reducer;
