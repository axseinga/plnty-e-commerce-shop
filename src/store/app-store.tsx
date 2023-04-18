import { create } from "zustand";

type AppStateStoreT = {
  filters: string[];
  setFilters: (filters: string[]) => void;
};

const useAppStateStore = create<AppStateStoreT>()((set) => {
  return {
    filters: [],
    setFilters(filters: string[]) {
      set({ filters });
    },
  };
});

export default useAppStateStore;
