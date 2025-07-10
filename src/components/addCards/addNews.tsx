import { useState } from "react";
import { useCardStore } from "../../store/newsStore";
import { useNavigate } from "react-router-dom";
import AdminCategory from "../adminCategory/adminCategory";


export default function AddNews() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCard(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen  dark:text-[#1b4571] dark:border-[#1b4571]">
      <div className="hidden lg:block w-[260px]  shadow-lg">
        <AdminCategory />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] bg-white shadow-2xl rounded-xl border border-gray-200 p-8 space-y-5 "
        >
          <h2 className="text-2xl font-bold text-center text-[#1b4571]">
            Yangi Ma'lumot Qo‘shish
          </h2>

          <input
            name="image"
            placeholder="Rasm URL"
            value={form.image}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
            required
          />

          <input
            name="title"
            placeholder="Sarlavha"
            value={form.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
          >
            <option value="All">Barchasi</option>
            <option value="Education">Ta’lim</option>
            <option value="Science">Fan</option>
            <option value="Other">Boshqa</option>
          </select>

          <input
            name="type"
            placeholder="Turi (masalan: Darslik, Yangilik)"
            value={form.type}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
          />

          <input
            name="price"
            placeholder="Narxi (so‘m)"
            value={form.price}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full text-sm dark:border-[#1b4571]"
          />

          <textarea
            name="description"
            placeholder="Qo‘shimcha tavsif"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="border px-4 py-2 rounded w-full text-sm resize-none dark:border-[#1b4571]"
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
