import React from 'react';
import Navbar from '@/components/Navbar';
import BannerCarousel from '@/components/BannerCarousel';
import ChairmanMessage from '@/components/ChairmanMessage';
import AboutISCCM from '@/components/AboutISCCM';
import EventsCarousel from '@/components/EventsCarousel';
import MembershipSection from '@/components/MembershipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full overflow-hidden">
        <BannerCarousel />
      </div>
      <ChairmanMessage />
      <div className="px-4 sm:px-6 lg:px-8">
        <AboutISCCM />
        <EventsCarousel />
        <MembershipSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>);

};

export default HomePage;