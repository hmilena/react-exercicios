import { useState } from "react"

const InputText = () => {
    const [text, setText] = useState("");

    const handleOnchange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                <label className="block ml-2" htmlFor="">Nome</label>
                <input
                    type="text"
                    onChange={handleOnchange}
                    value={text}
                    className="h-10 py-7 px-5 bg-white rounded w-150 border border-gray-200 text-gray-700" />
            </div>
            <div className="mt-2 text-xs ml-2 text-blue-800">
                texto: {text}
            </div>
        </div>
    )
}

export default InputText;