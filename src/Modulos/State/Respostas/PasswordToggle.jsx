import { useState } from "react";

const PasswordToggle = () => {
    const [inputType, setInputType] = useState(false);

    const toggle = () => setInputType(prev => !prev);

    return (
        <div className="inline-flex relative">
            <input
                name="password"
                type={inputType ? "password" : "text"}
                placeholder="digite a senha"
                className="h-10 py-7 px-5 pl-13 bg-white rounded w-70 border border-gray-200 text-gray-700 " />
            <button
                className="h-12.5 w-10 text-xl cursor-pointer top-1 left-1 rounded absolute z-10 bg-amber-100"
                onClick={toggle}
            >{inputType ? "🙉" : "🙈"}</button>
        </div>
    )
}

export default PasswordToggle;