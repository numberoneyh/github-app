import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import {setupListeners} from "@reduxjs/toolkit/query";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

setupListeners(store.dispatch)