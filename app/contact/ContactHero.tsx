
'use client';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20office%20building%20exterior%20with%20glass%20facade%20and%20professional%20architecture%2C%20clean%20corporate%20environment%2C%20business%20headquarters%2C%20contemporary%20design%20with%20blue%20sky%20background&width=1200&height=600&seq=contact-hero&orientation=landscape')`
        }}
      />
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact Shaheen Enterprises
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Get in touch with us for premium quality natural casings. We're here to serve customers worldwide 
            with our 40+ years of experience in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+92-21-32530971" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
              Call Now
            </a>
            <a href="mailto:mriaz@cyber.net.pk" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
