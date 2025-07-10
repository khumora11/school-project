import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface Card {
  id: string;
  title: string;
  category?: string;
  type?: string;
  description?: string;
  text?: string;
  link?: string;
  price?: string;
  image: string;
}

const AdvancedSearch = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/news")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  const visibleCards = query
    ? cards.filter((card) => {
        const q = query.toLowerCase();
        return (
          card.title.toLowerCase().includes(q) ||
          card.category?.toLowerCase().includes(q) ||
          card.type?.toLowerCase().includes(q) ||
          card.description?.toLowerCase().includes(q) ||
          card.text?.toLowerCase().includes(q)
        );
      })
    : cards;

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 mb-16">
      {/* Search bar */}
      <div className="flex justify-end items-center relative mb-6">
        <button
          onClick={() => setShowInput((prev) => !prev)}
          className="p-2 bg-white shadow-lg rounded-full hover:scale-110 transition-transform"
        >
          {showInput ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Search className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.6, x: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-14 top-0 h-full max-sm:top-full max-sm:right-0 max-sm:mt-2"
            >
              <div className="flex items-center bg-white border border-gray-300 rounded-full shadow px-4 h-full w-[260px] max-sm:w-[200px]">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Qidiruv..."
                  className="w-full outline-none text-gray-700 text-sm bg-transparent"
                />
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Horizontal Cards */}
      <AnimatePresence>
        <div className="flex flex-col items-center gap-6">
          {visibleCards.map((item, index) => (
            <motion.div
              key={item.id + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-[80%] flex flex-col md:flex-row bg-white rounded-lg border border-[#1b4571] shadow hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="md:w-1/3 w-full h-64 md:h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description || item.text}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      className="inline-block px-4 py-2 text-sm bg-[#1b4571] hover:opacity-95 rounded-full text-white transition"
                    >
                      Batafsil
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {query && visibleCards.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Hech narsa topilmadi.</p>
      )}
    </div>
  );
};

export default AdvancedSearch;
