/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type State = {
  steps: string[];
  count: number;
  increment: () => void;
  decrement: () => void;
  complete: boolean;
  businessFormRecord: any;
  updateBusinessFormRecord: (val: any) => void;
  clearBusinessForm: () => void;
  clearCount: () => void;
};

const useAppStore = create<State>((set) => ({
  steps: ["Business details", "Business documents", "Bank account","Business owner", "Summary"],
  count: 1,
  clearCount: () => set(() => ({ count: 1 })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  complete: false,
  businessFormRecord: {},
  updateBusinessFormRecord: (value: { [key: string]: string | number }) =>
    set((state) => ({
      businessFormRecord: {
        ...state.businessFormRecord,
        ...value,
      },
    })),
  clearBusinessForm: () =>
    set(() => ({
      businessFormRecord: {},
    })),
}));

export default useAppStore;
