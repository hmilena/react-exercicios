import { useId } from "react";

const ToggleButton = ({
    textOn = "On",
    textOff = "Off",
    checked,
    onChange,
}) => {
    const id = useId();

    return (
        <label htmlFor={id} className={`inline-flex items-center cursor-pointer ${checked ? "on" : "off"}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="sr-only peer" />
            <div className={`relative border border-gray-400 w-9 h-5 bg-grey-300 focus:outline-none focus:ring-4 focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand ${checked ? "after:bg-blue-500 " : "after:bg-gray-500 "}`}></div>
            <span className="select-none ms-3 text-sm font-medium text-heading">{checked ? textOn : textOff}</span>
        </label>
    )
}

export default ToggleButton;