import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./store";
import "./index.css";
import { combineReducers, createStore } from "redux";
import articleReducer, { loadArticles } from "./store/articleReducer";

const rootReducer = combineReducers({
  articleState: articleReducer
});

// const store = createStore(rootReducer);
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.loadArticles = loadArticles;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
