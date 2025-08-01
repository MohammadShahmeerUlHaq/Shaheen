
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsSection from './ProductsSection';
import QualitySection from './QualitySection';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <QualitySection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
