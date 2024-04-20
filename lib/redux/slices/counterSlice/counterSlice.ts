/* Core */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decreament, incrementByAmount login here
    incrementCounter: (state) => {
      state.value += 1;
    },
    decreamentCounter: (state) => {
      state.value -= 1;
    },
    incrementByAmountCounter: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementCounter, decreamentCounter, incrementByAmountCounter } =
  counterSlice.actions;

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
