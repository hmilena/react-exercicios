const BlogPostCard = ({ title, author, date, sumary, tags = [], image }) => {
    return (
        <div className="blog-post-card p-4 inline-flex flex-col gap-4 bg-purple-50 border border-purple-200">
            {image && (
                <figure className="overflow-hidden rounded-xl">
                    <img className="aspect-3/2 object-cover" src={image} alt={title} />
                </figure>
            )}

            <div className="meta-data text-xs">
                <span>by {author}</span> {date && (<span>| {new Date(date).toLocaleDateString('pt-BR')}</span>)}
            </div>

            <p className="text-sm text-gray-700">{sumary}</p>

            {tags && (
                <ul className="tags flex gap-2">
                    {tags.map((tag, i) => (
                        <li className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring bg-purple-100 text-purple-700 inset-ring-purple-600/20" key={i}>{tag}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default BlogPostCard;