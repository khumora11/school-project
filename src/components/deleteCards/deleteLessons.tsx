import React, { useEffect } from "react";
import { useCardStore } from "../../store/LessonStore";
import { Button } from "../ui/button";
import AdminCategory from "../adminCategory/adminCategory";

const DeleteLesson: React.FC = () => {
  const { cards, fetchCards, deleteCard } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block w-[260px] shadow-lg bg-white dark:bg-[#0f172a]">
        <AdminCategory />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1b4571] dark:text-white">
          Jadvalni O‘chirish
        </h2>

        {cards.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Hozircha jadval topilmadi.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>

                  {/* Class name */}
                  <div className="text-sm font-medium text-[#1b4571] dark:text-blue-300">
                    <span className="mr-2">Sinfi:</span> {card.class}
                  </div>

                  {/* Darslar ro'yxati */}
                  <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                    <li>1-dars: {card.lesson1}</li>
                    <li>2-dars: {card.lesson2}</li>
                    <li>3-dars: {card.lesson3}</li>
                    <li>4-dars: {card.lesson4}</li>
                    <li>5-dars: {card.lesson5}</li>
                    <li>6-dars: {card.lesson6}</li>
                    <li>7-dars: {card.lesson7}</li>
                  </ul>

                  <Button
                    variant="destructive"
                    onClick={() => deleteCard(card.id)}
                    className="w-full mt-4"
                  >
                    O‘chirish
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteLesson;
