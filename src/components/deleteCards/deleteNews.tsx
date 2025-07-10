import React, { useEffect } from "react";
import { useCardStore } from "../../store/newsStore";
import { Button } from "../ui/button";
import AdminCategory from "../adminCategory/adminCategory";

const DeleteNews: React.FC = () => {
  const { cards, fetchCards, deleteCard } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <div className="hidden lg:block w-[260px]  shadow-lg">
        <AdminCategory />
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1b4571] dark:text-white">
          Yangiliklarni O‘chirish
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md ring-1 ring-gray-200 overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {card.description}
                </p>

                <Button
                  variant="destructive"
                  onClick={() => deleteCard(card.id)}
                  className="w-full mt-3"
                >
                  O‘chirish
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteNews;
