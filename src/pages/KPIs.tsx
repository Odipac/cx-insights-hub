
import { TrendingUp, Clock, Users, Target, Phone, Star } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const KPIs = () => {
  const kpis = [
    {
      name: 'Resolución en Primera Llamada (FCR)',
      icon: Target,
      description: 'Porcentaje de problemas de clientes resueltos en el primer contacto',
      benchmark: '70-75%',
      improvement: 'Mejorar entrenamiento de agentes, mejorar base de conocimiento, implementar mejor enrutamiento de llamadas'
    },
    {
      name: 'Tiempo Promedio de Manejo (AHT)',
      icon: Clock,
      description: 'Tiempo promedio dedicado a manejar una interacción con el cliente',
      benchmark: '6-8 minutos',
      improvement: 'Agilizar procesos, proporcionar mejores herramientas, optimizar scripts'
    },
    {
      name: 'Nivel de Servicio',
      icon: Phone,
      description: 'Porcentaje de llamadas contestadas dentro del tiempo objetivo',
      benchmark: '80% en 20 segundos',
      improvement: 'Optimizar personal, implementar opciones de devolución de llamada, mejorar pronósticos'
    },
    {
      name: 'Satisfacción del Cliente (CSAT)',
      icon: Star,
      description: 'Medida de satisfacción del cliente con el servicio recibido',
      benchmark: '85%+',
      improvement: 'Enfocarse en entrenamiento de habilidades blandas, personalizar interacciones, hacer seguimiento de problemas'
    },
    {
      name: 'Utilización de Agentes',
      icon: Users,
      description: 'Porcentaje de tiempo que los agentes dedican a actividades productivas',
      benchmark: '75-85%',
      improvement: 'Optimizar horarios, reducir tiempo inactivo, equilibrar distribución de carga de trabajo'
    },
    {
      name: 'Tasa de Abandono de Llamadas',
      icon: TrendingUp,
      description: 'Porcentaje de llamadas que cuelgan antes de llegar a un agente',
      benchmark: '<5%',
      improvement: 'Reducir tiempos de espera, ofrecer opciones de devolución de llamada, mejorar mensajes de cola'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KPIs y Métricas del Contact Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indicadores de rendimiento esenciales para medir y optimizar las operaciones de tu contact center
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{kpi.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{kpi.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-700">Benchmark de la Industria:</span>
                    <span className="text-sm text-gray-900 ml-2 font-semibold">{kpi.benchmark}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Estrategias de Mejora:</span>
                    <p className="text-sm text-gray-600 mt-1">{kpi.improvement}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mejores Prácticas para Dashboard de KPIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoreo en Tiempo Real</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Implementar dashboards en vivo para visibilidad inmediata</li>
                <li>• Configurar alertas automatizadas para umbrales críticos</li>
                <li>• Usar indicadores codificados por colores para evaluación rápida del estado</li>
                <li>• Asegurar que los datos se actualicen en tiempo real o casi tiempo real</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Análisis de Datos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rastrear tendencias a lo largo del tiempo, no solo métricas puntuales</li>
                <li>• Correlacionar diferentes KPIs para entender relaciones</li>
                <li>• Usar datos históricos para pronósticos y planificación</li>
                <li>• Implementar capacidades de desglose para análisis detallado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default KPIs;
