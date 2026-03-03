const SimpleList = () => {
  const names = ["milena", "carlos", "pudim", "pipoca", "cookie"];
  return (
    <ul
      role="list"
      className="inline-flex flex-col list-disc list-inside space-y-3 text-gray-500 marker:text-sky-400 dark:text-gray-400"
    >
      {names.map((name, index) => (
        <li
          key={index}
          className="px-2 border mb-1 border-white transition hover:border hover:border-gray-300 rounded-2xl"
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default SimpleList;
