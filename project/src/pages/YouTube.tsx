import React, { useState } from 'react';
import { Search, Filter, Play, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Video {
  id: string;
  title: string;
  category: string;
  type: 'tutorial' | 'routine' | 'entertainment';
  thumbnail: string;
  duration: string;
  views: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Cómo Conseguir el Front Lever en 30 Días',
    category: 'Tiron',
    type: 'tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=400',
    duration: '15:24',
    views: '25K'
  },
  {
    id: '2',
    title: 'Rutina Completa de Empuje',
    category: 'Empuje',
    type: 'routine',
    thumbnail: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&q=80&w=400',
    duration: '12:45',
    views: '18K'
  },
  {
    id: '3',
    title: 'Tutorial SAT - Paso a Paso',
    category: 'Balance',
    type: 'tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?auto=format&fit=crop&q=80&w=400',
    duration: '20:15',
    views: '32K'
  }
];

const categories = ['Todos', 'Freestyle', 'Empuje', 'Tiron', 'Balance'];
const types = ['Todos', 'Tutoriales', 'Rutinas', 'Entretenimiento'];

const YouTube = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || video.category === selectedCategory;
    const matchesType = selectedType === 'Todos' || video.type === selectedType.toLowerCase();
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1C1C1E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="text-[#E43B3E]" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#E43B3E] text-white'
                      : 'bg-[#1C1C1E] text-gray-300 hover:bg-[#3A3A3C]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === type
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[#1C1C1E] text-gray-300 hover:bg-[#3A3A3C]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#1C1C1E] rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{video.category}</span>
                  <span>{video.views} visualizaciones</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-16 mb-24 bg-[#1C1C1E] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Recursos Descargables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center p-4 bg-[#3A3A3C] rounded-lg hover:bg-[#007AFF] transition-colors group"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">
                  Guía de Progresiones
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-white">
                  PDF completo con todas las progresiones para movimientos avanzados
                </p>
              </div>
              <ArrowRight className="text-white" />
            </a>
            <a
              href="#"
              className="flex items-center p-4 bg-[#3A3A3C] rounded-lg hover:bg-[#007AFF] transition-colors group"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">
                  Plantilla de Entrenamiento
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-white">
                  Excel con plantillas personalizables para tu rutina
                </p>
              </div>
              <ArrowRight className="text-white" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YouTube;