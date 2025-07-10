import { useEffect, useState } from "react";
import axios from "axios";

// Kartalar uchun interfeys
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

// Jadval uchun interfeys
interface LessonRow {
  id: string;
  class: string;
  lesson1: string;
  lesson2: string;
  lesson3: string;
  lesson4: string;
  lesson5: string;
  lesson6: string;
  lesson7: string;
}

const LeesonTable = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [lessons, setLessons] = useState<LessonRow[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/lessons")
      .then((res) => {
        setCards(res.data);   // cards uchun
        setLessons(res.data); // lessons uchun
      })
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
    

    

      {/* Hech narsa topilmasa */}
      {query && visibleCards.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Hech narsa topilmadi.</p>
      )}

      {/* Jadval */}
      <div className="overflow-x-auto mt-16">
        <h2 className="text-2xl font-bold mb-4">Dars Jadvali</h2>
        <table className="min-w-full border border-gray-300 dark:border-black text-sm text-center">
          <thead>
            <tr className="bg-gray-200 dark:bg-black">
              <th className="border px-2 py-1">Sinflar</th>
              <th className="border px-2 py-1">1-dars</th>
              <th className="border px-2 py-1">2-dars</th>
              <th className="border px-2 py-1">3-dars</th>
              <th className="border px-2 py-1">4-dars</th>
              <th className="border px-2 py-1">5-dars</th>
              <th className="border px-2 py-1">6-dars</th>
              <th className="border px-2 py-1">7-dars</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((row, idx) => (
              <tr
                key={row.id}
                className={idx % 2 === 0 ? "bg-white dark:bg-black" : "bg-gray-100 dark:bg-black"}
              >
                <td className="border px-2 py-1">{row.class}</td>
                <td className="border px-2 py-1">{row.lesson1}</td>
                <td className="border px-2 py-1">{row.lesson2}</td>
                <td className="border px-2 py-1">{row.lesson3}</td>
                <td className="border px-2 py-1">{row.lesson4}</td>
                <td className="border px-2 py-1">{row.lesson5}</td>
                <td className="border px-2 py-1">{row.lesson6}</td>
                <td className="border px-2 py-1">{row.lesson7}</td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeesonTable;
