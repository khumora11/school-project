import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000/news";

type Card = {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

type CardStore = {
  cards: Card[];
  fetchCards: () => void;
  addCard: (card: Omit<Card, "id">) => void;
  deleteCard: (id: number) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  cards: [],
  fetchCards: async () => {
    const res = await axios.get(BASE_URL);
    set({ cards: res.data });
  },
  addCard: async (card) => {
    await axios.post(BASE_URL, card);
    const res = await axios.get(BASE_URL);
    set({ cards: res.data });
  },
  deleteCard: async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    const res = await axios.get(BASE_URL);
    set({ cards: res.data });
  },
}));

type CartStore = {
  cartCount: number;
  addToCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));
interface Cards {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}
interface CardsState {
  cards: Cards[];
  filteredCards: Cards[];
  selectedCategory: string;
  fetchCards: () => void;
  filterByCategory: (category: string) => void;
  deleteCard: (id: number) => void;
}
export const useCardsStore = create<CardsState>((set, get) => ({
  cards: [],
  filteredCards: [],
  selectedCategory: "All",

  fetchCards: async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      const data = res.data;
      set({
        cards: data,
        filteredCards: data,
      });
    } catch (err) {
      console.error("Ma'lumotlar olinmadi:", err);
    }
  },

  filterByCategory: (category) => {
    const cards = get().cards;
    const filtered =
      category === "All"
        ? cards
        : cards.filter((cards) => cards.category === category);
    set({ filteredCards: filtered, selectedCategory: category });
  },

  deleteCard: async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      const updated = get().cards.filter((cards) => cards.id !== id);
      set({ cards: updated, filteredCards: updated });
    } catch (err) {
      console.error("O‘chirishda xatolik:", err);
    }
  },
}));
interface Cards {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}
interface CardState {
  cards: Cards[];
  fetchCards: () => void;
  deleteCard: (id: number) => void;
}
export const useCardaStore = create<CardState>((set, get) => ({
  cards: [],
  fetchCards: async () => {
    try {
      const res = await axios.get<Card[]>("http://localhost:3000/products");
      set({ card: res.data });
    } catch (err) {
      console.error("Ma'lumotlar olinmadi:", err);
    }
  },
  deleteCard: async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      const updatedCards = get().cards.filter((card) => card.id !== id);
      set({ cards: updatedCards });
    } catch (error) {
      console.error("Card o‘chirishda xatolik:", error);
    }
  },
}));
