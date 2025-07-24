import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    text: `Fiz uma reforma em casa, e precisava fazer uma sacada, e queria de vidro. Onde fui indicado por um amigo da Vidraçaria Berude. Desde o atendimento até a entrega e instalação, foram perfeito. Super Recomendo.."`,
    name: "Mariana Lima",
    location: "Espírito Santo",
    photo: "/user-1.jpg",
    stars: 5,
  },
  {
    id: 2,
    text: `Tinha na cabeça fazer um Box de Vidro diferenciado em casa. Depois de tanta procura, localizamos a Beurde. Profissionais de alta capacidade, soube entender muito bem o que queria, e felizmente tirei do papel. Ficou excelente, recomendo esta emrpesa...."`,
    name: "Antonio Carlos",
    location: "Espirito Santo",
    photo: "/user-2.jpg",
    stars: 5,
  },
  // mais depoimentos aqui se quiser
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-stretch md:h-[70vh]">
      <div className="relative flex items-center justify-center h-full">
        <img
          src="/testimonials-2.png"
          alt="Depoimento 2"
          className="w-full h-full object-cover max-h-[70vh]"
        />
        <div className="h-[40%] bg-[#2B0E10] absolute bottom-0 left-0 right-0 flex flex-col gap-2 px-16 justify-center">
          <h1 className="text-[#E2C998] text-[40px] font-bold">
            Nossos Clientes
          </h1>
          <p className="text-white font-light max-w-lg">
            A satisfação do cliente é nosso objetivo final. Aqui está o que
            nossos clientes pensam de nós.
          </p>
          <button className="px-5 py-2 bg-gradient-to-t from-[#6F3C48] to-[#522A2A] md:w-1/3 font-bold text-lg text-white rounded-full flash-button cursor-pointer">
            Fale Conosco
          </button>
        </div>
      </div>

      {/* Lado direito com carousel */}
      <div
        className="relative flex flex-col justify-center max-h-[70vh] overflow-hidden bg-gray-100 bg-opacity-80 p-8 px-2 md:px-16"
        style={{
          backgroundImage: "url('/testimonials.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-xl text-[#3f2013] uppercase mb-4 tracking-widest">
          Testemunhos
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#290f12] mb-8 leading-snug">
          Veja o que nossos clientes pensam da <br /> Berude Vidraçaria!
        </h2>

        <Carousel
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "start" }}
          className="relative"
          setApi={setApi}
        >
          <CarouselContent className="">
            {testimonialsData.map(
              ({ id, text, name, location, photo, stars }) => {
                return (
                  <CarouselItem
                    key={id}
                    className="relative pt-1 flex flex-col justify-center px-4"
                  >
                    <blockquote className="relative text-[#6f3c48] text-lg italic pl-8">
                      <span className="text-6xl absolute -top-3 left-0 select-none">
                        “
                      </span>
                      {text}
                    </blockquote>

                    <div className="flex items-center gap-4 mt-6">
                      <img
                        src={photo}
                        alt={name}
                        className="w-22 h-22 rounded-full object-cover border border-black"
                      />
                      <div>
                        <p className="font-bold text-[#651D0E]">{name}</p>
                        <p className="text-sm text-[#888888] italic">
                          {location}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-4">
                        {[...Array(stars)].map((_, i) => (
                          <FaStar key={i} className="text-[#290f12]" />
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                );
              }
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
