import { createStore } from "redux";

const initialState = {
  name: "",
  email: "",
  age: ""
};

function formReducer(state = initialState, action) {
  const value = action.value;
  switch (action.type) {
    case "name":
      return { ...state, name: value };
    case "email":
      return { ...state, email: value };
    case "age":
      return { ...state, age: value };
    default:
      return state
  }
}

const store = createStore(formReducer);

export default store;
