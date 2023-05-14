import styles from "./Button.module.scss";
import searchIcon from "../../../assets/icons/search.svg";
const Button: React.FC = () => {
  return (
    <button className={styles.Button}>
      <img src={searchIcon} alt={searchIcon} />
    </button>
  );
};

export default Button;
