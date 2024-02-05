import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(itemInCart);

      if (itemInCart) {
        itemInCart.cartQuantity += 1;
        toast.success("Item added to cart");
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} is added to the cart!`, {
          position: "top-right",
        });
      }

      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeCartItem(state, action) {
      const inCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = inCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} is removed from the cart!`, {
        position: "bottom-right",
      });
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },

    clearAllCart(state) {
      state.cartItems = [];
      toast.error(`The cart is cleared!`, { position: "bottom-right" });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  decrementQuantity,
  incrementQuantity,
  clearAllCart,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
