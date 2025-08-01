
'use client';

import Link from 'next/link';

export default function ProductsSection() {
  const products = [
    {
      title: 'Sheep Casings',
      description: 'Premium quality sheep casings with strong texture, properly cleaned and hygienically packed.',
      specifications: ['14/16mm to 26/+mm', '15/17mm to 25/+mm', '18/22mm, 20/22mm, 22/28mm'],
      image: 'https://readdy.ai/api/search-image?query=Natural%20sheep%20casings%20for%20sausage%20production%2C%20premium%20quality%20white%20natural%20casings%2C%20food%20processing%20materials%2C%20clean%20hygienic%20packaging%2C%20professional%20food%20industry%20product%20photography%2C%20white%20background%2C%20high%20quality%20texture%2C%20meat%20processing%20supplies&width=400&height=300&seq=sheep1&orientation=landscape'
    },
    {
      title: 'Beef Casings',
      description: 'High-grade beef casings suitable for various sausage types with excellent texture and durability.',
      specifications: ['16/+mm, 18/+mm & 20/+mm', 'Original quality grades', 'IA, AB, IB, IC categories'],
      image: 'https://readdy.ai/api/search-image?query=Natural%20beef%20casings%20for%20large%20sausage%20production%2C%20premium%20quality%20natural%20casings%2C%20food%20processing%20materials%2C%20clean%20hygienic%20packaging%2C%20professional%20food%20industry%20product%20photography%2C%20white%20background%2C%20high%20quality%20texture%2C%20meat%20processing%20supplies&width=400&height=300&seq=beef1&orientation=landscape'
    },
    {
      title: 'Fresh Casings',
      description: 'Direct from slaughter house, fresh casings with natural white color without chemical treatment.',
      specifications: ['Fresh from slaughter house', 'Natural white color', 'No chemical treatment'],
      image: 'https://readdy.ai/api/search-image?query=Fresh%20natural%20casings%20direct%20from%20slaughter%20house%2C%20premium%20quality%20white%20natural%20casings%2C%20food%20processing%20materials%2C%20clean%20hygienic%20environment%2C%20professional%20food%20industry%20product%20photography%2C%20white%20background%2C%20fresh%20organic%20texture&width=400&height=300&seq=fresh1&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality natural casings exported worldwide, meeting international food safety standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Specifications:</h4>
                  <ul className="text-sm text-gray-600">
                    {product.specifications.map((spec, i) => (
                      <li key={i} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
