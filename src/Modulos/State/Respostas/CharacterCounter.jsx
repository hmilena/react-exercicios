import { useState } from "react";

const CharacterCounter = ({ value, max = 100 }) => {

    const [text, setText] = useState("");

    const isOverflow = text.length > max;

    const handleOnchange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={handleOnchange}
                    value={value}
                    className={`h-10 py-7 px-5 bg-white rounded w-150 border border-gray-200 ${isOverflow ? "text-red-500" : "text-gray-700"}`} />
            </div>
            <div className={`mt-2 text-xs ml-2 text-blue-800 ${isOverflow ? "text-red-500" : "text-gray-500"}`}>
                {text.length} / {max}
            </div>
        </div>
    )
}

export default CharacterCounter;