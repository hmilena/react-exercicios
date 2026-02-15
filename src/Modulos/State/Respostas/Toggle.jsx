import { useState } from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const ligaDesliga = () => {
        setIsOn(!isOn);
    }

    return (
        <label htmlFor="ex1" className={`inline-flex items-center cursor-pointer ${isOn ? "on" : "off"}`}>
            <input id="ex1" type="checkbox" value="" className="sr-only peer" onClick={ligaDesliga} />
            <div className={`relative border border-gray-400 w-9 h-5 bg-grey-300 focus:outline-none focus:ring-4 focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand ${isOn ? "after:bg-blue-500 " : "after:bg-gray-500 "}`}></div>
            <span className="select-none ms-3 text-sm font-medium text-heading">{isOn ? "Ligado" : "Desligado"}</span>
        </label>
    )
}

export default Toggle;