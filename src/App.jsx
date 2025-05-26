import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"; 
import Activities from "@/components/Activities"; 
import Achievements from "@/components/Achievements";
import Team from "@/components/Team"; 
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          let offset = 70; 
          if (targetId === "#home") { 
            offset = 0;
          }
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Activities /> {/* Renamed from section to Activities component directly */}
        <Achievements />
        <Team /> 
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;