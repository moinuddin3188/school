import rootReducer from "../RootReducer/RootReducer";
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;