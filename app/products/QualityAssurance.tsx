
'use client';

export default function QualityAssurance() {
  const qualityFeatures = [
    {
      icon: "ri-shield-check-line",
      title: "ISO 9001-2008 Certified",
      description: "Internationally recognized quality management system"
    },
    {
      icon: "ri-global-line", 
      title: "EU Standard Approved",
      description: "Company approved as per European Union Standard"
    },
    {
      icon: "ri-building-line",
      title: "Hygienic Plant",
      description: "Hygienically built and managed for EU countries"
    },
    {
      icon: "ri-user-star-line",
      title: "Skilled Workers",
      description: "Expert selectors ensure premium quality"
    },
    {
      icon: "ri-truck-line",
      title: "Timely Delivery",
      description: "In-time shipment to global destinations"
    },
    {
      icon: "ri-award-line",
      title: "Famous Quality",
      description: "Renowned Shaheen quality worldwide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality has made us a trusted supplier to Europe, Japan, USA, and Romania since 1983
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <i className={`${feature.icon} text-4xl text-blue-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Memberships</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-award-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-gray-700">ISO 9001-2008 Certified</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-building-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-gray-700">Registration # 04-MINFAL-SE</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-group-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-gray-700">Pakistan Animal Natural Sausage Casings Association</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-store-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-gray-700">Chamber of Commerce & Industry, Karachi</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://www.shaheenent.com/images/UKAS%20Logo.jpg" 
                alt="UKAS Certification"
                className="w-full rounded-lg shadow-md"
              />
              <img 
                src="https://www.shaheenent.com/images/Shaeen%20Ent%20Cert1%20Big.jpg" 
                alt="Shaheen Enterprise Certificate"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
