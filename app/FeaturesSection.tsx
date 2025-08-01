
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'ISO 9001-2008 Certified',
      description: 'Internationally recognized quality management system certification ensuring consistent product quality.'
    },
    {
      icon: 'ri-global-line',
      title: 'Worldwide Export',
      description: 'Exporting premium natural casings to Europe, Japan, USA, Romania and other international markets.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'EU Approved',
      description: 'Our plant meets European Union standards with hygienic facilities and strict quality control.'
    },
    {
      icon: 'ri-time-line',
      title: '40+ Years Experience',
      description: 'Established in 1983, four decades of expertise in natural casings production and export.'
    },
    {
      icon: 'ri-team-line',
      title: 'Skilled Workers',
      description: 'Expert selectors and skilled workers ensuring proper cleaning, selection, and packaging.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Timely Delivery',
      description: 'Reliable shipping and on-time delivery to meet your production schedules worldwide.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Shaheen Enterprises</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four decades of excellence in natural casings production with international certifications and trusted quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
