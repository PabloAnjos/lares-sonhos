import { PropertyCard } from "./PropertyCard";


export function ImoveisEmDestaque({ properties }) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Imóveis em destaque</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 text-gray-700">
                    {properties.map((property) => (
                        <PropertyCard 
                        name={property.name} 
                        image={property.image}
                        description={property.description}
                        location={property.location}
                        price={property.price}
                        featured={property.featured}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}