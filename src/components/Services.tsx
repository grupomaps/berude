import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  { title: "VIDRAÇARIA", image: "/servico-1.jpg" },
  { title: "GUARDA-CORPO", image: "/servico-2.jpg" },
  { title: "SACADAS", image: "/servico-3.png" },
];

const ServiceCard = ({ image, title }: { image: string; title: string }) => (
  <div className="w-full max-w-sm rounded-xl overflow-hidden border border-gray-300 bg-white mx-auto">
    <div className="relative w-full h-[330px] px-10 pb-12">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-90 px-10 pb-12"
      />
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full bg-[#3D0D05] text-white text-center py-3 rounded-tl-full rounded-br-full">
          <span className="font-extrabold text-md tracking-widest">
            {title}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-[#651D0E] text-3xl sm:text-4xl font-bold mb-4">
          NOSSOS <span className="text-[#4d4d4d]">SERVIÇOS</span>
        </h1>

        <div className="flex flex-col gap-4 text-[#4D4D4D] text-sm sm:text-base">
          <p>Abaixo alguns de nossos serviços:</p>
          <p>
            Guarda Corpo em Sacada, Fechamento de Varanda, Tampos de Vidros
            (Comum ou Temperado) de 4mm a 19mm, Lapidados ou com Bisotê, Box de
            Vidros Temperados, Espelhos Lapidados ou com Bisotê, Vidros:
            Temperados, Comuns, Laminados, Cobertura com Vidros Laminados ou
            Polycarbonato, Esquadrias em Alumínio, Grades, Portas, Portões.
          </p>
          <p className="italic font-bold">
            Mão de Obra Especializada em Geral.
          </p>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
          />
        ))}
      </div>

      {/* CAROUSEL: visível apenas em telas menores */}
      <div className="block sm:hidden w-full">
        <Carousel
          opts={{ align: "center" }}
          className="w-full max-w-sm mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <ServiceCard image={service.image} title={service.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
     <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] pt-20 gap-5">
        <div>
          <p className="text-[#2B0E10] text-xl font-medium">PRECISA DE UM</p>
          <h1 className="text-[#651D0E] text-4xl font-bold">Novo Projeto?</h1>
        </div>
        <div>
          <p className="text-[#777777] text-start">Nossos profissionais estão prontos para lhe atender e prestar o melhor atendimento. Fale conosco.</p>
        </div>
        <div>
          <a
  href=""
  className="flash-button bg-[#2B0E10] text-white flex gap-2 items-center py-3 justify-center rounded-3xl text-sm px-4"
>
  <FaWhatsapp /> QUERO UM ORÇAMENTO
</a>

        </div>
      </div>
    </div>
  );
};

export default Services;
