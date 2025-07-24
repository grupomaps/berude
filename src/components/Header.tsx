import  { useState, useEffect, useRef } from "react";
import { FaClock, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Ajusta maxHeight para animação suave
  useEffect(() => {
    if (isOpen) {
      if (menuRef.current) {
        setMaxHeight(menuRef.current.scrollHeight + "px");
      }
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <>
      {/* Header Superior */}
      <div className="bg-white text-sm text-gray-700 py-1 border-b border-gray-300 hidden md:block">
        <div className="max-w-[90rem] mx-auto px-4 py-3 flex justify-between">
          <span>Nota: Seja bem vindo à Berude Vidraçaria!</span>
          <div className="flex space-x-4">
            <span className="pr-4 border-r-2 border-gray-300 flex items-center gap-2">
              <FaPhone className="rotate-90" /> (27) 99515 3036
            </span>
            <span className="pr-4 border-r-2 border-gray-300  flex items-center gap-2">
              <FaClock /> Seg - Sex: 8:00 - 18:00 / Sáb: 08:00 - 14:00
            </span>
            <span className=" flex items-center gap-2">
              <MdEmail /> comercial@berudevidracaria.com.br
            </span>
          </div>
        </div>
      </div>

      {/* Navbar Principal (fixa) */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-[90rem] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-16" />
          </div>

          {/* Links - escondidos no mobile */}
          <ul className="hidden md:flex space-x-9 text-[#401F1F] font-semibold">
            <li className="cursor-pointer border-b-3 border-[#401F1F] pb-1 font-bold text-lg">
              Home
            </li>
            <li className="cursor-pointer border-b-3 border-[#401F1F] font-bold text-lg">
              Quem somos
            </li>
            <li className="cursor-pointer border-b-3 border-[#401F1F] font-bold text-lg">
              Nossos serviços
            </li>
            <li className="cursor-pointer border-b-3 border-[#401F1F] font-bold text-lg">
              Projeto
            </li>
            <li className="cursor-pointer border-b-3 border-[#401F1F] font-bold text-lg">
              Porque à Berude
            </li>
            <li className="cursor-pointer border-b-3 border-[#401F1F] font-bold text-lg">
              Fale conosco
            </li>
          </ul>

          {/* Botão orçamento - escondido no mobile */}
          <button className="hidden md:block bg-[#401F1F] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#2d1414] flash-button">
            ORÇAMENTO GRATUITO
          </button>

          {/* Botão hamburger - aparece só no mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200"
            aria-label="Toggle menu"
          >
            {/* Ícone hamburguer simples usando SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Ícone de fechar (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Ícone hamburguer
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu móvel animado */}
        <div
  ref={menuRef}
  className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-md"
  style={{ maxHeight }}
>
  <ul className="flex flex-col space-y-4 px-6 py-4 text-[#401F1F] font-semibold">
    {[
      "Home",
      "Quem somos",
      "Nossos serviços",
      "Projeto",
      "Porque à Berude",
      "Fale conosco",
    ].map((item) => (
      <li
        key={item}
        className="cursor-pointer pb-1 font-bold text-lg"
        onClick={() => setIsOpen(false)} // fecha o menu ao clicar
      >
        {item}
      </li>
    ))}
  </ul>
</div>

      </nav>
    </>
  );
};

export default Header;
