import { useState } from "react";
import CodeBlock from "./CodeHighligth";

const Exercicio = ({ titulo, chamada, requisitos = [], codigo, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="exercicio rounded border border-slate-300 p-4 ">
            <h2 className="text-xl font-bold mb-2">{titulo}</h2>
            {chamada && <p className="text-gray-800 block mb-4">{chamada}</p>}

            <h3 className="text-lg font-bold mb-2">Requisitos</h3>
            <ul className="list-disc pl-4 mb-4 flex flex-col space-y-2">
                {requisitos.map((requisito, index) => (
                    <li key={index}>{requisito}</li>
                ))}
            </ul>

            <div>
                <button onClick={toggleAccordion}
                    className={`cursor-pointer w-full flex justify-between items-center p-2 text-slate-800 transition rounded ${isOpen ? "bg-emerald-200 mb-4" : "bg-emerald-100 hover:bg-emerald-200"}`}>
                    <span className="font-bold uppercase">{isOpen ? "Esconder" : "Mostrar"} resposta</span>
                </button>
                <div id="content-1" className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : ""}`}>
                    <div className="pb-5 text-sm text-slate-500">
                        <div className="mb-5">
                            {codigo && <CodeBlock code={codigo} language="jsx" />}
                        </div>

                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20 mb-2">Resultado:</span>
                        <div className="p-3">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Exercicio;