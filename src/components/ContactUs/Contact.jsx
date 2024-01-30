import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css";
import Elevation from "./ContactSection";

const Contact = () => {
  return (
    <>
      <div
        className={styles.appContainer}
        style={{ backgroundColor: "#f5f7f9" }}
      >
        <div className={styles.parallaxcontainer}>
          <div className={styles.overlay}></div>
          <div className={styles.parallaximage}></div>
          <div className={styles.content}>
            <h1 className={styles.heading}>Contact Us</h1>
          </div>
        </div>
        <Elevation />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58749.56894244736!2d72.564736!3d23.029350400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706592994843!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: "4rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
