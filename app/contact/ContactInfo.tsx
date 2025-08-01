
'use client';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: "ri-map-pin-line",
      title: "Address",
      info: "Plot No. 178/8-A, Falah Road, Bihar Colony, Karachi-75660. Pakistan.",
      action: "Get Directions"
    },
    {
      icon: "ri-phone-line", 
      title: "Phone",
      info: "+92-21-32530971, 32530972",
      action: "Call Now"
    },
    {
      icon: "ri-printer-line",
      title: "Fax",
      info: "+92-21-32530281",
      action: "Send Fax"
    },
    {
      icon: "ri-mail-line",
      title: "Email",
      info: "mriaz@cyber.net.pk",
      action: "Send Email"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ISO 9001-2008 Certified company serving customers worldwide since 1983
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <i className={`${detail.icon} text-4xl text-blue-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto`}></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{detail.title}</h3>
              <p className="text-gray-600 mb-4">{detail.info}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                {detail.action}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Export Destinations</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <i className="ri-map-line text-blue-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">Europe</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-line text-blue-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">Japan</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-line text-blue-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">U.S.A.</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-line text-blue-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">Romania</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
