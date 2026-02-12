import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className='flex p-5 pt-0 justify-center'>
            <NavLink to="/" className="text-xl font-bold text-gray-700 ">Exercícios React</NavLink>
        </header>
    )
}

export default Header;