import itfest from "../assets/itfestlogo-DoJlo-ZX.svg";
import bobby from "../assets/bobbylogo-B_EK53mG.svg";
import sanarip from "../assets/sanariplogo-CIZykREb.svg";
import optima from "../assets/optimaBank-2_i4H76J.svg";
import peaksoft from "../assets/peaksoft-C8CCj3bj.svg";
import mer from "../assets/mer-DFDYaBFv.png";
import jkm from "../assets/jkm-p75-xVKc.svg";

const Partners = () => {
  return (
    <section className="bg-[#3b82f6] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Наши Партнёры
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-7">
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={itfest} alt="Partner 1" className="h-24 w-60" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={bobby} alt="Partner 2" className="h-24 w-60" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={sanarip} alt="Partner 3" className="h-24 w-60" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={optima} alt="Partner 4" className="h-24 w-60" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={peaksoft} alt="Partner 5" className="h-24 w-60" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={mer} alt="Partner 6" className="h-24" />
          </div>
          <div className="flex transform justify-center transition duration-200 hover:scale-105">
            <img src={jkm} alt="Partner 7" className="h-24 w-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
