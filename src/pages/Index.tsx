
import { ArrowRight, BarChart3, Users, Brain, Target, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'KPIs y Métricas',
      description: 'Guía completa de indicadores esenciales de rendimiento del contact center y benchmarks',
      link: '/kpis'
    },
    {
      icon: Users,
      title: 'Experiencia del Cliente',
      description: 'Domina las métricas de CX incluyendo tNPS, CSAT y CES con estrategias probadas de mejora',
      link: '/cx-tnps'
    },
    {
      icon: Brain,
      title: 'Tecnologías de IA',
      description: 'Explora soluciones de IA de vanguardia y su impacto transformador en contact centers',
      link: '/ai-insights'
    }
  ];

  const stats = [
    { value: '40-60%', label: 'Reducción en consultas rutinarias con IA', icon: TrendingUp },
    { value: '25-35%', label: 'Mejora en tasas de FCR', icon: Target },
    { value: '85%+', label: 'Objetivo de puntuación CSAT', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Optimiza el Rendimiento
              <span className="block text-gray-300">de tu Contact Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Orientación experta en KPIs, métricas de experiencia del cliente y tecnologías de IA para transformar las operaciones de tu contact center y ofrecer un servicio al cliente excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kpis"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Explorar KPIs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-insights"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                Descubrir Soluciones de IA
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guía Integral para Contact Centers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para medir, analizar y mejorar el rendimiento de tu contact center
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300 group"
                >
                  <div className="bg-gray-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="flex items-center text-gray-900 font-medium group-hover:text-gray-700">
                    Aprender Más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar tu Contact Center?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Obtén orientación personalizada y respuestas a tus desafíos específicos con nuestro asistente impulsado por IA
          </p>
          <p className="text-gray-300 mb-8">
            Haz clic en el botón de chat en la esquina inferior derecha para iniciar una conversación con nuestro experto en contact center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explorar Recursos
            </Link>
            <Link
              to="/cx-tnps"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Aprender sobre tNPS
            </Link>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Index;
