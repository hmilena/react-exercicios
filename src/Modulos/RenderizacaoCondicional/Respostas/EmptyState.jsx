import { MdOutlineSearchOff } from "react-icons/md";

const EmptyState = ({ items }) => {
  const products = [];
  return (
    <>
      {items.length === 0 && (
        <div className="mx-auto flex justify-center max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <MdOutlineSearchOff className="text-2xl" />

          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              Sem itens para mostrar
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default EmptyState;
