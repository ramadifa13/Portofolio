/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import PageRouter from '../Common/PageRouter';
import Navbar from './Navbar';
import About from '../Common/Components/About';
import Services from '../Common/Components/Services';
import CTA from '../Common/Components/CTA';
import Works from '../Common/Components/Works';
import ContactUs from '../Common/Components/ContactUs';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <About />
      <Services />
      <CTA />
      <Works />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PageRouter(Layout);
