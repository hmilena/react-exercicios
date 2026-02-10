const Home = () => {
    return (
        <>
            <div className="hero-content">
                <h1 className="text-5xl font-bold">Pratique comigo</h1>
                <p className="py-6">
                    Siga cada exercício e tente resolver sozinho antes de ver a solução
                </p>
            </div>

            <div className="grid">

                <a href="#" className="card block font-normal group relative my-2 rounded-2xl bg-white border border-gray-950/10 overflow-hidden w-full cursor-pointer hover:border-primary">
                    <div className="px-6 py-5 relative flex items-center gap-x-4">
                        <div className="h-6 w-6 fill-gray-800 dark:fill-gray-100 text-gray-800 dark:text-gray-100">
                            i
                        </div>
                        <div className="w-full">Fundamentos</div>
                    </div>
                </a>
            </div>


        </>
    );
};

export default Home;