import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //concat the middlewares here  for the rtk
    })
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
