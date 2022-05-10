import styles from "./Nav.module.css";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  setSelectedOption,
  setShowForm,
} from "../../Redux/Product/productActions";

const Nav = () => {
  const products = useSelector((state) => state.products);
  const showForm = useSelector((state) => state.showForm);
  const selectedOption = useSelector((state) => state.selectedOption);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const changeHandler = (selectedOption) => {
    dispatch(setSelectedOption(selectedOption));
    dispatch(filterProduct(selectedOption));
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <h1>انبار محصولات</h1>
        <button
          onClick={() => dispatch(setShowForm())}
          className={`${styles.btn} ${showForm === true ? styles.cancel : ""}`}
        >
          {showForm === true ? (
            <FaTimes className={`${styles.icon} ${styles.cancel}`} />
          ) : (
            <FaPlus className={styles.icon} />
          )}
        </button>
      </div>
      <Search />
      {products.length > 0 && (
        <div className={styles.filterBox}>
          <div>
            <span> تعداد: </span>
            <span>{products.length}</span>
          </div>
          <div>
            {/* <span> دسته بندی ها: </span> */}
            <Select
              className={styles.select}
              value={selectedOption}
              onChange={changeHandler}
              options={options}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
