import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  SET_GROUPS,
  ADD_OPTIONS,
  SET_OPTIONS,
  FILTER,
  UPDATE,
  SEARCH,
  SET_SHOW_FORM,
  SET_SELECTED_OPTION,
} from "./productType";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function setProducts(storedProducts) {
  return {
    type: SET_PRODUCTS,
    payload: storedProducts,
  };
}

export function setGroups(storedGroup) {
  return {
    type: SET_GROUPS,
    payload: storedGroup,
  };
}

export function addOptions(product) {
  return {
    type: ADD_OPTIONS,
    payload: product,
  };
}

export function setOptions(storedOptions) {
  return {
    type: SET_OPTIONS,
    payload: storedOptions,
  };
}

export function setSelectedOption(selectedOption) {
  return {
    type: SET_SELECTED_OPTION,
    payload: selectedOption,
  };
}

export function filterProduct(selectedOption) {
  return {
    type: FILTER,
    payload: selectedOption,
  };
}

export function updateProduct(updatedProduct) {
  return {
    type: UPDATE,
    payload: updatedProduct,
  };
}

export function searchProducts(value) {
  return {
    type: SEARCH,
    payload: value,
  };
}

export function setShowForm() {
  return {
    type: SET_SHOW_FORM,
  };
}
