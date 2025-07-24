import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import StatsAndContact from "./components/StatsAndContact";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <section>
      <Header />
      <Hero />
      <div className="mb-[50px]" />
      <About />
      <div className="mb-[75px]" />
      <Services />
      <div className="mb-[75px]" />
      <WhyChooseUs />
      <StatsAndContact />
      <div className="mb-[75px]" />
      <Testimonials />
      <div className="mb-[75px]" />
      <Footer />
      <div className="flex justify-around items-center w-full mx-auto bg-[#2E0D14] text-white py-10">
        <p>
          © 2023 Berude Vidraçaria – Designed by{" "}
          <a href="https://grupomapsempresas.com.br/" className="text-gray-700 hover:underline">Grupo Maps Empresas</a>{" "}
          created PWD
        </p>
        <a href="https://wa.me/5527995153036" className="hover:underline">
          Precisa de um site? Clique aqui e fale com o nosso Suporte Contact
          Center
        </a >
      </div>
    </section>
  );
}

export default App;
