import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./Products/ProductsList";
import Brands from "./components/Brands/Brands";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Home from "./components/Home/Home";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import OfferPage from "./OffersSection/OfferPage";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductsList" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
      <Brands />
      <FeaturedProducts />
      <OfferPage/>
    </>
  );
};

export default App;
