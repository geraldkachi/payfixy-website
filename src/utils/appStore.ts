/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type State = {
  steps: string[];
  count: number;
  increment: () => void;
  decrement: () => void;
  complete: boolean;
  openEditAdminDrawer: boolean;
  adminRecord: IAdmin | null;
  businessPlanRecord: IBusinessDetails | null;
  deleteAdminModal: boolean;
  deleteBusinessPlanModal: boolean;
  deleteTransactionModal: boolean;
  state: string;
  lga: string;
  facility: string;
  roleView: boolean;
  roleDelete: boolean;
  roleData:  undefined; //IRole
  range: string[];
  rangeDate: string[];
  setState: (newState: string) => void;
  setLga: (newLga: string) => void;
  setFacility: (newFacility: string) => void;
  flagModal: boolean;
  transactionId: string;
  displayLocationModal: { open: boolean; for: string };
  compareModal: { open: boolean; state: string };
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
  openEditAdminDrawer: false,
  displayLocationModal: { open: false, for: "" },
  adminRecord: null,
  businessPlanRecord: null,
  deleteAdminModal: false,
  deleteBusinessPlanModal: false,
  compareModal: { open: false, state: "" },
  state: "",
  deleteTransactionModal: false,
  lga: "",
  facility: "",
  transactionId: "",
  flagModal: false,
  range: [],
  rangeDate: [],
  roleData: undefined,
  roleDelete: false,
  roleView: false,
  setState: (newState: string) => set({ state: newState }),
  setLga: (newLga: string) => set({ lga: newLga }),
  setFacility: (newFacility: string) => set({ facility: newFacility }),
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
