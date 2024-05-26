import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const counter = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => {
      // 2
      // 1
      //0
      if (state === 0) {
        return 0; //1 //0
      }
      return state - 1;
    },
    reset: (state) => (state = 0),
    incVal: (state, { payload }) => {
      return (state = state + payload);
    },
    decVal: (state, { payload }) => {
        return (state = state - payload);
      },
  },
});

export default counter.reducer;

export const { increment, decrement, reset, incVal, decVal } = counter.actions; // {increment ,....}

// function sum(a,b){
//     return a+b
// }

// sum(3,4)

// increment(input)
