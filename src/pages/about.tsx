import Image from "../assets/about/image.png";
import Image2 from "../assets/about/image copy.png";
import Image3 from "../assets/about/image copy 2.png";
import ImageSchool from "../assets/image copy.png"
import Corusell from "../components/corusel/Corusel";

const About = () => {
  return (
    <>
    <div className=" py-10 px-4 md:px-10">
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#1b4571] dark:text-white">Maktabimiz</span> haqida
          </h1>
          <p className="mb-4 text-lg">
            Zarbdor ixtisdoslashtirilgan maktabi 2022 yil 2-sentyabrdan o'z
            faoliyatini boshlagan. Maktabimiz jamoasi qisqa vaqt mobaynida bir
            qator yutuqlarni qo'lga kiritishni boshladi.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            eligendi ullam voluptatum aliquam, doloremque harum magnam
            accusamus necessitatibus iste id.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={ImageSchool}
            alt="our beautiful school"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Maktab rahbariyati</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className=" p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
            <img
              src={Image2}
              alt="Direktor"
              className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
            />
            <p className="text-lg font-medium">
              Maktab direktori - <br />
              Feruz Uzoqovich Qoraboyev
            </p>
          </div>

          <div className=" p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
            <img
              src={Image}
              alt="MMIBDO"
              className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
            />
            <p className="text-lg font-medium">
              Ma'naviy, ma'rifiy ishlar bo'yicha direktor o'rinbosari - <br />
              Dilfuza Murtozayevna Bekamova
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition dark:border-1 dark:border-white">
            <img
              src={Image3}
              alt="OIBDO"
              className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
            />
            <p className="text-lg font-medium">
              O‘quv ishlari bo‘yicha direktor o‘rinbosari - <br />
              Shoxjahon Akbaraliyevich Amirov
            </p>
          </div>
        </div>
      </section>
    </div>
    <Corusell/>
              </>
  );
};

export default About;
