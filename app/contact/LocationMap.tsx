
'use client';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our facility in Karachi, Pakistan - strategically located for efficient global shipping
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Facility</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-blue-600 mt-1 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      Plot No. 178/8-A, Falah Road,<br />
                      Bihar Colony, Karachi-75660<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-time-line text-blue-600 mt-1 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Operating Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-car-line text-blue-600 mt-1 mr-3 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transportation</h4>
                    <p className="text-gray-700">
                      Easily accessible by road from Karachi city center<br />
                      Close to major highways and port facilities<br />
                      Parking available on-site
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Contact</h4>
                <div className="space-y-2">
                  <a href="tel:+92-21-32530971" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                    <i className="ri-phone-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    +92-21-32530971
                  </a>
                  <a href="mailto:mriaz@cyber.net.pk" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                    <i className="ri-mail-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    mriaz@cyber.net.pk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0235985!2d67.0191!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDEnMDguOCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shaheen Enterprises Location"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Strategic Location Advantage
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto">
              Our facility in Karachi provides optimal access to Pakistan's livestock resources while maintaining 
              proximity to the port for efficient international shipping. This strategic location enables us to 
              serve customers in Europe, Japan, USA, and Romania with competitive pricing and timely delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
