import {
  FaInfoCircle,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#651D0E] text-white py-12 relative px-5 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/Logo-about.png"
            alt="Berude Vidraçaria"
            className=" mb-4"
          />
          <p className="text-sm text-justify max-w-sm leading-relaxed">
            A Berude Vidraçaria é uma empresa composta por um capital 100%
            nacional. Vem atuando no mercado de esquadrias de alumínio e
            envidraçamento de varanda, dentre outros, desde 2013...
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#E2C998]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#E2C998]">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Fale Conosco */}
        <div>
          <h3 className="text-2xl font-bold border-b border-black pb-1 mb-3">
            Fale Conosco
          </h3>
          <ul className="text-md space-y-4">
            <li>
              <span className="text-[#E2C998]">WhatsApp:</span> (27) 99515-3036
            </li>
            <li>
              <span className="text-[#E2C998]">E-mail:</span> comercial@berudevidracaria.com.br
            </li>
            <li>
              <span className="text-[#E2C998]">Endereço:</span> Av. Luciano das Neves, 1300 - Divino
              Espírito Santo - Vila Velha - ES
            </li>
            <li>
              <span className="text-[#E2C998]">Horário:</span> Seg - Sex (08:00hs - 18:00) Sab (08:00 -
              14:00)
            </li>
          </ul>
        </div>

        {/* Nossos Serviços */}
        <div>
          <h3 className="text-2xl font-bold border-b border-black pb-1 mb-3">
            Nossos Serviços
          </h3>
          <ul className="text-sm space-y-4 list-disc list-inside marker:text-[#E3C898]">
            <li>Arbor Management</li>
            <li>Garden Management</li>
            <li>Nursery / Tree Farm</li>
            <li>Trimming & Pruning</li>
            <li>Pests & Weeds Control</li>
            <li>Fruits & Flowers Garden</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold border-b border-black pb-1 mb-7 ">
            Orçamento Gratuito
          </h3>
          <div className="flex items-center gap-2 text-[#E3C898] font-bold text-3xl mt-4">
            <FaInfoCircle />
            <span className="">(27) 99515-3036</span>
          </div>
          <p className="text-sm mt-5">
            Fale conosco agora mesmo, assim elaboramos um orçamento para sua
            empresa, comércio ou loja.
          </p>
          <button className="mt-5 bg-[#2B0E10] text-white font-semibold px-9 py-3 rounded-full flash-button text-sm">
            WHATSAPP
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <img
          src="/Logo-about.png"
          alt="Logo Berude inferior"
          className="w-48 opacity-20"
        />
      </div>
    </footer>
  );
};

export default Footer;
