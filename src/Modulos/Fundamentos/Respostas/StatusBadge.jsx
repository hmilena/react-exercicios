const statuses = {
    active: "badge-active bg-green-50 text-green-700 inset-ring-green-600/20",
    inactive: "badge-inactive bg-red-50 text-red-700 inset-ring-red-600/20",
    pending: "badge-pending bg-yellow-50 text-yellow-700 inset-ring-yellow-600/20",
}

const StatusBadge = ({ status = "active" }) => {
    const statsClasses = statuses[status] || statuses.active;
    const baseClass = "mt-4 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring mb-2"

    return <span className={`${statsClasses} ${baseClass}`}>{status}</span>;
}

export default StatusBadge;