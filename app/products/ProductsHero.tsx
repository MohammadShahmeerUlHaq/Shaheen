
'use client';

import Link from 'next/link';

export default function ProductsHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://www.shaheenent.com/images/pic-0.jpg')`
        }}
      />
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Premium Natural Casings
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Direct from slaughter house, properly cleaned, strong texture, exact assortment. 
            Skilled workers and selectors ensure hygienically packed products free from rust, dust, hairs and pimples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Request Quote
            </Link>
            <Link href="#specifications" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              View Specifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
