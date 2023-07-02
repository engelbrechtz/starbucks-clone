import styles from "./button.module.css";
const Button = ({ text, value }) => {
  return (
    <button
      className={styles.button}
      style={{
        marginTop: value,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
