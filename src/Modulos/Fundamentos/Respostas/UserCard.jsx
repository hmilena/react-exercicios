import Avatar from "./Avatar";

const UserCard = ({ user }) => {
    const { name, email, avatar, avatarSize } = user;

    return (
        <div className="user-card inline-flex items-center gap-2 border border-gray-200 rounded-lg p-3 shadow-lg ring ring-black/5">
            <Avatar name={name} imageUrl={avatar} size={avatarSize} />
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-black">{name}</h3>
                <a href={`mailto:${email}`} className="text-xs font-medium text-blue-500 italic hover:underline">{email}</a>
            </div>
        </div>
    );
}
export default UserCard;