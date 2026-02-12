const sizes = {
    small: "avatar-small h-12 w-12",
    medium: "avatar-medium h-24 w-24",
    large: "avatar-large h-36 w-36"
}

const Avatar = ({ imageUrl, name = 'Avatar', size = "medium" }) => {
    const sizesClasses = sizes[size] || sizes.medium;
    const baseClasses = "inline-block rounded-full ring-2 ring-white aspect-3/2 object-cover";

    return <img src={imageUrl} alt={name} className={`${sizesClasses} ${baseClasses}`} />
}

export default Avatar;