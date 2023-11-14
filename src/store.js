import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./API/api";

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postApi.middleware),
  });
};
