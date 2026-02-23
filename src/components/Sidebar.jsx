import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const NAV_ITEMS = [
  { to: "/fundamentos", id: 1, label: "Fundamentos" },
  { to: "/state-interatividade", id: 2, label: "State e Interatividade" },
  {
    to: "/renderizacao-condicional",
    id: 3,
    label: "Renderização Condicional e Listas",
  },
  { to: "/use-effect-side-effects", id: 4, label: "useEffect e Side Effects" },
  { to: "/custom-hooks", id: 5, label: "Custom Hooks" },
  { to: "/context-api", id: 6, label: "Context API" },
  { to: "/performance-otimizacao", id: 7, label: "Performance e Otimização" },
  { to: "/formularios-avancados", id: 8, label: "Formulários Avançados" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col py-4 w-80 h-full fixed transition max-lg:shrink-0 max-lg:w-10 max-lg:overflow-hidden max-lg:border-r max-lg:border-gray-300">
      <Header />

      <ol className="flex flex-col flex-1 list overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.to}
            className="rounded border-b border-gray-300 max-lg:rounded-0"
          >
            <NavLink
              to={item.to}
              className="flex p-4 cursor-pointer text-left hyphens-auto  hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-base hover:text-gray-900 transition-colors duration-200 max-lg:active:bg-gray-400 "
            >
              <span>{item.id}</span>
              <span className="flex-1 pl-2 max-lg:hidden">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ol>

      <Footer />
    </aside>
  );
};

export default Sidebar;
