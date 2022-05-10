import { createStore } from "redux";
import productReducer from "./Product/productReducer";

const store = createStore(productReducer);

export default store;
