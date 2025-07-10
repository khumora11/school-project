import { useState } from "react";
import { useCardStore } from "../../store/LessonStore";
import { useNavigate } from "react-router-dom";
import AdminCategory from "../adminCategory/adminCategory";

export default function AddLessonTable() {
  const addCard = useCardStore((state) => state.addCard);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    title: "",
    class: "",
    description: "",
    image: "",
    lesson1: "",
    lesson2: "",
    lesson3: "",
    lesson4: "",
    lesson5: "",
    lesson6: "",
    lesson7: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cardWithId = { ...form, id: Date.now().toString() };
    addCard(cardWithId);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen dark:text-[#1b4571] dark:border-[#1b4571]">
      <div className="hidden lg:block w-[260px] shadow-lg">
        <AdminCategory />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] bg-white shadow-2xl rounded-xl border border-gray-200 p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-[#1b4571]">
            Yangi Jadval Qo‘shish
          </h2>

          <input
            name="title"
            placeholder="Jadval sarlavhasi (masalan: 5-sinf jadvali)"
            value={form.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
            required
          />

          <input
            name="class"
            placeholder="Sinf nomi (masalan: 5-01)"
            value={form.class}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
            required
          />

          {Array.from({ length: 7 }, (_, i) => (
            <input
              key={i}
              name={`lesson${i + 1}`}
              placeholder={`${i + 1}-dars`}
              value={(form as any)[`lesson${i + 1}`]}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
            />
          ))}

          <textarea
            name="description"
            placeholder="Jadval tavsifi (ixtiyoriy)"
            value={form.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
          />

          <input
            name="image"
            placeholder="Rasm URL (ixtiyoriy)"
            value={form.image}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
          />

          <button
            type="submit"
            className="bg-[#1b4571] hover:opacity-90 text-white font-semibold py-2 px-4 rounded w-full transition"
          >
            Qo‘shish
          </button>
        </form>
      </div>
    </div>
  );
}
