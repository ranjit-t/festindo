import { create } from "zustand";

type EventStoreType = {
  country: string;
  changeCountry: (newCountry: string) => void;
};

const eventStore = create<EventStoreType>((set) => ({
  country: "",
  changeCountry: (newCountry: string) => set({ country: newCountry }),
}));

export default eventStore;
