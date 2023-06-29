import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <hr />
      <footer className={styles.footer_container}>
        <div className={styles.footer_content}>
          <p>Privacy Notice |</p>
          <p>Terms of use |</p>
          <p>Do Not Share My Personal Information |</p>
          <p>CA Supply Chain Act |</p>
          <p>Cookie Preferences </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
