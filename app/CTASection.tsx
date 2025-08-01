
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers worldwide who trust Shaheen Enterprises 
            for their natural casings needs. Get your quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Quote Now
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              View Products
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="ri-phone-line text-3xl text-white mb-4"></i>
              <div className="text-white">
                <div className="font-semibold">Call Us</div>
                <div className="text-blue-100">+92-21-32530971</div>
              </div>
            </div>
            <div>
              <i className="ri-mail-line text-3xl text-white mb-4"></i>
              <div className="text-white">
                <div className="font-semibold">Email Us</div>
                <div className="text-blue-100">mriaz@cyber.net.pk</div>
              </div>
            </div>
            <div>
              <i className="ri-map-pin-line text-3xl text-white mb-4"></i>
              <div className="text-white">
                <div className="font-semibold">Visit Us</div>
                <div className="text-blue-100">Karachi, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
