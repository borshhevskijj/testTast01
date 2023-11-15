import { Provider } from "react-redux"; // Ensure that you import Provider from react-redux
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { setupStore } from "./app/store";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
