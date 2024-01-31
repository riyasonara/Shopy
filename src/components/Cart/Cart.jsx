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
import { Add, ArrowBackIos, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearAllCart,
  decreaseCartQuantity,
  getTotal,
  increaseCartQuantity,
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

  function handleRemoveItem(cartItem) {
    dispatch(decreaseCartQuantity(cartItem));
  }

  function handleAddItem(cartItem) {
    dispatch(increaseCartQuantity(cartItem));
  }

  function clearCart() {
    dispatch(clearAllCart());
  }

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  console.log(cartItems);

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
                    <img src={cartItem.images[0]} style={{width:"50px", height:"50px"}}/> {cartItem.title}
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
                      value={cartItem.quantity}
                      variant="outlined"
                      size="small"
                      inputProps={{ min: 1 }}
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
    </>
  );
};

export default CartProduct;
