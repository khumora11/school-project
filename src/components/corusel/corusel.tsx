import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Image1 from "../../assets/corusel/image copy 4.png";
import Image2 from "../../assets/corusel/image copy 5.png";
import Image3 from "../../assets/corusel/image copy 6.png";
import Image4 from "../../assets/corusel/image copy 7.png";
import Image7 from "../../assets/corusel/image copy 8.png";
import Image8 from "../../assets/corusel/image copy 9.png";
import Image5 from "../../assets/corusel/image copy 10.png";
import Image6 from "../../assets/corusel/image copy 11.png";
import Image9 from "../../assets/corusel/image copy 12.png";
import Image10 from "../../assets/corusel/image copy 13.png";
import Image11 from "../../assets/corusel/image copy 14.png";
import Image12 from "../../assets/corusel/image copy 15.png";
import Image13 from "../../assets/corusel/image copy 16.png";
import Image14 from "../../assets/corusel/image copy 17.png";
import Image15 from "../../assets/corusel/image copy 18.png";
import Image16 from "../../assets/corusel/image copy 19.png";
import Image17 from "../../assets/corusel/image copy 20.png";
import Image18 from "../../assets/corusel/image copy 21.png";
import Image19 from "../../assets/corusel/image copy 22.png";
import Image21 from "../../assets/corusel/photo_2025-06-14_09-48-44.jpg";

const Corusell = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <Carousel className="relative" opts={{ loop: true }}>
        <CarouselContent className="flex">
          {[Image1, Image2, Image3, Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,Image16,
            Image17,Image18,Image19,Image21
          ].map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-xl shadow-lg w-full max-h-[500px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white  shadow-md hover:bg-gray-100 dark:text-black" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 dark:text-black" />
      </Carousel>
    </div>
  );
};

export default Corusell;
