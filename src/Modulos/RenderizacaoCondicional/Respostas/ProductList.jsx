const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Logitech MX Master",
      price: 100,
    },
    {
      id: 2,
      name: "Logitech MX Keys S ",
      price: 92,
    },
    {
      id: 3,
      name: "Samsung Watch Galaxy Watch 7 ",
      price: 180,
    },
  ];
  return (
    <div className="produtos grid gap-5 p-2 grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="card rounded-lg bg-white px-6 py-8 shadow ring-1 ring-gray-900/5"
        >
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
