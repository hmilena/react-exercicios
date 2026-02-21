import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

const TemperatureConverter = () => {

    const [celcius, setCelsius] = useState("");
    const [fh, setFh] = useState("");

    const convertToFh = (e) => {
        const val = Number(e.target.value);
        setCelsius(val);
        setFh(Math.floor(val * 1.8 + 32));
    }
    const convertToCelsius = (e) => {
        const val = Number(e.target.value);
        setFh(val);
        setCelsius(Math.floor((val - 32) / 1.8));
    }

    return (
        <div className="flex flex-col gap-2 items-start">
            <label htmlFor="" className="text-sm font-semibold text-black">Converta Celsius para Fahrenheit</label>
            <div className="temperature-converter">
                <div className="tc-temp-div">
                    <span className="tc-temperature"><TbTemperatureCelsius /></span>
                    <input type="text" name="celcius" value={celcius} onChange={convertToFh} />
                </div>

                <span className="tc-temp-changer">
                    <FaExchangeAlt />
                </span>

                <div className="tc-temp-div fh">
                    <span className="tc-temperature"><TbTemperatureFahrenheit /></span>
                    <input type="text" name="fahrenheit" value={fh} onChange={convertToCelsius} />
                </div>
            </div>
        </div>
    )
}

export default TemperatureConverter;