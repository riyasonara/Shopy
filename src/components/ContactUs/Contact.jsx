import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

const Contact = () => {
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
              }}
            >
              Shop Now
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                marginTop: "30px",
              }}
            >
              Find More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
