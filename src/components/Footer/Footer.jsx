import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        Copyright © 2024 Brandstore. Powered by Brandstore.
        <div className={styles.logos}>
          <FaFacebookF className={styles.logo} />
          <FaYoutube className={styles.logo} />
          <FaTwitter className={styles.logo}/>
          <FaInstagram className={styles.logo}/>
          <FaGoogle className={styles.logo}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
