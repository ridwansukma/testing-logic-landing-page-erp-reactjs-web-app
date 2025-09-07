import Header from '../components/layouts/Header';
import React, { useState } from 'react';
import Hero from './hero';
import About from './about';
import PricingPlans from './pricing';
import Contact from './contact';
import Login from './modal/login';
import Footer from '../components/layouts/Footer';

const LandingPage: React.FC = () => {
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header setOpenModalLogin={setOpenModalLogin} />
      <Hero />
      <About />
      <PricingPlans setOpenModalLogin={setOpenModalLogin} />
      <Contact />
      <Footer />

      <Login
        openModalLogin={openModalLogin}
        setOpenModalLogin={setOpenModalLogin}
      />
    </div>
  );
};
export default LandingPage;
