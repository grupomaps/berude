import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const StatsAndContact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

const handleEnviar = () => {
  const numeroDestino = "5527995153036"; // ← Número atualizado com DDD 27
  const texto = `Olá! Gostaria de solicitar um orçamento:\n\n` +
                `Nome: ${nome}\n` +
                `E-mail: ${email}\n` +
                `WhatsApp: ${whatsapp}\n` +
                `Serviço: ${servico}\n` +
                `Mensagem: ${mensagem}`;

  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
};


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 pt-0">
      <div className="flex flex-col p-5 md:p-16" ref={ref}>
        <h1 className="text-[#651D0E] font-extrabold text-[40px]">
          Presente desde 2013
        </h1>
        <p className="text-[#7A7A7A] font-light mt-4 max-w-3xl">
          Uma empresa criada em 2013 derivada de uma necessidade de mercado que
          sempre foi e é focada em primar pelo atendimento, qualidade de
          produtos e serviços. Não temos a pretensão de ser o maior e sim o
          melhor no nosso ramo de atividade. Hoje temos a certeza de que
          conquistamos a credibilidade dos nossos clientes que confiam a nós o
          que mais vai ficar aparente: o toque final.
        </p>
        <div className="flex flex-row items-center mt-10 gap-20">
          <div className="text-[#651D0E] text-center">
            <p className="text-[40px] font-extrabold">
              {inView ? <CountUp end={1000} duration={2} /> : "0"}+
            </p>
            <p className="text-lg font-bold">PROJETOS DE SUCESSO</p>
          </div>
          <div className="text-[#651D0E] text-center">
            <p className="text-[40px] font-extrabold">
              {inView ? <CountUp end={1900} duration={2.5} /> : "0"}+
            </p>
            <p className="text-lg font-bold">CLIENTES FELIZES</p>
          </div>
        </div>
      </div>

      {/* Coluna 2 - Compromisso */}
      <div className="flex flex-col bg-[#FAF5F2] p-5 md:p-16">
        <h1 className="text-[#651D0E] font-extrabold text-[40px]">
          Nosso Compromisso
        </h1>
        <p className="text-[#7A7A7A] font-light mt-4 max-w-3xl">
          Nossa experiência abrange todos os aspectos de vidraçaria. Sabemos
          como lidar com todo processo, do atendimento até a entrega do produto
          ao cliente final. Nossa equipe pode ajudá-lo a tirar do papel aquele
          sonho, e transformar em realidade.
        </p>
        <button
          onClick={() => window.open("https://wa.me/5527995153036", "_blank")}
          className="bg-[#2B0E10] cursor-pointer flash-button text-white font-medium flex items-center justify-center gap-2 py-3 mt-10 w-1/3 rounded-full mx-auto"
        >
          <FaWhatsapp /> Whatsapp
        </button>
      </div>

      {/* Coluna 3 - Formulário */}
      <div className="flex flex-col justify-between p-5 md:p-16 pb-0 h-full">
        <h1 className="text-[#651D0E] font-extrabold text-[40px]">
          Solicite um Orçamento
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <input
            type="text"
            placeholder="Nome*"
            className="border border-gray-300 rounded-full px-4 py-3"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail*"
            className="border border-gray-300 rounded-full px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Whatsapp*"
            className="border border-gray-300 rounded-full px-4 py-3"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-full px-4 py-3"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          >
            <option disabled value="">
              Escolha o Serviço
            </option>
            <option>Guarda Corpo em Sacada</option>
            <option>Fechamento de Varanda</option>
            <option>Tampos de Vidros</option>
            <option>Box de Vidros Temperados</option>
            <option>Espelhos Lapidados</option>
            <option>Vidros Temperados</option>
            <option>Cobertura com Vidros Laminados</option>
            <option>Esquadrias em Alumínio</option>
            <option>Grades</option>
            <option>Portas</option>
            <option>Portões</option>
          </select>
        </div>
        <textarea
          placeholder="Mensagem*"
          rows={5}
          className="border border-gray-300 rounded-3xl px-4 py-3 mt-4"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <button
          onClick={handleEnviar}
          className="bg-[#651D0E] flash-button text-white font-bold text-lg flex items-center justify-center gap-2 py-3 cursor-pointer mt-6"
        >
          Enviar <FiArrowRightCircle />
        </button>
      </div>
    </div>
  );
};

export default StatsAndContact;
