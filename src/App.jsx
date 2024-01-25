import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/Products/ProductsList";
import Home from "./components/Home/Home";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import SingleProduct from "./components/SingleProduct/SingleProduct";
// import MediaCard from "./components/ProductUI/ProductsUI";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/ProductsList" element={<ProductsList />} /> */}
          <Route exact path="/everything/:id" element={<SingleProduct />} />
          <Route path="/everything" element={<ProductsList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
