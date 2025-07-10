import { useState } from "react";
import { FaHotel, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../components/ui/button";
import Image from "../assets/zarbdor-im-high-resolution-logo (2).png"
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const res = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Xabar muvaffaqiyatli yuborildi!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
      alert("Tarmoqda xatolik yuz berdi.");
    }
  };

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={Image} alt="das" />
        </div>
        <section id="contact-form" className="mb-16 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#1b4571] dark:text-white">Kontaktlarimiz</span>
          </h1>
          <p className="mb-2">
            Biz bilan bog‘lanish uchun quyidagi shaklni to‘ldiring
          </p>
          <p title="About W3Schools" className="mb-6 text-sm text-gray-500">
            W3Schools is a web developer&apos;s site.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-semibold">
                Ism
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-semibold">
                Xabar mazmuni
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-[#1b4571] dark:text-white dark:hover:text-black">
              Tasdiqlash
            </Button>
          </form>
        </section>
        
        </div>
        <section
          id="contact-info"
          className="bg-[#1b4571] text-white rounded-lg p-10 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center text-center">
            <FaHotel className="text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manzil</h3>
            <p>Zarbdor sh. Oqbuloq MFY, Mustaqillik shox ko'chasi 47-uy.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p>(99) 355-83-06</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdEmail className="text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>email@gmail.com</p>
          </div>
        </section>
    </main>
  );
};

export default Contact;
