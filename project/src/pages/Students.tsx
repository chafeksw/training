import React, { useState } from 'react';
import { Search, Filter, Star, TrendingUp, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Student {
  id: string;
  name: string;
  age: number;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  startDate: string;
  favoriteMove: string;
  image: string;
  achievements: string[];
  progress: number;
}

const students: Student[] = [
  {
    id: '1',
    name: 'Carlos Martínez',
    age: 25,
    level: 'Avanzado',
    startDate: '2023-06-15',
    favoriteMove: 'Front Lever',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400',
    achievements: ['Front Lever', 'Muscle Up', 'Handstand'],
    progress: 95
  },
  {
    id: '2',
    name: 'Laura García',
    age: 28,
    level: 'Intermedio',
    startDate: '2023-08-01',
    favoriteMove: 'Muscle Up',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    achievements: ['Pull Ups', 'Muscle Up'],
    progress: 75
  },
  {
    id: '3',
    name: 'Miguel Torres',
    age: 22,
    level: 'Principiante',
    startDate: '2023-12-01',
    favoriteMove: 'Pull Ups',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=400',
    achievements: ['Pull Ups'],
    progress: 45
  }
];

const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Todos');

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'Todos' || student.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-[#E43B3E]">Alumnos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a los atletas que están transformando sus vidas a través de la calistenia
            y alcanzando resultados extraordinarios.
          </p>
        </section>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar alumnos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1C1C1E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="text-[#E43B3E]" />
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedLevel === level
                      ? 'bg-[#E43B3E] text-white'
                      : 'bg-[#1C1C1E] text-gray-300 hover:bg-[#3A3A3C]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[#1C1C1E] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="mr-2">{student.age} años</span>
                    <span className="mx-2">•</span>
                    <span className={`
                      ${student.level === 'Principiante' && 'text-green-400'}
                      ${student.level === 'Intermedio' && 'text-yellow-400'}
                      ${student.level === 'Avanzado' && 'text-[#E43B3E]'}
                    `}>{student.level}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progreso</span>
                    <span className="text-sm text-[#E43B3E]">{student.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#3A3A3C] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E43B3E] rounded-full transition-all duration-500"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm text-gray-400 mb-2">Movimiento Favorito</h4>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-[#E43B3E] mr-2" />
                    <span className="text-white">{student.favoriteMove}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Logros</h4>
                  <div className="flex flex-wrap gap-2">
                    {student.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#3A3A3C] rounded-full text-sm text-white"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`/alumnos/${student.id}`}
                  className="mt-6 flex items-center justify-center w-full px-4 py-2 bg-[#3A3A3C] text-white rounded-lg hover:bg-[#007AFF] transition-colors group"
                >
                  Ver Perfil
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="mt-24 bg-[#1C1C1E] rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#E43B3E] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Tasa de Progreso</div>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-[#E43B3E] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Alumnos Activos</div>
            </div>
            <div className="text-center">
              <Filter className="w-12 h-12 text-[#E43B3E] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Objetivos Alcanzados</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Students;