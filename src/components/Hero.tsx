import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"

export function Hero() {
  const slides = [
    {
      id: 1,
      image: "/hero-1.png",
      text: "TUDO EM SERRALHERIA E VIDRAÇARIA",
      title: "Esquadrias de Alumínio",
      description: "Um novo conceito em vidraçaria",
      whatsappLink:
        "https://wa.me/5527995153036?text=Olá,%20gostaria%20de%20mais%20informações!",
    },
    {
      id: 2,
      image: "/hero-2.png",
      text: "BERUDE VIDRAÇARIA",
      title: "Box, Janelas, Espelhos, Portas e muito mais...",
      description: "Fale com nossa equipe, estmos prontos para te atender.",
      whatsappLink:
        "https://wa.me/5527995153036?text=Olá,%20quero%20falar%20com%20um%20atendente.",
    },
  ];

   const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

React.useEffect(() => {
    if (!api) return

    setSelectedIndex(api.selectedScrollSnap())

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])
  return (
    <Carousel
    plugins={[
        Autoplay({
          delay: 7500,
        }),
      ]}
      opts={{ align: "start" }}
      orientation="vertical"
      className="w-full mx-auto"
      setApi={setApi}
    >
       <CarouselContent className="h-[70vh]">
        {slides.map(({ id, image, text, title, description, whatsappLink }, index) => {
          const isActive = selectedIndex === index

          return (
            <CarouselItem key={id} className="relative pt-1 h-[70vh]">
  <div className="h-full overflow-hidden relative">
    {/* Imagem de fundo com animação apenas se ativo */}
    <div
      className={`absolute inset-0 bg-cover bg-center z-0 ${
        isActive ? "pulse-scale" : ""
      }`}
      style={{ backgroundImage: `url(${image})` }}
    />

    {/* Conteúdo centralizado e animado */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-white text-center">
      {isActive && (
        <>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="mb-6 tracking-[0.35em] font-semibold text-lg text-white/90"
          >
            {text}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
            className="mb-6 tracking-wide text-lg max-w-2xl text-white/80"
          >
            {description}
          </motion.p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="inline-block bg-white hover:bg-transparent transition-all duration-500 border border-white rounded-full px-10 py-3 font-bold shadow-md text-slate-700 hover:text-white"
          >
            WHATSAPP
          </motion.a>
        </>
      )}
    </div>
  </div>
</CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselPrevious className="absolute right-2 top-[48%] -translate-y-1/2 bg-white border border-gray-800 text-white rounded-full p-2 cursor-pointer" />
      <CarouselNext className="absolute right-2 top-[52%] -translate-y-1/2 bg-white border border-gray-800 text-white rounded-full p-2 cursor-pointer" />
    </Carousel>
  );
}
