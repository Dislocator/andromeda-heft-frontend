import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormikContainer from "./components/forms/FormikContainer";
import { Nav } from "./components/navbar/NavbarElements";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/Layout";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./store/reducers/root";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Landing from "./pages/landing/Landing";
import Routers from "./components/Routers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
