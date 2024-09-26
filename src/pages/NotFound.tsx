import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-600">
        Страница не найдена
      </h2>
      <p className="mt-2 text-gray-500">
        Извините, но страница, которую вы ищете, не существует.
      </p>
      <button
        onClick={handleNavigateHome}
        className="mt-6 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-600"
      >
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFound;
