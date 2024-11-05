



export function Hero() {
    return (
        <section className="bg-gray-100 py-20 text-gray-700">
                <div className="container mx-auto px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl font-bold mb-4">Encontre a casa dos seus sonhos</h1>
                                <p className="text-xl mb-8">Descubra o imóvel perfeito com a Lares & Sonhos</p>
                                <button className="bg-emerald-400 hover:bg-emerald-500 transition-all text-white px-4 py-2 rounded-md">Ver imóveis</button>
                        </div>
                        <div className="md:w-1/2">
                                <img src="src/assets/casa-hero.webp" alt="Imóvel com piscina externa em um dia ensolarado" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
        </section>
    )
}