const RatingStars = ({ rating }) => {
    return (
        <div className="inline-flex gap-2 bg-blue-50 p-2 rounded-md border border-blue-300">
            {Array.from({ length: rating }).map((_, index) => (
                <span key={index} className="text-yellow-400 text-xl">⭐</span>
            ))}
        </div>
    )
}
export default RatingStars;