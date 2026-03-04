const OddEven = ({ items }) => {
  const baseClass =
    "px-2 border mb-1 border-white transition hover:border hover:border-gray-300 rounded-2xl";
  return (
    <>
      <ul
        role="list"
        className="inline-flex flex-col list-disc list-inside space-y-3 text-gray-500 marker:text-sky-400 dark:text-gray-400"
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={`${baseClass} ${item.id % 2 === 0 ? "bg-purple-100" : ""}`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};
export default OddEven;
