import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer
  }
});
