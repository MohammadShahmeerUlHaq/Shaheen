
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              Shaheen Enterprises
            </div>
            <p className="text-gray-300 mb-4">
              Established in 1983, providing high quality natural casings to international standards worldwide.
            </p>
            <div className="text-sm text-gray-400">
              ISO 9001-2008 Certified
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Natural Casings</li>
              <li>Sheep Casings</li>
              <li>Beef Casings</li>
              <li>Fresh Casings</li>
              <li>Football & Leather Gloves</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Plot No. 178/8-A, Falah Road<br />Bihar Colony, Karachi-75660<br />Pakistan</p>
              <p>Tel: +92-21-32530971, 32530972</p>
              <p>Fax: +92-21-32530281</p>
              <p>Email: mriaz@cyber.net.pk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shaheen Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
