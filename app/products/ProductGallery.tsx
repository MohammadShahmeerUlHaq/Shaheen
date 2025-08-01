
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    { src: "https://www.shaheenent.com/images/pic-4a.jpg", category: "processing", title: "Computer Section" },
    { src: "https://www.shaheenent.com/images/pic-5a.jpg", category: "facility", title: "Modern Selecting Hall" },
    { src: "https://www.shaheenent.com/images/pic-5-5a.jpg", category: "processing", title: "Selecting & Grading" },
    { src: "https://www.shaheenent.com/images/pic-6a.jpg", category: "processing", title: "Measurement Process" },
    { src: "https://www.shaheenent.com/images/pic-6-1a.jpg", category: "processing", title: "Salting Process" },
    { src: "https://www.shaheenent.com/images/pic-8a.jpg", category: "storage", title: "Cold Storage" },
    { src: "https://www.shaheenent.com/images/pic-9a.jpg", category: "quality", title: "Inspection Before Delivery" },
    { src: "https://www.shaheenent.com/images/pic-7a.jpg", category: "processing", title: "Reception Area" },
    { src: "https://www.shaheenent.com/images/pic-7-7a.jpg", category: "team", title: "Skilled Selectors" },
    { src: "https://www.shaheenent.com/images/pic-10a.jpg", category: "team", title: "Expert Staff" },
    { src: "https://www.shaheenent.com/images/pic-11a.jpg", category: "facility", title: "Production Floor" },
    { src: "https://www.shaheenent.com/images/pic-12a.jpg", category: "products", title: "Natural Casings" },
    { src: "https://www.shaheenent.com/images/pic-16a.jpg", category: "products", title: "Sheep Casings" },
    { src: "https://www.shaheenent.com/images/pic-17a.jpg", category: "products", title: "Beef Casings" },
    { src: "https://www.shaheenent.com/images/pic-18a.jpg", category: "quality", title: "Quality Control" },
    { src: "https://www.shaheenent.com/images/pic-13a.jpg", category: "other", title: "Football Products" },
    { src: "https://www.shaheenent.com/images/pic-15a.jpg", category: "other", title: "Leather Gloves" }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'products', name: 'Natural Casings' },
    { id: 'processing', name: 'Processing' },
    { id: 'facility', name: 'Facilities' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'team', name: 'Our Team' },
    { id: 'other', name: 'Other Products' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Production Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facilities, skilled team, and quality products
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            We also deal in Football and Leather working Gloves
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Request Product Information
          </Link>
        </div>
      </div>
    </section>
  );
}
