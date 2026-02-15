import { useState } from "react";

const Counter1 = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    return (
        <div className="counter inline-flex flex-col gap-3">
            <button onClick={add} className="px-4 py-2 bg-blue-500 rounded text-white cursor-pointer w-50">add 1</button>
            <span className="text-xl font-medium text-black">Contador: {count}</span>
        </div>
    )
}

export default Counter1;