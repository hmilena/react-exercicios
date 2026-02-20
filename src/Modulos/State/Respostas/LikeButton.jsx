import { useState } from "react";

const LikeButton = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toggle = () => {
        if (!like) setCount(prev => prev + 1);
        setLike(prev => !prev);
    }

    return (
        <>
            <button
                onClick={toggle}
                className={`cursor-pointer p-3 rounded bg-amber-100 ${like ? "bg-blue-200 text-3xl" : "text-sm"}`}
            >{like ? "🔥" : "clique para curtir"}</button>
            <span className="block text-xs text-gray-500 italic mt-2">número de curtidas: {count}</span>
        </>
    )
}

export default LikeButton;