const ConditionalBadge = () => {
  const baseClass =
    "mt-4 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring mb-2 badge-active bg-blue-50 text-blue-700 inset-ring-blue-600/20";

  return <span className={`${baseClass}`}>novo</span>;
};
export default ConditionalBadge;
