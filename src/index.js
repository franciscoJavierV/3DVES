import React from "react";
import ReactDOM from "react-dom";
//pages
import App from "./pages/App";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

const state =
  {
    pokemon: [],
    actualPokemon: [],
  } || {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  state,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
