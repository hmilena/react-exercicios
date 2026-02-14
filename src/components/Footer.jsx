const Footer = () => {
    return (
        <footer className='w-full p-4 pb-0'>
            <div className="bg-slate-500 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-1">
                    React Exercícios
                </h4>
                <p className="text-xs text-white mb-3">
                    Built with Vite, React & Tailwind
                </p>
                <a
                    href="https://github.com/hmilena/react-exercicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white hover:text-yellow-100 font-medium"
                >
                    View on GitHub →
                </a>
            </div>
        </footer>
    )
}

export default Footer;  