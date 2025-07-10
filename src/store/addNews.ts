import { create } from "zustand";
import axios from "axios";

interface CardStore {
  cards: Card[];
  filteredCards: Card[];
  categories: string[];
  selectedCategory: string;
  fetchCards: () => Promise<void>;
  filterByCategory: (category: string) => void;
}

const useCardStore = create<CardStore>((set) => ({
  cards: [],
  filteredCards: [],
  categories: [],
  selectedCategory: "all",

  fetchCards: async () => {
    try {
      const response = await axios.get<Card[]>("http://localhost:3000/news");
      const data = response.data;

      const categories = Array.from(new Set(data.map((card) => card.category)));

      set({
        cards: data,
        filteredCards: data,
        categories: ["all", ...categories],
      });
    } catch (error) {
      console.error("Xatolik fetch paytida:", error);
    }
  },

  filterByCategory: (category: string) =>
    set((state) => ({
      selectedCategory: category,
      filteredCards:
        category === "all"
          ? state.cards
          : state.cards.filter((card) => card.category === category),
    })),
  deleteCard: (id: number) => {
    set((state) => ({
      filteredCards: state.filteredCards.filter((card) => card.id !== id),
    }));
    fetch(`http://localhost:3000/news/${id}`, {
      method: "DELETE",
    });
  },
}));

export default useCardStore;
