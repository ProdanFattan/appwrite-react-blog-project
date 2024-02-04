import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/authSlice";
const store = configureStore({
  reducer: authSlice,
});

export default store;
