import { FaGlobeAmericas } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import styles from "./TrustedSection.module.css";

const TrustedSection = () => {
  return (
    <>
      <div className={styles.trustedsection}>
        <div className={styles.globe}>
          <FaGlobeAmericas className={styles.icons} />
          <h4 className={styles.heading}>Worldwide Shipping</h4>
          <p className={styles.description}>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.clothes}>
          <GiClothes className={styles.icons} />
          <h4 className={styles.heading}>Best Quality</h4>
          <p className={styles.description}>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.offer}>
          <MdOutlineLocalOffer className={styles.icons} />
          <h4 className={styles.heading}>Best Offers</h4>
          <p className={styles.description}>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.securePay}>
          <RiSecurePaymentLine className={styles.icons} />
          <h4 className={styles.heading}>Secure Payments</h4>
          <p className={styles.description}>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <hr className={styles.hr}/>
    </>
  );
};

export default TrustedSection;
