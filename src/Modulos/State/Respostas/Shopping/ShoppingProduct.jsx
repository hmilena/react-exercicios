import { useState } from "react";
import ShoppingCartCounter from "../ShoppingCartCounter";

const ShoppingProduct = ({ image, name, price, category, qtt }) => {

    const [qnt, setQnt] = useState(1);
    const total = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price * qnt);

    return (
        <div className="shopping-product">
            <div className="shopping-product-image">
                <figure >
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <div>
                    <h3 className="shopping-product-name">{name}</h3>
                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring bg-purple-100 text-purple-700 inset-ring-purple-600/20">{category}</span>

                </div>
                <div className="flex justify-between gap-3 items-center">
                    <ShoppingCartCounter qnt={qnt} onChange={setQnt} />
                    <span className="shopping-product-price">{total}</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingProduct;