const Price = ({ price }) => {
    return <div className="price">R$ {price.toFixed(2).replace('.', ',')}</div>;
}
export default Price;