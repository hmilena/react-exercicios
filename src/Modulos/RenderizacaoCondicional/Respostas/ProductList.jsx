import ConditionalBadge from "./ConditionalBadge";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Logitech MX Master",
      price: 100,
      addedAt: new Date(),
    },
    {
      id: 2,
      name: "Logitech MX Keys S ",
      price: 92,
      addedAt: new Date("2026-01-01"),
    },
    {
      id: 3,
      name: "Samsung Watch Galaxy Watch 7 ",
      price: 180,
      addedAt: new Date("2026-03-03"),
    },
  ];
  return (
    <div className="produtos grid gap-5 p-2 grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="card rounded-lg inline-flex flex-col bg-white px-6 py-8 shadow ring-1 ring-gray-900/5 justify-center items-start"
        >
          {product.addedAt && (
            <ConditionalBadge dateItWasAdded={product.addedAt} />
          )}

          <h3 className="text-base font-medium tracking-tight text-gray-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
