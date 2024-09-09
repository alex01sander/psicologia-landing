import React from 'react';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import MainSection from './components/mainSection';
import Services from './components/services';
import { GlobalStyles } from './globalStyles';
import Contact from './components/contact';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainSection />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
