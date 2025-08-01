
'use client';

export default function ProcessSection() {
  const processSteps = [
    {
      title: 'Reception',
      description: 'Raw materials received from approved suppliers',
      icon: 'ri-inbox-line'
    },
    {
      title: 'Modern Selecting Hall',
      description: 'State-of-the-art facility for initial processing',
      icon: 'ri-building-line'
    },
    {
      title: 'Selecting / Grading',
      description: 'Expert selection and grading by skilled workers',
      icon: 'ri-user-star-line'
    },
    {
      title: 'Measurement',
      description: 'Precise measurement and sizing according to specifications',
      icon: 'ri-ruler-line'
    },
    {
      title: 'Salting',
      description: 'Proper salting process for preservation',
      icon: 'ri-drop-line'
    },
    {
      title: 'Cold Storage',
      description: 'Temperature-controlled storage for freshness',
      icon: 'ri-temp-cold-line'
    },
    {
      title: 'Inspection',
      description: 'Final quality inspection before delivery',
      icon: 'ri-search-eye-line'
    },
    {
      title: 'Delivery',
      description: 'Timely shipment to worldwide destinations',
      icon: 'ri-truck-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Production Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring quality at every step from reception to delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
