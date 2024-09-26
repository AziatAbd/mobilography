import itfest from "../assets/itfestlogo-DoJlo-ZX.svg";
import bobby from "../assets/bobbylogo-B_EK53mG.svg";
import sanarip from "../assets/sanariplogo-CIZykREb.svg";
import optima from "../assets/optimaBank-2_i4H76J.svg";
import peaksoft from "../assets/peaksoft-C8CCj3bj.svg";
import mer from "../assets/mer-DFDYaBFv.png";
import jkm from "../assets/jkm-p75-xVKc.svg";
import sharipa from "../assets/images/sharipa.jpg";
import akbermet from "../assets/images/bermet.jpg";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/world-photography-day-poster-design-with-camera-flowers-vector-illustration-style_1197675-4901.jpg?semt=ais_hybrid')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-pulse">
            Мобилография 2024
          </h1>
          <p className="mt-4 text-sm sm:text-lg max-w-lg animate-fade-in-slow">
            Прими участие в крупнейшем турнире по мобилографии и прояви свой
            талант!
          </p>

          <div className="mt-10 text-center animate-fade-in-slow">
            <h2 className="text-5xl sm:text-6xl font-bold text-blue-400 animate-bounce">
              300 000 СОМ
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-yellow-400">
              ПРИЗОВОЙ ФОНД
            </p>
          </div>

          <button
            onClick={handleNavigate}
            className="pointer mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition transform hover:scale-105 duration-200"
          >
            Подать заявку
          </button>
        </div>
      </header>

      {/* About Section */}
      <section
        className="relative py-20 bg-cover bg-center animate-fade-in-slow"
        style={{ backgroundImage: "url('/images/about-large.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#3b82f6]"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold">О турнире</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Развитие творческих навыков участников в области мобилографии,
            популяризация мероприятия ITFEST 2024, создание сообщества
            мобилографов и обмен опытом между участниками.
          </p>
        </div>
      </section>

      {/* Competition Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-500">
            Этапы и подробности турнира
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">
                3 этапа конкурсного отбора
              </h3>
              <p className="mt-4 text-gray-600">
                Пройди все 3 этапа отбора, чтобы достичь финала и показать свои
                лучшие работы!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">
                3 темы для создания роликов
              </h3>
              <p className="mt-4 text-gray-600">
                Темы будут опубликованы на странице Instagram:{" "}
                <a
                  href="https://www.instagram.com/itfest.kg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  @itfest.kg
                </a>
              </p>
              <a
                href="https://www.instagram.com/itfest.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
              >
                Перейти в Instagram
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">3 недели турнира</h3>
              <p className="mt-4 text-gray-600">
                Участники имеют 3 недели для подготовки и подачи своих роликов
                на конкурс.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold">9 призовых мест</h3>
            <p className="mt-4 text-gray-600">
              Турнир предоставляет 9 призовых мест для лучших участников.
              Поделитесь своим талантом и выиграйте призы!
            </p>
          </div>
        </div>
      </section>

      {/* Participation Conditions Section */}
      <section
        className="relative py-20 bg-contain bg-right"
        style={{
          backgroundImage:
            "url('https://www.optimabank.kg/images/news/2024/07/visa-olymlicgold.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Полупрозрачное затемнение */}
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-500 animate-fade-in-slow">
            Условия участия
          </h2>
          <div className="mt-10 max-w-3xl mx-auto text-center text-white">
            <p className="text-lg font-light mb-4 animate-fade-in-slow">
              Участвовать может каждый, абсолютно бесплатно.
            </p>
            <p className="text-lg font-light mb-4 animate-fade-in-slow">
              Участники должны создать 30-секундный рекламный ролик на заданную
              тему.
            </p>
            <p className="text-lg font-light mb-4 animate-fade-in-slow">
              После завершения съемки рекламного ролика, нужно запостить его в
              медиа и отправить ссылку нам на сайт.
            </p>
          </div>
        </div>
      </section>

      {/* Organizers and Jury Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-500">
            Организаторы и Жюри
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Образовательный центр Peaksoft House
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mx-auto  sm:w-[700px]">
            <div className="bg-white p-6 rounded-lg shadow-lg ">
              <img
                src={sharipa}
                alt="Байзакова Шарипа"
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Байзакова Шарипа</h3>
              <p className="text-gray-600">Инструктор по мобилографии</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={akbermet}
                alt="Ак-Бермет"
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">
                Русланова Ак-Бермет
              </h3>
              <p className="text-gray-600">Инструктор по маркетингу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#3b82f6]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white">
            Наши Партнёры
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-7 gap-8">
            {/* Партнёры */}
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={itfest} alt="Partner 1" className="h-24 w-60" />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={bobby} alt="Partner 2" className="h-24 w-60" />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={sanarip} alt="Partner 3" className="h-24 w-60" />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={optima} alt="Partner 4" className="h-24 w-60" />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={peaksoft} alt="Partner 5" className="h-24 w-60" />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={mer} alt="Partner 6" className="h-24 " />
            </div>
            <div className="flex justify-center transform hover:scale-105 transition duration-200">
              <img src={jkm} alt="Partner 7" className="h-24 w-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/photo-camera-creative-concept-background-vintage-retro-photo-camera-colored-background-travel-vacation-photography-concept_90380-1011.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold animate-pulse">Готов к участию?</h2>
          <p className="mt-4 max-w-lg mx-auto">
            Подай заявку и продемонстрируй свои навыки на крупнейшем турнире по
            мобилографии!
          </p>
          <button
            onClick={handleNavigate}
            className="pointer mt-6 px-8 py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition transform hover:scale-105 duration-200"
          >
            Подать заявку
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="mt-2">Связаться с нами:</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* WhatsApp link */}
            <a
              href="https://wa.me/996990808637"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition transform hover:scale-105"
            >
              <FaWhatsapp size={30} />
            </a>
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/itfest.kg?igsh=enBpcmx3MHpzdnZk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition transform hover:scale-105"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
