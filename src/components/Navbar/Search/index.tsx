import Button from "../Button";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  return (
    <div className={styles.SearchWrapper}>
      <input className={styles.Input} type="text" placeholder="Search..." />
      <Button />
    </div>
  );
};

export default Search;
