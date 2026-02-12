const ProfileCard = ({ name, age, job }) => {
    return (
        <div className="card inline-flex border border-slate-300 p-4 rounded-xl">
            <div className="space-y-0.5">
                <h2 className="text-lg font-semibold text-black">{name}</h2>
                <p className="font-medium text-gray-500">{age} - {job}</p>
            </div>
        </div>
    );
}

export default ProfileCard;