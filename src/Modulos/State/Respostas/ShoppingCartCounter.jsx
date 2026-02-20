
const ShoppingCartCounter = ({ qnt, onChange }) => {

    return (

        <input type="number" name="quantity"
            value={qnt}
            onChange={(e) => onChange(Number(e.target.value))}
            min={1}
            max={10}
            className="w-20 p-2 border border-gray-300 text-sm rounded shadow-xs cursor-pointer" />

    )
}

export default ShoppingCartCounter;