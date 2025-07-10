import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Image1 from "../../assets/corusel/image.png";
import Image2 from "../../assets/corusel/image copy.png";
import Image3 from "../../assets/corusel/image copy 2.png";
import Image4 from "../../assets/corusel/image copy 3.png";

const Corusel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <Carousel className="relative" opts={{ loop: true }}>
        <CarouselContent className="flex">
          {[Image1, Image2, Image3, Image4].map((image, index) => (
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

export default Corusel;
