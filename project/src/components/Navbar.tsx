import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              Chef_SW
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-[#007AFF] transition-colors">
                Inicio
              </a>
              <a href="/resultados" className="text-white hover:text-[#007AFF] transition-colors">
                Resultados
              </a>
              <a href="/youtube" className="text-white hover:text-[#007AFF] transition-colors">
                YouTube
              </a>
              <a href="/alumnos" className="text-white hover:text-[#007AFF] transition-colors">
                Alumnos
              </a>
              <a 
                href="/membresia" 
                className="bg-[#E43B3E] text-white px-4 py-2 rounded-md hover:bg-[#E43B3E]/90 transition-colors"
              >
                Empezar Ahora
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#007AFF]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <a href="/" className="block px-3 py-2 text-white hover:text-[#007AFF]">
              Inicio
            </a>
            <a href="/resultados" className="block px-3 py-2 text-white hover:text-[#007AFF]">
              Resultados
            </a>
            <a href="/youtube" className="block px-3 py-2 text-white hover:text-[#007AFF]">
              YouTube
            </a>
            <a href="/alumnos" className="block px-3 py-2 text-white hover:text-[#007AFF]">
              Alumnos
            </a>
            <a 
              href="/membresia" 
              className="block px-3 py-2 text-[#E43B3E] hover:text-[#E43B3E]/90"
            >
              Empezar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;