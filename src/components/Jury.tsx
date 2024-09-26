import sharipa from "../assets/images/sharipa.jpg";
import akbermet from "../assets/images/bermet.jpg";

const Jury = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-500">
          Организаторы и Жюри
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Образовательный центр Peaksoft House
        </p>

        <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:w-[700px] sm:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <img
              src={sharipa}
              alt="Байзакова Шарипа"
              className="w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Байзакова Шарипа</h3>
            <p className="text-gray-600">Инструктор по мобилографии</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <img
              src={akbermet}
              alt="Ак-Бермет"
              className="w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Русланова Ак-Бермет</h3>
            <p className="text-gray-600">Инструктор по маркетингу</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jury;
