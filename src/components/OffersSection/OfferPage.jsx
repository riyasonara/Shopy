import Button from "@mui/material/Button";
import styles from "./OfferPage.module.css";
import { Link } from "react-router-dom";

const OfferPage = () => {
  return (
    <div className={styles.parallaxcontainer}>
      <div className={styles.overlay}></div>
      <div className={styles.parallaximage}></div>
      <div className={styles.content}>
        <p className={styles.paragraph}>Limited Time Offer</p>
        <h1 className={styles.heading}>Special Edition</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h2 className={styles.text}>
          Buy This T-shirt At 20% Discount, Use Code OFF20
        </h2>
        <div style={{ marginTop: "40px" }}>
          <Button
            variant="contained"
            component={Link}
            to="/everything"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
