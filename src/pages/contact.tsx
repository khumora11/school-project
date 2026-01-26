import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHotel, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../components/ui/button";
import Image from "../assets/zarbdor-im-high-resolution-logo (2).png";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { t } = useTranslation();

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
        alert(t("messageSentSuccess"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(t("messageSentError"));
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
      alert(t("networkError"));
    }
  };

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-11">
        <div>
          <img src={Image} alt={t("schoolLogoAlt")} />
        </div>
        <section id="contact-form" className="mb-16 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#1b4571] dark:text-white">
              {t("ourContacts")}
            </span>
          </h1>
          <p className="mb-2">
            {t("contactFormDescription")}
          </p>
          <p title="About W3Schools" className="mb-6 text-sm text-gray-500">
            {t("additionalInfo")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-semibold">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
                placeholder={t("namePlaceholder")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
                placeholder={t("emailPlaceholder")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-semibold">
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4571]"
                placeholder={t("messagePlaceholder")}
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-[#1b4571] dark:text-white dark:hover:text-black">
              {t("submitButton")}
            </Button>
          </form>
        </section>
      </div>
      
      <section
        id="contact-info"
        className="bg-[#1b4571] text-white rounded-lg p-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
      >
        <div className="flex flex-col items-center text-center">
          <FaHotel className="text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("addressTitle")}</h3>
          <p>{t("addressText")}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaPhoneAlt className="text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("phoneTitle")}</h3>
          <p>{t("phoneNumber")}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <MdEmail className="text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("emailTitle")}</h3>
          <p>{t("emailAddress")}</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;