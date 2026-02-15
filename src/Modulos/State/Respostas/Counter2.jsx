import { useState } from "react";

const Counter2 = () => {

    const [count, setCount] = useState(0);

    const negativeNumber = (count <= 0);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        !negativeNumber && setCount(count - 1);
    }

    return (
        <div className="counter inline-flex flex-col gap-3">
            <div className="flex gap-4">
                <button onClick={add} className="px-4 py-2 bg-blue-500 rounded text-white cursor-pointer w-25">+ 1</button>
                <button onClick={subtract} disabled={negativeNumber} className="px-4 py-2 bg-blue-500 rounded text-white cursor-pointer w-25 disabled:bg-gray-300/20 disabled:text-gray-700 disabled:cursor-not-allowed">- 1</button>
            </div>
            <div>
                <span className="block text-xl font-medium text-black">Contador: {count}</span>
                {negativeNumber && (<span className="message text-red-400 text-xs">Não pode ser menor que 0!</span>)}
            </div>
        </div>
    )
}

export default Counter2;