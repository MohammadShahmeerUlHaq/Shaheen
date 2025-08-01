
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Modern%20meat%20processing%20facility%20with%20natural%20sausage%20casings%20production%20line%2C%20industrial%20food%20processing%20equipment%2C%20clean%20hygienic%20environment%2C%20professional%20workers%20in%20white%20uniforms%2C%20quality%20control%20stations%2C%20stainless%20steel%20machinery%2C%20bright%20lighting%2C%20ISO%20certified%20facility%20background%2C%20food%20safety%20standards%2C%20European%20Union%20approved%20plant&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Natural Casings Since 1983
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            ISO 9001-2008 Certified supplier of high-quality natural casings to Europe, Japan, USA, and Romania. 
            Trusted by the world's leading food manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-center">
              View Products
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer text-center">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
