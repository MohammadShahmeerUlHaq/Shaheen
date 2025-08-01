
'use client';

export default function NaturalCasings() {
  const products = [
    {
      title: "Sheep Casings",
      subtitle: "SCHAFDÄRME / BOYAUX DE MOUTONS / TRIPAS DE CORDERO",
      image: "https://www.shaheenent.com/images/pic-1a.jpg",
      features: [
        "Fresh from slaughter house",
        "Properly cleaned and selected",
        "Strong texture and durability",
        "Natural white color",
        "Free from foreign materials"
      ]
    },
    {
      title: "Beef Casings", 
      subtitle: "RINDERDÄRME / BCEUFS / BUEY",
      image: "https://www.shaheenent.com/images/pic-2a.jpg",
      features: [
        "Premium quality beef casings",
        "Exact assortment and grading",
        "Hygienically processed",
        "Strong and flexible texture",
        "International standard quality"
      ]
    },
    {
      title: "Fresh Casings",
      subtitle: "ANIMAL CASINGS - DIRECT PROCESSING",
      image: "https://www.shaheenent.com/images/pic-3a.jpg",
      features: [
        "Direct from slaughter house",
        "Immediate processing",
        "Maximum freshness guaranteed",
        "Skilled selection process",
        "In-time shipment"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Natural Casings Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our merchandise are well known within and outside the country. We supply fresh casings with strong texture, 
            well selected and assorted, accurate length and free from human or foreign articles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-blue-600 mb-4 font-medium">{product.subtitle}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-check-line text-green-500 mt-1 mr-2 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
