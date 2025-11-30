import React from 'react'

const Gallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', // Interior
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', // Pool
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop', // Resort view
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop', // Balcony
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop', // Beach
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop', // Relax (Updated)
    ];
    return (
        <div>
            <section id="gallery" className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Resort Gallery</h2>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                        <p className="mt-4 text-gray-600">A glimpse into your perfect getaway.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-64">
                                <img
                                    src={src}
                                    alt={`Resort View ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-serif text-lg tracking-wider border border-white px-4 py-2">VIEW</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Gallery

