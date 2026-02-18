const MultipleInputForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="multiple-input-form inline-flex flex-col al gap-3">
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </div>

            <div>
                <label htmlFor="msg">Mensagem</label>
                <textarea id="msg" />
            </div>

            <div>
                <button className="p-2 bg-blue-500 text-white rounded" onSubmit={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}
export default MultipleInputForm;