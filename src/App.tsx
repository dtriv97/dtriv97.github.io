import { Header } from './components/layout/Header';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Testimonials } from './components/sections/Testimonials';
import { Work } from './components/sections/Work';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <footer className="site-footer">Built with React, TypeScript and intention.</footer>
    </>
  );
};
