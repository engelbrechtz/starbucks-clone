import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <hr />
      <footer className={styles.footer_container}>
        <div className={styles.footer_content}></div>
      </footer>
    </section>
  );
};

export default Footer;
