import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";

import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
// import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StyledEngineProvider>
);
