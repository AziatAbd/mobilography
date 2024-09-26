const Participation = () => {
  return (
    <section
      className="relative bg-contain bg-right py-20"
      style={{
        backgroundImage:
          "url('https://www.optimabank.kg/images/news/2024/07/visa-olymlicgold.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="animate-fade-in-slow text-center text-4xl font-bold text-blue-500">
          Условия участия
        </h2>
        <div className="mx-auto mt-10 max-w-3xl text-center text-white">
          <p className="animate-fade-in-slow mb-4 text-lg font-light">
            Участвовать может каждый, абсолютно бесплатно.
          </p>
          <p className="animate-fade-in-slow mb-4 text-lg font-light">
            Участники должны создать 30-секундный рекламный ролик на заданную
            тему.
          </p>
          <p className="animate-fade-in-slow mb-4 text-lg font-light">
            После завершения съемки рекламного ролика, нужно запостить его в
            медиа и отправить ссылку нам на сайт.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Participation;
