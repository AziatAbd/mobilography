import logo from "../assets/mobilography-logo-BBbUcoqA.svg";

const Header = () => (
  <header className="fixed w-full flex justify-around py-4 px-8 z-30 bg-blue-500">
    <nav className="w-full flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="logo drop-shadow-[0_0_4px_rgba(255,255,255,1)]"
        />
        <h1 className="text-white text-xl font-bold ml-4">Mobilography</h1>
      </div>

      <div className="flex items-center space-x-8">
        <a
          href="#register"
          className="btn hover:shadow-[0_0_5px_rgba(255,255,255,1)] rounded-full px-6 py-2 text-white"
        >
          УЧАСТВОВАТЬ
        </a>
        <button className="btn hover:shadow-[0_0_5px_rgba(255,255,255,1)] rounded-full px-6 py-2 text-white">
          СВЯЗАТЬСЯ С НАМИ
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
