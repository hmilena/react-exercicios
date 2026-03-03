import { MdDeleteOutline } from "react-icons/md";

const ShoppingList = () => {
  return (
    <div className="inline-flex flex-col gap-2">
      <h3>Shopping List</h3>
      <input type="text" placeholder="Add an item" />
      <ul className="the-list inline-flex flex-col">
        <li className="flex justify-between items-start gap-4 border-b border-b-gray-300">
          list item 1{" "}
          <button className="btn-delete">
            <MdDeleteOutline />
          </button>
        </li>
        <li className="flex justify-between items-start gap-4 border-b border-b-gray-300">
          list item 1{" "}
          <button className="btn-delete">
            <MdDeleteOutline />
          </button>
        </li>
        <li className="flex justify-between items-start gap-4 border-b border-b-gray-300">
          list item 1{" "}
          <button className="btn-delete">
            <MdDeleteOutline />
          </button>
        </li>
        <li className="flex justify-between items-start gap-4 border-b border-b-gray-300">
          list item 1{" "}
          <button className="btn-delete">
            <MdDeleteOutline />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShoppingList;
