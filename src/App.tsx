/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import TrustSection from './components/TrustSection';
import QuoteProcess from './components/QuoteProcess';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <TrustSection />
        <QuoteProcess />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
