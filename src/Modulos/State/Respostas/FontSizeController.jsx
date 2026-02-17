import { useState } from "react";

const FontSizeController = () => {
    const [size, setSize] = useState(16);

    const add = () => {
        if (size < 50) {
            setSize(size + 1);
        }
    }
    const subtract = () => {
        if (size > 10) {
            setSize(size - 1);
        }
    }

    return (
        <>
            <div className="fontsize-controller inline-flex gap-3 mb-5">
                <button onClick={add}>A +</button>
                <button onClick={subtract}>A -</button>
            </div>

            <div><p style={{ fontSize: `${size}px` }} >Lorem Ipsum</p></div>
        </>


    )
}

export default FontSizeController;