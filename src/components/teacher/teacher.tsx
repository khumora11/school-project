import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: string;
  image: string;
}

const Teachers = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  const visibleCards = query
    ? cards.filter((card) =>
        card.image.toLowerCase().includes(query.toLowerCase())
      )
    : cards;

  return (
    <div className="max-w-7xl mx-auto mt-16 p-6">
    <h1 className="text-3xl font-bold text-center mb-10">
  O'qituvchilar
</h1>

      {loading && (
        <div className="flex justify-center items-center mt-10">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {visibleCards.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg hover:shadow-xl rounded-lg border border-gray-300 overflow-hidden transition-all group"
            >
              <img
                src={item.image}
                alt={`Image for item ${item.id}`}
                className="w-full h-[300px] object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {query && visibleCards.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Hech narsa topilmadi.</p>
      )}
    </div>
  );
};

export default Teachers;
