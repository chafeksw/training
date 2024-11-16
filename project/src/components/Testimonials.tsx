import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200",
    achievement: "Front Lever en 3 meses",
    text: "La metodología de Chef_SW es única. Pasé de no poder hacer una dominada a conseguir el front lever en solo 3 meses.",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    achievement: "Planche en 6 meses",
    text: "Increíble cómo un entrenamiento personalizado puede hacer tanta diferencia. Los resultados hablan por sí solos.",
    before: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1583454155184-870a1f63be44?auto=format&fit=crop&q=80&w=400"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-16">
          Transformaciones Reales
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1C1C1E] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#E43B3E]">{testimonial.achievement}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#E43B3E] fill-current"
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white text-sm mb-2">Antes</p>
                    <img
                      src={testimonial.before}
                      alt="Antes"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm mb-2">Después</p>
                    <img
                      src={testimonial.after}
                      alt="Después"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;