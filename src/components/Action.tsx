import { useNavigate } from "react-router-dom";
import actionImg from "../assets/images/action.webp";

const Action = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <section
      id="register"
      className="animate-fadeIn relative bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${actionImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="animate-fadeIn container relative z-10 mx-auto px-6 text-center text-white">
        <h2 className="animate-pulse text-5xl font-bold">Готов к участию?</h2>
        <p className="animate-slideIn mx-auto mt-4 max-w-lg">
          Подай заявку и продемонстрируй свои навыки на крупнейшем турнире по
          мобилографии!
        </p>
        <button
          onClick={handleNavigate}
          className="pointer mt-6 transform rounded-md bg-blue-500 px-8 py-4 font-semibold text-white transition duration-200 hover:scale-105 hover:bg-blue-600"
        >
          Подать заявку
        </button>
      </div>
    </section>
  );
};

export default Action;
