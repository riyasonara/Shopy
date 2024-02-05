import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/Products/ProductsList";
import Home from "./components/Home/Home";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import Contact from "./components/ContactUs/Contact";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import WishList from "./components/Wishlist/WishlistedItems/WishList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        {/* <SignUp/> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route exact path="/everything/:id" element={<SingleProduct />} />
          <Route path="/everything" element={<ProductsList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
};

export default App;
