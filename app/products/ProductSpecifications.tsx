
'use client';

export default function ProductSpecifications() {
  const specifications = [
    {
      category: "Selection Sizes",
      items: [
        "14/16mm to 26/+mm",
        "15/17mm to 25/+mm", 
        "18/22mm",
        "20/22mm",
        "22/28mm"
      ]
    },
    {
      category: "Original Sizes",
      items: [
        "16/+mm",
        "18/+mm",
        "20/+mm"
      ]
    },
    {
      category: "Quality Grades",
      items: [
        "IA Grade",
        "AB Grade",
        "IB Grade", 
        "IC Grade",
        "Catgut",
        "Shorts"
      ]
    },
    {
      category: "Hank Specifications",
      items: [
        "Length: 72, 90 & 91 Meters",
        "Strands: 7 to 22 per hank",
        "Smallest piece: 2 to 7 meters",
        "Natural white color",
        "No chemical or bleach used"
      ]
    }
  ];

  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Product Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed specifications of our natural casings products, customized as per importer requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{spec.category}</h3>
              <ul className="space-y-3">
                {spec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="ri-arrow-right-line text-blue-600 mt-1 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Origin & Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-map-pin-line text-blue-600 mt-1 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-gray-700">Pakistani, Afghani & Australian Sheep Casings</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-shield-check-line text-blue-600 mt-1 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-gray-700">ISO 9001-2008 Certified</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-truck-line text-blue-600 mt-1 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-gray-700">In-time shipment guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="https://www.shaheenent.com/images/reg_no.jpg" 
                alt="Registration Certificate"
                className="mx-auto rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
