/* Instruments */
import { incrementByAmountCounter, type ReduxThunkAction } from "@/lib/redux";

export const incrementIfOddAsync = (amount: number): ReduxThunkAction => {
  return (dispatch) => {
    // update only if currentValue is odd
    if (amount % 2 !== 0) {
      dispatch(incrementByAmountCounter(amount));
    }
  };
};
