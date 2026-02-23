import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex p-5 pt-0 justify-center">
      <NavLink to="/" className="text-xl font-bold text-gray-700 max-lg:hidden">
        Exercícios React
      </NavLink>
      <span className="lg:hidden max-lg:flex">
        <FaReact />
      </span>
    </header>
  );
};

export default Header;
