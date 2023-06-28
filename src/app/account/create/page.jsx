import styles from "./create.module.css";

const page = () => {
  return (
    <>
      <div className={styles.account_section_container}>
        <div className={styles.account_creation_form}>
          <h2>Create an account</h2>
          <h3>STARBUCKS® REWARDS</h3>
          <p>
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and
            moremore.
          </p>
          <form className={styles.account_form}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="*First name" />
            <input type="text" placeholder="*Last name" />

            <div className={styles.account_info}>
              <h3>Account Security</h3>
              <input type="text" placeholder="*Email address" />
              <input type="text" placeholder="*Password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
