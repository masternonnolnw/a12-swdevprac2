// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import bookReducer from "./features/bookSlice";

// Configuring the persistence
const persistConfig = {
  key: "root",
  storage
};

// Wrap the reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, bookReducer);

export const store = configureStore({
  reducer: {
    bookSlice: persistedReducer
  }
});

// Setting up persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
