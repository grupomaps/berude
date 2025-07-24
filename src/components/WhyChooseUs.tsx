import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src="/porque.png" alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-start text-start p-4 bg-[#2B0E10] px-20 relative">
        <div className="z-20 ">
          <div className="mb-12">
            <p className="text-[#E2C998] text-xl font-medium">
              A MELHOR QUALIDADE
            </p>
            <h1 className="text-4xl font-extrabold text-white">
              Porque escolhe-nos
            </h1>
          </div>
          <p className="text-white">
            Com importantes clientes no estado de Espirito Santo. Todos os
            métodos de trabalho do Grupo são unificados com sistemas de
            treinamento e especializações criados através de técnicas
            desenvolvidas e introduzidos na Empresa, por profissionais
            gabaritados.
          </p>
          <div className="flex flex-col gap-8 mt-8 ">
            <p className="flex items-center gap-3 uppercase text-white font-medium">
              <FaCheckCircle className="text-white" />
              Qualidade em primeiro lugar
            </p>
            <p className="flex items-center gap-3 uppercase text-white font-medium">
              <FaCheckCircle className="text-white" />A satisfação do cliente em
              1º Lugar
            </p>
            <p className="flex items-center gap-3 uppercase text-white font-medium z-20">
              <FaCheckCircle className="text-white" />
              Equipe de profissionais experientes
            </p>
          </div>
          <a
            href=""
            className="flash-button bg-white text-[#2B0E10]  flex gap-2 items-center py-3 justify-center rounded-3xl text-md font-medium px-4 w-68 mx-auto mt-10 z-20"
          >
            <FaWhatsapp /> QUERO UM ORÇAMENTO
          </a>

          <div className="absolute bottom-0 right-0 z-10">
            <img src="/logo-transparente.png" alt="" className="h-40 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
