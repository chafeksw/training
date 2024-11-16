import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/videos/man-doing-push-ups-2785536"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Domina la Calistenia con
            <span className="text-[#E43B3E]"> Resultados Garantizados</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            De principiante a front lever en tiempo récord. Entrenamiento personalizado
            basado en experiencia real y resultados comprobados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/membresia"
              className="inline-flex items-center px-8 py-3 bg-[#E43B3E] text-white rounded-lg text-lg font-semibold hover:bg-[#E43B3E]/90 transition-colors"
            >
              Comienza Tu Transformación
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/resultados"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              Ver Resultados
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;