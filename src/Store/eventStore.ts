import { create } from "zustand";

type EventStoreType = {
  country: string;
  changeCountry: (newCountry: string) => void;
};

const eventStore = create<EventStoreType>((set) => ({
  country: "",
  changeCountry: (newCountry: string) => {
    set({ country: newCountry });
    //localStorage
    localStorage.setItem("country", JSON.stringify(newCountry));
  },
}));

export default eventStore;
