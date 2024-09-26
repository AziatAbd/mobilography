import { useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hero.webp";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <header
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full animate-fade-in flex-col items-center justify-center text-center text-white">
        <h2 className="animate-fade-in text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
          IT FEST 2024
        </h2>

        <h3 className="mt-2 animate-fade-in text-2xl font-semibold uppercase drop-shadow-md sm:text-3xl md:text-4xl">
          ТУРНИР ПО МОБИЛОГРАФИИ
        </h3>

        <p className="animate-fade-in-slow mt-4 max-w-lg text-sm sm:text-lg">
          Прими участие в крупнейшем турнире по мобилографии и прояви свой
          талант!
        </p>

        <div className="animate-fade-in-slow mt-10 text-center">
          <h2 className="animate-bounce text-5xl font-bold text-blue-400 sm:text-6xl">
            300 000 СОМ
          </h2>
          <p className="mt-2 text-xl font-semibold text-yellow-400 sm:text-2xl md:text-3xl">
            ПРИЗОВОЙ ФОНД
          </p>
        </div>

        <button
          onClick={handleNavigate}
          className="pointer mt-6 transform rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition duration-200 hover:scale-105 hover:bg-blue-600 sm:px-6 sm:py-4 md:px-8"
        >
          Подать заявку
        </button>
      </div>
    </header>
  );
};

export default Hero;
