
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './ProductsHero';
import NaturalCasings from './NaturalCasings';
import ProductSpecifications from './ProductSpecifications';
import QualityAssurance from './QualityAssurance';
import ProductGallery from './ProductGallery';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductsHero />
      <NaturalCasings />
      <ProductSpecifications />
      <QualityAssurance />
      <ProductGallery />
      <Footer />
    </div>
  );
}
