import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GiShinyApple } from "react-icons/gi";
import EmptyState from "./../../RenderizacaoCondicional/Respostas/EmptyState";

const ShoppingList = ({ list }) => {
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState(list);

  const handleOnChange = (e) => {
    const val = e.target.value;
    setListItem(val);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([listItem, ...items]);
    setListItem("");
  };

  const removeItem = (indexParaRemover) => {
    setItems(items.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <div className="inline-flex flex-col gap-2">
      <h3>Frutas pra comprar</h3>
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Adicione uma fruta"
          value={listItem}
          onChange={handleOnChange}
        />
        <button
          className="rounded bg-blue-600 text-white px-3 cursor-pointer text-xs"
          onClick={addItem}
        >
          ADD
        </button>
      </form>
      <ul className="the-list inline-flex flex-col">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex justify-between items-start gap-4 border-b border-b-gray-300"
          >
            {item}
            <button className="btn-delete" onClick={() => removeItem(i)}>
              <MdDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <EmptyState
          items={items}
          text="Sem frutas na lista"
          icon=<GiShinyApple />
        />
      )}
      {items.length > 0 && (
        <small className="mt-3">Total items: {items.length}</small>
      )}
    </div>
  );
};

export default ShoppingList;
