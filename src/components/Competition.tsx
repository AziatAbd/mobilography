const Competition = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-500">
          Этапы и подробности турнира
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">
              3 этапа конкурсного отбора
            </h3>
            <p className="mt-4 text-gray-600">
              Пройди все 3 этапа отбора, чтобы достичь финала и показать свои
              лучшие работы!
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
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
              className="mt-4 inline-block rounded bg-pink-500 px-6 py-2 font-semibold text-white transition hover:bg-pink-600"
            >
              Перейти в Instagram
            </a>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">3 недели турнира</h3>
            <p className="mt-4 text-gray-600">
              Участники имеют 3 недели для подготовки и подачи своих роликов на
              конкурс.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-semibold">9 призовых мест</h3>
          <p className="mt-4 text-gray-600">
            Турнир предоставляет 9 призовых мест для лучших участников.
            Поделитесь своим талантом и выиграйте призы!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Competition;
