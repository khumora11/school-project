import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHotel, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../i18n';
import image from "../assets/image copy.png";
import Image from "../assets/corusel/image copy 3.png"


const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 mt-11">

      
      <header>
        <div
          id="showcase"
          className="bg-gray-100 dark:bg-black p-10 rounded-lg mb-10 flex justify-center mt-12"
        >
          <div>
            <img
              src={image}
              alt="school"
              className="max-w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </header>

      <section id="home-info" className="mb-12">
        <div className=" max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">
              <span className="text-[#1b4571]">{t('title1').split(' ')[0]}</span> {t('title1').split(' ').slice(1).join(' ')}
            </h1>
            <p className="mb-6 text-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              libero voluptate quas quo repudiandae, necessitatibus, sed
              suscipit in autem aspernatur, molestias distinctio vel illum omnis
              iure. Iusto nesciunt unde debitis, explicabo perspiciatis
              reprehenderit doloribus magnam corrupti. Ut nam repellendus et ea
              eos assumenda aspernatur reiciendis harum tenetur laboriosam?
              Nobis, deleniti?
            </p>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">
              <span className="text-[#1b4571]">{t('title2').split(' ')[0]}</span> {t('title2').split(' ').slice(1).join(' ')}
            </h1>
            <p className="mb-6 text-foreground leading-relaxed">
              {t('aboutText')}
            </p>
            <Link
              to={"/about"}
              className="inline-block bg-[#1b4571]  text-white hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-md px-6 py-2 rounded-md "
            >
              <button className="py-3 px-6  rounded-lg  ">
                {t('readMore')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 "
      >
        <div className="p-6 bg-gray-100 rounded shadow text-center ">
          <img src={image} alt="location" />
          <h3 className="text-xl font-semibold mb-2 dark:text-black">
            {t('location')}
          </h3>
          <p className="dark:text-black">
            {t('locationText')}
          </p>
        </div>

        <div className="p-6 bg-[#1b4571] rounded shadow text-white text-center">
          <FaUtensils className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            {t('dining')}
          </h3>
          <p>
            {t('diningText')}
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <FaHotel className="text-5xl mx-auto mb-4 text-[#1b4571]" />
          <h3 className="text-xl font-semibold mb-2 dark:text-black">
            {t('library1')}
          </h3>
          <p className="dark:text-black">{t('libraryText')}</p>
        </div>

        <div className="p-6 bg-[#1b4571] rounded shadow text-white text-center">
          <img src={Image} alt="sports hall" />
          <h3 className="text-xl font-semibold mb-2">{t('gym')}</h3>
          <p>
            {t('gymText')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
