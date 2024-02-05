import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearAllCart,
  decrementQuantity,
  getTotal,
  incrementQuantity,
} from "../../Redux/slices/cartSlice";
import { styled } from "@mui/system";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(() => ({
  padding: "8px",
  borderBottom: "1px solid #e0e0e0",
}));

const CartProduct = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const SHIPPING_FEES = 7.99;
  const dispatch = useDispatch();

  function handleBack() {
    window.history.back();
  }

  // function handleRemoveItem(cartItem) {
  //   dispatch(decrementQuantity(cartItem));
  // }

  function handleAddItem(cartItem) {
    if (cartItem.cartQuantity < cartItem.stock) {
      dispatch(incrementQuantity(cartItem.id));
    } else {
      // Notify the user that the maximum stock limit has been reached
      // You can show a toast message or display an alert here
      console.log("Maximum stock limit reached");
    }
  }
  
  function handleRemoveItem(cartItem) {
    if (cartItem.cartQuantity > 1) {
      dispatch(decrementQuantity(cartItem.id));
    }
  }
  function handleQuantityChange(value, cartItem) {
  const newQuantity = parseInt(value);
  if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= cartItem.stock) {
    if (newQuantity > cartItem.cartQuantity) {
      dispatch(incrementQuantity(cartItem.id));
    } else if (newQuantity < cartItem.cartQuantity) {
      dispatch(decrementQuantity(cartItem.id));
    }
  }
}


  function clearCart() {
    dispatch(clearAllCart());
  }

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      {cartItems.length >= 1 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((cartItem) => (
                <TableRow key={cartItem.id}>
                  <StyledTableCell>
                    <img
                      src={cartItem.images[0]}
                      style={{ width: "50px", height: "50px" }}
                    />
                    {cartItem.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => {
                        handleRemoveItem(cartItem);
                      }}
                    >
                      <Remove />
                    </IconButton>
                    <TextField
  type="number"
  value={cartItem.cartQuantity}
  variant="outlined"
  size="small"
  inputProps={{ min: 1, max: cartItem.stock }} // Setting max value to available stock
  onChange={(e) => handleQuantityChange(e.target.value, cartItem)}
/>

                    <IconButton
                      size="small"
                      onClick={() => {
                        handleAddItem(cartItem);
                      }}
                    >
                      <Add />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {cartItem.price}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {cartItem.price * cartItem.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => {
                        handleRemoveItem(cartItem);
                      }}
                    >
                      Remove
                    </IconButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button onClick={clearCart}>Clear Cart</Button>
      <Button onClick={handleBack}>Back to Shopping</Button>
    </>
  );
};

export default CartProduct;
