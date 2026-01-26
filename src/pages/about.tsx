import { useTranslation } from "react-i18next";
import Image from "../assets/about/image.png";
import Image2 from "../assets/about/image copy.png";
import Image3 from "../assets/about/image copy 2.png";
import ImageSchool from "../assets/image copy.png";
import Corusell from "../components/corusel/Corusel";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="py-10 px-4 md:px-10 mt-11">
        <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#1b4571] dark:text-white">
                {t("aboutOurSchool")}
              </span>
            </h1>
            <p className="mb-4 text-lg">
              {t("aboutDescription1")}
            </p>
            <p className="text-muted-foreground">
              {t("aboutDescription2")}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={ImageSchool}
              alt={t("schoolImageAlt")}
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            {t("schoolLeadership")}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
              <img
                src={Image2}
                alt={t("directorAlt")}
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">
                {t("director")}
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
              <img
                src={Image}
                alt={t("viceDirector1Alt")}
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">
                {t("viceDirector1")}
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
              <img
                src={Image3}
                alt={t("viceDirector2Alt")}
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <p className="text-lg font-medium">
                {t("viceDirector2")}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Corusell />
    </>
  );
};

export default About;