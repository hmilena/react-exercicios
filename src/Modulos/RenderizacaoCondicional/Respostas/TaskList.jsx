import { useState } from "react";

const TaskList = ({ tasks }) => {
  const [checkedIds, setCheckedIds] = useState({});

  const handleOnChange = (id) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className="inline-flex flex-col gap-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <label
            htmlFor={task.id}
            className={`flex items-center gap-3 cursor-pointer ${checkedIds[task.id] ? "line-through text-gray-400" : ""}`}
          >
            <input
              type="checkbox"
              id={task.id}
              checked={!!checkedIds[task.id]}
              onChange={() => handleOnChange(task.id)}
            />
            {task.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
