import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
    { to: "/fundamentos", label: "1. Fundamentos" },
    { to: "/state-interatividade", label: "2. State e Interatividade" },
    { to: "/renderizacao-condicional-listas", label: "3. Renderização Condicional e Listas" },
    { to: "/use-effect-side-effects", label: "4. useEffect e Side Effects" },
    { to: "/custom-hooks", label: "5. Custom Hooks" },
    { to: "/context-api", label: "6. Context API" },
    { to: "/performance-otimizacao", label: "7. Performance e Otimização" },
    { to: "/formularios-avancados", label: "8. Formulários Avançados" },
];

const Sidebar = () => {
    return (
        <aside className="flex h-screen overflow-hidden w-65 border-gray-200" style={{ position: "relative", top: "3.5rem", height: "calc(100vh - 3.5rem)" }}>
            <div className="flex flex-col h-full">

                <nav className="flex-1 px-3 py-4 overflow-y-auto">
                    <ul className="space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.to} className="w-full flex items-center space-x-3" >
                                <NavLink to={item.to} className="group flex items-center px-3 py-1.5 cursor-pointer gap-x-3 text-left break-words hyphens-auto rounded-xl w-full outline-offset-[-1px] hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 text-sm hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="px-4 py-4 border-t border-gray-200">
                    <div className="bg-slate-500 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-white mb-1">
                            React Exercícios
                        </h4>
                        <p className="text-xs text-white mb-3">
                            Built with Vite, React & Tailwind
                        </p>
                        <a
                            href="https://github.com/hmilena/react-exercicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white hover:text-yellow-100 font-medium"
                        >
                            View on GitHub →
                        </a>
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar;