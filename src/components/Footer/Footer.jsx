import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <hr />
      <footer className={styles.footer_container}>
        <hr />
        <article className={styles.footer_content}>
          <div className={styles.icons_container}></div>
          <div className={styles.footer_list}>
            <ul>
              <Link href={""}>Privacy Notice</Link>
              <Link href={""}>Terms of Use</Link>
              <Link href={""}>Do Not Share My Personal Information</Link>
              <Link href={""}>CA Supply Chain Act</Link>
              <Link href={""}>Cookie Preferences</Link>
            </ul>
          </div>
          <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
