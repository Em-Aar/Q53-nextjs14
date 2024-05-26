import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/counterSlice/counterSlice";

const store = configureStore({
  reducer: {
    // states merged
    counter: counterReducer,
  },
});

export default store;
