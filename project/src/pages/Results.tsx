import React from 'react';
import Navbar from '../components/Navbar';
import { Star, ArrowRight, TrendingUp, Clock, Target } from 'lucide-react';

const transformations = [
  {
    name: "Miguel Ángel",
    age: 24,
    time: "3 meses",
    achievement: "Front Lever",
    description: "De no poder hacer una dominada a conseguir el front lever completo en solo 3 meses.",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
    stats: {
      pullups: { before: 0, after: 15 },
      pushups: { before: 5, after: 40 },
      dips: { before: 2, after: 25 }
    }
  },
  {
    name: "Laura Sánchez",
    age: 28,
    time: "6 meses",
    achievement: "Muscle Up",
    description: "Superando sus límites, Laura pasó de entrenar en el gimnasio tradicional a dominar la calistenia.",
    before: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1583454155184-870a1f63be44?auto=format&fit=crop&q=80&w=400",
    stats: {
      pullups: { before: 0, after: 8 },
      pushups: { before: 3, after: 30 },
      dips: { before: 0, after: 15 }
    }
  }
];

const stats = [
  { icon: TrendingUp, value: "94%", label: "Tasa de éxito" },
  { icon: Clock, value: "30%", label: "Más rápido que el promedio" },
  { icon: Target, value: "100%", label: "Compromiso con resultados" }
];

const Results = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1C1C1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Resultados que
                <span className="text-[#E43B3E]"> Hablan por Sí Mismos</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Descubre cómo mis alumnos han transformado sus vidas a través de la calistenia
                y un entrenamiento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#3A3A3C] rounded-xl p-6 text-center transform hover:scale-105 transition-all">
                  <stat.icon className="w-12 h-12 text-[#E43B3E] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformations Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="mb-20 last:mb-0">
                <div className="bg-[#1C1C1E] rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Before/After Images */}
                      <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-white text-sm mb-2">Antes</p>
                            <img
                              src={transformation.before}
                              alt="Antes"
                              className="rounded-lg w-full aspect-square object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-white text-sm mb-2">Después</p>
                            <img
                              src={transformation.after}
                              alt="Después"
                              className="rounded-lg w-full aspect-square object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Stats and Info */}
                      <div className="lg:w-1/2">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h2 className="text-2xl font-bold text-white">
                              {transformation.name}, {transformation.age} años
                            </h2>
                            <p className="text-[#E43B3E]">
                              {transformation.achievement} en {transformation.time}
                            </p>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-[#E43B3E] fill-current"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-8">
                          {transformation.description}
                        </p>

                        {/* Progress Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {Object.entries(transformation.stats).map(([key, value]) => (
                            <div key={key} className="bg-[#3A3A3C] rounded-lg p-4">
                              <h3 className="text-white font-semibold capitalize mb-2">
                                {key}
                              </h3>
                              <div className="flex items-end justify-between">
                                <div className="text-gray-400">
                                  <span className="block">Antes</span>
                                  <span className="text-2xl font-bold text-white">
                                    {value.before}
                                  </span>
                                </div>
                                <ArrowRight className="text-[#E43B3E] mx-2" />
                                <div className="text-gray-400">
                                  <span className="block">Después</span>
                                  <span className="text-2xl font-bold text-[#E43B3E]">
                                    {value.after}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1C1C1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para Tu Transformación?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a nuestro programa personalizado y alcanza tus objetivos con un
              entrenamiento probado y resultados garantizados.
            </p>
            <a
              href="/membresia"
              className="inline-flex items-center px-8 py-3 bg-[#E43B3E] text-white rounded-lg text-lg font-semibold hover:bg-[#E43B3E]/90 transition-colors"
            >
              Comienza Tu Transformación
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Results;