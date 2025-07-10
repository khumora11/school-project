import { useState } from "react";
import { useCardStore } from "../../store/cardsStore";
import { useNavigate } from "react-router-dom";
import AdminCategory from "../adminCategory/adminCategory";

export default function AddCard() {
  const addCard = useCardStore((state) => state.addCard);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "All",
    type: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCard(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen  ">
      <div className="hidden lg:block w-[260px]  shadow-lg">
        <AdminCategory />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] bg-white shadow-2xl rounded-xl border-2 border-white p-6 space-y-4"
        >
          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="input text-muted-foreground border px-4 py-2 rounded w-full dark:border-[#1b4571]"
            required
          />

          <button className="bg-[#1b4571] hover:opacity-85 text-white py-2 px-4 rounded w-full">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}
