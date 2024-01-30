import Button from "@mui/material/Button";
import styles from "./Home.module.css";
import Brands from "../Brands/Brands";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OfferPage from "../OffersSection/OfferPage";
import { Link } from "react-router-dom";
import TrustedSection from "../Trusted/TrustedSection";

const Home = () => {
  return (
    <>
      <div className={styles.parallaxcontainer}>
        <div className={styles.overlay}></div>
        <div className={styles.parallaximage}></div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Raining Offers For <br />
            Hot Summer!
          </h1>
          <p className={styles.paragraph}>25% Off On All Products</p>
          <div>
            <Button
              component={Link}
              to={`/everything`}
              variant="contained"
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                marginTop: "30px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              Shop Now
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              Find More
            </Button>
          </div>
        </div>
      </div>
      <Brands />
      <FeaturedProducts />
      <OfferPage />
      <TrustedSection />
    </>
  );
};

export default Home;
