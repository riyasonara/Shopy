import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>Copyright © 2024 Brandstore. Powered by Brandstore.</div>
      <div className={styles.logo}>
        <FaFacebookF />
        <FaYoutube />
        <FaTwitter />
        <FaInstagram />
        <FaGoogle />
      </div>
    </div>
  );
};

export default Footer;
