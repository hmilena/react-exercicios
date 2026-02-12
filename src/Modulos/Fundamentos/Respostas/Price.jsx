const Price = ({ price }) => {
    return <div className="font-bold text-lg">R$ {price.toFixed(2).replace('.', ',')}</div>;
}
export default Price;