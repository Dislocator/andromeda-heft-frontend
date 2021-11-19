import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormikContainer from "./components/forms/FormikContainer";
import OfferCard from "./components/offerCard/OfferCard";

ReactDOM.render(
  <React.StrictMode>
    <FormikContainer />
    <OfferCard />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
