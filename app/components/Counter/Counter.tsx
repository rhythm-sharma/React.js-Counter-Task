"use client";

import React, { useCallback, useMemo, useState } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectCount,
  incrementCounter,
  decreamentCounter,
  incrementByAmountCounter,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);

  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const disabledDecrementButton = useMemo(() => count <= 0, [count]);

  const handleSetIncrementAmount = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newIncrementAmount = Number(event.target.value);
      if (newIncrementAmount < 0) {
        return;
      }
      setIncrementAmount(newIncrementAmount);
    },
    []
  );

  const handleIncrement = useCallback(() => {
    // dispatch event to increment count by 1
    dispatch(incrementCounter());
  }, []);

  const handleDecreament = useCallback(() => {
    // dispatch event to decrease count by 1
    dispatch(decreamentCounter());
  }, []);

  const handleIncrementByAmount = useCallback(() => {
    // dispatch event to add incrementAmount to count
    dispatch(incrementByAmountCounter(incrementAmount));
  }, [incrementAmount]);

  const handleIncrementIfOddAsync = useCallback(() => {
    // dispatch event to add incrementAmount only if count is odd
    dispatch(incrementIfOddAsync(incrementAmount));
  }, [incrementAmount]);

  return (
    <div>
      <div className={styles.row}>
        <button
          disabled={disabledDecrementButton}
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecreament}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          type="number"
          value={incrementAmount}
          className={styles.textbox}
          aria-label="Set increment amount"
          onChange={handleSetIncrementAmount}
        />
        <button className={styles.button} onClick={handleIncrementByAmount}>
          Add Amount
        </button>
        <button className={styles.button} onClick={handleIncrementIfOddAsync}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
