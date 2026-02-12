const Button = ({ text, color }) => {
	const baseStyle = " px-4 py-2 rounded text-white font-bold cursor-pointer";
	return <button className={color ? color + baseStyle : baseStyle + " bg-blue-500"}>{text}</button>
}

export default Button;