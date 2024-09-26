const About = () => {
  return (
    <section
      className="animate-fade-in-slow relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/about-large.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#3b82f6]"></div>
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold">О турнире</h2>
        <p className="mx-auto mt-4 max-w-3xl">
          Развитие творческих навыков участников в области мобилографии,
          популяризация мероприятия ITFEST 2024, создание сообщества
          мобилографов и обмен опытом между участниками.
        </p>
      </div>
    </section>
  );
};

export default About;
