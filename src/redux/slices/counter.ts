import { createSlice } from "@reduxjs/toolkit";

export const counterSlick = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state + 1,
  },
});

export const { increment, decrement } = counterSlick.actions;

export default counterSlick.reducer;
