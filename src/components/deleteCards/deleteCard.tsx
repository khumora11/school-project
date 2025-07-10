import React, { useEffect } from "react";
import { useCardStore } from "../../store/cardStore";
import { Button } from "../ui/button"; // shadcn/ui dan
import AdminCategory from "../adminCategory/adminCategory";

const DeleteCard: React.FC = () => {
  const { cards, fetchCards, deleteCard } = useCardStore();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex items-start flex-wrap lg:flex-nowrap  justify-center   md:justify-around">
      <AdminCategory />
      <div className="flex flex-wrap justify-around gap-4 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border rounded w-[80%]    md:w-[40%] lg:w-[30%] p-4 space-y-2"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[500px] object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <Button
              variant="destructive"
              onClick={() => deleteCard(card.id)} // card.id string sifatida
              className="w-full"
            >
              O‘chirish
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteCard;
