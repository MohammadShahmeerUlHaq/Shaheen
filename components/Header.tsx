
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              Shaheen Enterprises
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Products
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              ISO 9001-2008 Certified
            </div>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
