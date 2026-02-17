import { useState } from "react"

const InputValidation = ({ }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState("");

    const handleOnchange = (e) => {
        setError("");
        let value = e.target.value;
        setEmail(value);
    }

    const handleOnBlur = (e) => {
        let value = e.target.value;

        if (value !== "") {
            if (!value.includes("@")) {
                setError("Precisa ter @!")
            } else {
                setError("");
                setIsValid("Email válido.")
            }
        }

    }

    return (
        <div className="flex flex-col gap-1">
            <label className="block ml-2" htmlFor="">Digite o seu e-mail</label>
            <input
                type="email"
                value={email}
                onChange={handleOnchange}
                onBlur={handleOnBlur}
                className={`h-10 py-7 px-5 bg-white rounded w-150 border border-gray-200 text-gray-700 ${error && "border-red-500"}`}
            />
            <span className={`text-xs ml-1 ${error ? "text-red-500" : "text-green-600"}`} >
                {error || isValid}
            </span>

        </div>
    )
}

export default InputValidation;