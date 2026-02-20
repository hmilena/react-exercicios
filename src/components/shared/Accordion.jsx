import { useState } from "react";

const Accordion = ({ title, titleClass, isOpenClass, spanClass, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleAccordion}
                className={`w-full cursor-pointer p-2 px-0 text-left mb-0 ${isOpen && isOpenClass} ${titleClass}`}>
                <span className={spanClass}>{title}</span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Accordion;