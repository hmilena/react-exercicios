import { useState } from "react";

const MultipleInputForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const [submittedData, setSubmittedData] = useState(null);

    const handleOnchange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(form);
    }

    return (
        <form className="multiple-input-form inline-flex flex-col al gap-3" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="name" id="nome" value={form.name} onChange={handleOnchange} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={form.email} onChange={handleOnchange} />
            </div>

            <div>
                <label htmlFor="msg">Mensagem</label>
                <textarea id="msg" name="msg" value={form.msg} onChange={handleOnchange} />
            </div>

            <div>
                <button className="p-2 bg-blue-500 text-white rounded" type="submit">Enviar</button>
            </div>


            {submittedData && (
                <div className="p-3 border rounded border-blue-400">
                    <p><span className="text-blue-800 italic">Nome:</span> {submittedData.name}</p>
                    <p><span className="text-blue-800 italic">Email:</span> {submittedData.email}</p>
                    <p><span className="text-blue-800 italic">Mensagem:</span> {submittedData.msg}</p>
                </div>
            )}
        </form>
    )
}
export default MultipleInputForm;