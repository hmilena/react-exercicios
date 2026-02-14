import Price from "./Price";

const ProductCard = ({ image, name, price, discount }) => {
    return (
        <div className="inline-flex flex-col product-card border border-blue-200 p-3 bg-blue-50 rounded gap-2">
            <figure className="overflow-hidden rounded">
                <img className="max-w-100% aspect-3/1 object-cover" src={image} alt={name} />
            </figure>
            <h3 className="text-2xl tracking-tight text-gray-950">{name}</h3>
            {discount ? <span className="inline-flex gap-2 align-text-bottom font-light"><del className="text-red-500 text-sm"><Price price={price} /></del> <Price price={price - discount} /></span> : <Price price={price} />}
        </div>
    );
}
export default ProductCard;