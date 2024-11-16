import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Front Lever en 1 Mes",
    description: "A pesar de mi altura de 1.83m, logré dominar este movimiento avanzado en tiempo récord",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Clock,
    title: "SAT en 1.5 Años",
    description: "Dominé uno de los movimientos más técnicos de la calistenia en un tiempo excepcional",
    image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Target,
    title: "Resultados Garantizados",
    description: "Más de 50 alumnos han logrado sus objetivos con mi metodología, dominando movimientos avanzados como front lever, planche y muscle up",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=400"
  }
];

const Achievements = () => {
  return (
    <section className="py-24 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Experiencia y Logros que Respaldan mi Método
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-[#3A3A3C] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <achievement.icon className="absolute bottom-4 left-4 w-8 h-8 text-[#E43B3E] z-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E43B3E] transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;