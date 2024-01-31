// import { createSlice } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";

// const initialState = {
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       console.log(action);
//       const item = action.payload;
//       let productItem = state.cartItems.find(
//         (product) => product.id === item.id
//       );
//       if (productItem) {
//         productItem.quantity += 1;
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your item has been updated",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       } else {
//         state.cartItems = [item, ...state.cartItems];
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your item has been saved",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     },
//     incrementQ(state, action) {
//       const item = action.payload;
//       let productItem = state.cartItems.find(
//         (product) => product.id === item.id
//       );
//       if (productItem) {
//         productItem.quantity += 1;
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your item has been updated",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     },
//     decrementQ(state, action) {
//       const item = action.payload;
//       let productItem = state.cartItems.find(
//         (product) => product.id === item.id
//       );
//       if (productItem) {
//         productItem.quantity -= 1;
//         if (productItem.quantity === 0) {
//           state.cartItems = state.cartItems.filter(
//             (product) => product.id !== item.id
//           );
//         }
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your item has been updated",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     },
//     removeFromCart(state, action) {
//       const item = action.payload;
//       state.cartItems = state.cartItems.filter(
//         (product) => product.id !== item.id
//       );
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Your item has been removed",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     },
//   },
// });

// export const { addToCart, incrementQ, decrementQ, removeFromCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    totalQuantity:0,
    totalAmount:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : 
        {
            addToCart(state,action) {
            const cartItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id);

            if(cartItemIndex >= 0) {
                state.cartItems[cartItemIndex].cartQuantity += 1;
                toast.info(`${action.payload.name} is added to the cart again!`,
                {position:'top-right' })
            }

            else {
                const tempProduct = {...action.payload, cartQuantity:1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} is added to the cart!`,
                {position:'top-right'})
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },

        removeCartItem(state,action) {
          const inCartItems =  state.cartItems.filter(
                cartItem => cartItem.id!==action.payload.id
            );
            state.cartItems=inCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} is removed from the cart!`,
                {position:'bottom-right'})
        },

        decreaseCartQuantity(state,action ) {
                const itemIndex= state.cartItems.findIndex(
                    cartItem => cartItem.id === action.payload.id
                )
                
                if(state.cartItems[itemIndex].cartQuantity > 1) {
                    state.cartItems[itemIndex].cartQuantity-= 1;
                }

                else if(state.cartItems[itemIndex].cartQuantity === 1) {
                    const inCartItems =  state.cartItems.filter(
                        cartItem => cartItem.id!==action.payload.id
                    );
                    state.cartItems=inCartItems;
                    toast.error(`${action.payload.name} is removed from the cart!`,
                        {position:'bottom-right'})
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
                
        },

        increaseCartQuantity(state,action) {
            const itemIndex= state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
                state.cartItems[itemIndex].cartQuantity+= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))            
        },

        clearAllCart(state) {
            state.cartItems = [];
            toast.error(`The cart is cleared!`,
                        {position:'bottom-right'});
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));  

        },

        getTotal(state) {
            let {total,quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price,cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total:0,
                quantity:0,
            });

            state.totalQuantity = quantity;
            state.totalAmount = total;
        }

    }
})

export const {addToCart, removeCartItem, decreaseCartQuantity,
    increaseCartQuantity,clearAllCart, getTotal} = cartSlice.actions;
export default cartSlice.reducer;

