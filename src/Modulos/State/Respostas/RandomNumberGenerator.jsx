import { useState } from "react"

const RandomNumberGenerator = ({ min = 1, max = 100 }) => {
    const [nmb, setNbm] = useState(min);
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const plural = new Intl.PluralRules("pt-BR");
    const times = plural.select(counter) === "one" ? "vez" : "vezes";

    const handleOnClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            setNbm(Math.floor(Math.random() * max) + min);
            setCounter(counter + 1);
            setIsLoading(false);
        }, 800);
    }
    return (
        <div className="inline-flex flex-col gap-3 items-start">
            {counter > 0 && (
                <span className={`rounded-md px-2 py-1 text-xs font-medium inset-ring bg-yellow-50 text-yellow-700 inset-ring-yellow-600/20 w-auto`}>
                    Gerado {counter} {times}
                </span>
            )}
            <button
                className={`rounded-full transition cursor-pointer bg-blue-600 text-white p-2 px-4 hover:bg-blue-900 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading}
                onClick={handleOnClick}
            >
                {isLoading ? "Gerando..." : `Gerar número entre ${min} e ${max}`}
            </button>
            <div className="text-sm uppercase">Resultado:
                <span className="text-white ml-1 bg-purple-400 p-1 px-2 rounded">
                    {isLoading ? "..." : `${nmb}`}
                </span>
            </div>
        </div>
    )
}

export default RandomNumberGenerator;