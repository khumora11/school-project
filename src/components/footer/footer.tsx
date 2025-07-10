import Image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b4571] text-white py-10 ">
      <div className="container mx-auto px-4 flex flex-wrap gap-10 justify-between">
        <div className="flex flex-col items-center md:items-start flex-1 min-w-[250px]">
          <img src={Image} alt="Zarbdor IM" className="w-[160px] mb-4" />
          <p className="text-gray-300 text-center md:text-left font-semibold text-lg">
            Zarbdor Ixtisoslashtirilgan Maktabi — Bilim qalqonimiz!
          </p>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] h-[300px] rounded-xl overflow-hidden shadow-xl flex-1 min-w-[280px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47949.02902135194!2d69.2004671!3d41.3110811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3c28c2a79f%3A0x8f86b5c9a6fcce2!2sTashkent!5e0!3m2!1sen!2s!4v1685381046790!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">Navigatsiya</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300">
                Bog‘lanish
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3>Biz bilan bog'lanish</h3>
          <div>
            <p className="text-[15px] ">
              Telefon:{" "}
              <span className="hover:text-blue-300 cursor-pointer">
                {" "}
                +998 99 355-83-06
              </span>{" "}
              <br />
              Email:{" "}
              <span className="hover:text-blue-300 cursor-pointer">
                zarbdorim@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">Ijtimoiy tarmoqlar</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/piima.uz"
              className="hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/piimauz" className="hover:text-blue-400">
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/piima.uz/"
              className="hover:text-blue-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZFpPmVyOdPpXUcazo0Cyyw"
              className="hover:text-blue-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} Zarbdor IM. Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
