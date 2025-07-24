
const About = () => {
  return (
    <div className="grid lg:grid-cols-[2fr_2fr_1fr] grid-cols-1 h-auto bg-[#FAF5F2] gap-8 p-6 md:p-0 lg:gap-20 lg:h-[60vh]">
      {/* Imagem da esquerda */}
      <div className="w-full h-64 lg:h-full hidden md:block">
        <img
          src="/hero-2.png"
          alt=""
          className="w-full h-full brightness-75"
        />
      </div>

      {/* Texto central */}
      <div className="flex flex-col justify-center gap-6 text-[#777777]">
        <h1 className="text-[#651D0E] text-3xl lg:text-4xl font-bold">Quem somos</h1>
        <div className="flex flex-col gap-4 text-sm lg:text-base">
          <p>
            A Berude Vidraçaria é uma empresa composta por um capital 100%
            nacional. Vem atuando no mercado de esquadrias de alumínio e
            envidraçamento de varanda dentre outros desde 2013, através de
            profissionais com anos de experiência, utilizando a tecnologia e
            conhecimento adquiridos ao longo destes anos, para melhor atender
            nossos clientes (PARCEIROS).
          </p>
          <p>
            Com o objetivo de atender prontamente com qualidade e preço
            compatível, mantemos constante desenvolvimento operacional e
            logístico onde através de testes e pesquisas identificamos as
            soluções para os diversos tipos de vidros para cada necessidade de
            cada cliente.
          </p>
          <p>
            A empresa acumula experiência nas de áreas: de Sacadas, Terraços e
            Divisão de Ambientes, Envidraçamento e Serralheria em Alumínio em
            vários segmentos do mercado.
          </p>
          <p>
            Com importantes clientes no estado de Espírito Santo. Todos os
            métodos de trabalho do Grupo são unificados com sistemas de
            treinamento e especializações criados através de técnicas
            desenvolvidas e introduzidos na Empresa, por profissionais
            gabaritados.
          </p>
        </div>
      </div>

      {/* Logo à direita */}
      <div className="md:flex justify-center items-center h-32 lg:h-auto hidden">
        <img
          src="/Logo-about.png"
          alt=""
          className="h-full w-auto max-h-48 lg:max-h-[60%] object-contain"
        />
      </div>
    </div>
  );
};

export default About;
