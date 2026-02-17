import { useState } from "react";

const ColorPicker = ({ color = "red" }) => {

    const colors = {
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
    }

    const [isColor, setIsColor] = useState("bg-red-500");

    const handleOnClick = (e) => {
        const datasetColor = e.target.dataset.color
        setIsColor(datasetColor);
    }

    return (
        <div className="flex gap-3">
            <div className={`box-colorpicker shadow-lg outline outline-black/5 h-50 w-150 rounded-xl transition ${isColor}`}></div>
            <div className="ex-colorpicker inline-flex flex-col justify-center items-start gap-3">
                <button className={colors.red} onClick={handleOnClick} data-color={colors.red}>Vermelho</button>
                <button className={colors.green} onClick={handleOnClick} data-color={colors.green}>Verde</button>
                <button className={colors.blue} onClick={handleOnClick} data-color={colors.blue}>Azul</button>
            </div>
        </div>
    )
}

export default ColorPicker;