import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/Products/ProductsList";
import Home from "./components/Home/Home";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import Contact from "./components/ContactUs/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route exact path="/everything/:id" element={<SingleProduct />} />
          <Route path="/everything" element={<ProductsList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
