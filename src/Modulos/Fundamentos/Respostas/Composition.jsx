const CardComposition = ({ title, description, btnText = "Ir ->" }) => {
    return (
        <div className="card inline-flex flex-col gap-3 p-3 shadow-lg border border-amber-400 w-min-100 rounded-md bg-amber-50">
            {title && <h3 className="text-xl font-medium text-black m-0">{title}</h3>}
            {description && <p className="text-gray-500 m-0">{description}</p>}
            <button className="bg-amber-500 hover:bg-amber-700 p-3 py-1.5 rounded text-white transition m-0 cursor-pointer">{btnText}</button>
        </div>
    );
}

export default CardComposition;