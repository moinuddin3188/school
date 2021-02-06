const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: rootReducer } = require("../RootReducer/RootReducer");

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;