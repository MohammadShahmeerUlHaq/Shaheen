
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';
import ManagementTeam from './ManagementTeam';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ManagementTeam />
      <LocationMap />
      <Footer />
    </div>
  );
}
