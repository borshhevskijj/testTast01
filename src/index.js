import { Provider } from "react-redux"; // Ensure that you import Provider from react-redux
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupStore } from "./store";

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
