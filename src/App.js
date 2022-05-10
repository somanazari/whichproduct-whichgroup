import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./FunctionalProjectFolder/Components/Nav/Nav";
import AddProductForm from "./FunctionalProjectFolder/Components/AddProductForm/AddProductForm";
import ProductList from "./FunctionalProjectFolder/Components/ProductList/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  setGroups,
  setOptions,
  setProducts,
} from "./FunctionalProjectFolder/Redux/Product/productActions";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const group = useSelector((state) => state.group);
  const options = useSelector((state) => state.options);
  const selectedOption = useSelector((state) => state.selectedOption);

  useEffect(() => {
    // localStorage.clear();
    // use stored datas on reload
    var storedProducts = JSON.parse(localStorage.getItem("products"));
    var storedGroup = JSON.parse(localStorage.getItem("group"));
    var storedOptions = JSON.parse(localStorage.getItem("options"));
    if (storedProducts) dispatch(setProducts(storedProducts));
    if (storedGroup) dispatch(setGroups(storedGroup));
    if (storedOptions) dispatch(setOptions(storedOptions));
  }, []);

  useEffect(() => {
    // store datas
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("group", JSON.stringify(group));
    localStorage.setItem("options", JSON.stringify(options));

    dispatch(filterProduct(selectedOption));
  }, [products, group]);

  return (
    <div className="App">
      <ToastContainer />
      <section className="productApp">
        <Nav />
        <AddProductForm />
        <ProductList />
      </section>
    </div>
  );
}

export default App;
