
import  { useState } from "react";
import { useTranslation } from "react-i18next";
import { audioBooks } from "../constants";

const AudioBooks = () => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const filteredBooks = audioBooks.filter(
    (book) =>
      book.type === "audiobook" &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.subject.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {t("audio")}
        </h1>

        <input
          type="text"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full md:w-1/2 mx-auto mb-10 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 transition-all"
        />

        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">{t("noBooks")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <img src={book.cover} alt={book.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h2 className="text-lg font-bold">{book.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{book.author}</p>
                  <audio controls className="mt-3 w-full">
                    <source src={book.file} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioBooks;
