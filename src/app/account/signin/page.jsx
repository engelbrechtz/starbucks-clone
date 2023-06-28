import styles from "./signin.module.css";
import Image from "next/image";

const login = () => {
  return (
    <section className={styles.signin_container}>
      <header className={styles.header_container}>
        <Image
          src={"/public/starbucks_logo.png"}
          width={100}
          height={100}
          alt="starbucks logo"
        />
        <h3>starbucks</h3>
      </header>
      <div className={styles.signin_content}>
        <h1>Sign in or create an account</h1>
        <form action="#" className={styles.signin_form}>
          <div className={styles.signin_input_content}>
            <input
              type="email"
              name="email"
              placeholder="*Username or Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="*Password"
              required
            />
            <button type="submit" className={styles.btn_signin}>
              Sign in
            </button>

            <dir className={styles.checkbox_container}>
              <input type="checkbox" className={styles.checkbox} />
              <p>keep me signed in</p>
            </dir>
          </div>
        </form>
      </div>
      <section className={styles.box_info_container}>
        <p className={styles.info_content}>
          <h4 className={styles.info_title}>JOIN STARBUCKS® REWARDS</h4>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
      </section>
    </section>
  );
};

export default login;
