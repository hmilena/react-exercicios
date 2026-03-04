import { useState } from "react";

const FilteredList = ({ users }) => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const btnAll = "border rounded-xl px-3 py-2 cursor-pointer transition";
  const filterAll =
    "text-purple-400 border-purple-200 bg-purple-100 hover:border-purple-700 hover:bg-purple-600 hover:text-white";
  const btnActive =
    "bg-green-100 border-green-200 text-green-600 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white";
  const btnInactive =
    "bg-red-100 border-red-200 text-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white";

  const filteredUsers = users.filter((user) => {
    if (activeFilter === "todos") return true;
    if (activeFilter === "active") return user.status === "active";
    if (activeFilter === "inactive") return user.status === "inactive";
  });

  return (
    <>
      <div className="inline-flex flex-col items-start gap-5">
        <div className="btns inline-flex items-start gap-3">
          <button
            className={`${btnAll} ${filterAll} ${activeFilter === "todos" ? "border-purple-700 text-white bg-purple-600" : ""}`}
            onClick={() => setActiveFilter("todos")}
          >
            Todos
          </button>
          <button
            className={`${btnAll} ${btnActive} ${activeFilter === "active" ? "border-green-600 bg-green-600 text-white" : ""}`}
            onClick={() => setActiveFilter("active")}
          >
            Ativos
          </button>
          <button
            className={`${btnAll} ${btnInactive} ${activeFilter === "inactive" ? "bg-red-600 text-white" : ""}`}
            onClick={() => setActiveFilter("inactive")}
          >
            Inativos
          </button>
        </div>
        <ul className="inline-flex flex-col items-start gap-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="py-0.5 px-3 rounded border border-gray-300"
            >
              {user.name}
            </li>
          ))}
        </ul>
        {filteredUsers.length > 0 && (
          <small>Quantidade de usuários: {filteredUsers.length}</small>
        )}
      </div>
    </>
  );
};

export default FilteredList;
