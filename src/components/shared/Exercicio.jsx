import { useState } from "react";
import Accordion from "./Accordion";
import CodeBlock from "./CodeHighligth";

const Exercicio = ({ titulo, chamada, requisitos = [], codigo, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="exercicio rounded border border-slate-300 p-4 ">

            <Accordion title={titulo} titleClass="text-xl font-bold">
                {chamada && <p className="text-gray-800 block mb-4">{chamada}</p>}

                <h3 className="text-lg font-bold mb-2">Requisitos</h3>
                <ul className="list-disc marker:text-slate-500 pl-4 mb-4 flex flex-col space-y-2">
                    {requisitos.map((requisito, index) => (
                        <li key={index}>{requisito}</li>
                    ))}
                </ul>

                <Accordion title="ver resposta" titleClass={`cursor-pointer w-full flex justify-between items-center p-2 text-slate-800 transition mb-4 rounded hover:bg-emerald-200 bg-emerald-100`} isOpenClass="bg-emerald-200" spanClass="px-4 font-bold">
                    <div className="pb-5 text-sm text-slate-500">
                        <div className="mb-5">
                            {codigo && <CodeBlock code={codigo} language="jsx" />}
                        </div>
                    </div>
                </Accordion>

                <span className="mt-4 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20 mb-2">Resultado:</span>
                <div className="py-3">
                    {children}
                </div>

            </Accordion>

        </div >
    )
}

export default Exercicio;