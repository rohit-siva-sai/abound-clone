import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  principalAmount: 1000,
  intrestRate: 10/12/100,
  amountChange: async (amount, time) =>
    set(
      (store) => ({
        principalAmount:
          (amount * store.intrestRate * Math.pow(1+store.intrestRate, time)) /
          (Math.pow(1+store.intrestRate, time) - 1),
      }),
      false,
      "amountChange"
    ),
  // set(
  //   produce((store) => ({
  //     principalAmount: (amount * time * 10) / 1000,
  //   })),
  //   false,
  //   "amountChange"
  // ),
});

export const useStore = create(store, { name: "store" });
