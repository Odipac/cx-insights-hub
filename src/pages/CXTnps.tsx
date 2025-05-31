
import { Heart, TrendingUp, Users, MessageSquare, Award, Target } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const CXTnps = () => {
  const cxMetrics = [
    {
      title: 'Puntuación de Esfuerzo del Cliente (CES)',
      icon: Target,
      description: 'Mide qué tan fácil fue para los clientes resolver su problema',
      scale: 'Escala 1-7 (1 = muy difícil, 7 = muy fácil)',
      target: '5.5+',
      improvements: [
        'Simplificar procesos y reducir pasos',
        'Mejorar opciones de autoservicio',
        'Mejorar entrenamiento de agentes en eficiencia',
        'Implementar mejor gestión del conocimiento'
      ]
    },
    {
      title: 'Net Promoter Score (NPS)',
      icon: Heart,
      description: 'Mide la lealtad del cliente y la probabilidad de recomendación',
      scale: 'Escala 0-10 (9-10 = Promotores, 7-8 = Pasivos, 0-6 = Detractores)',
      target: '50+',
      improvements: [
        'Enfocarse en exceder las expectativas del cliente',
        'Implementar alcance proactivo al cliente',
        'Abordar retroalimentación de detractores rápidamente',
        'Crear programas de lealtad e incentivos'
      ]
    },
    {
      title: 'Satisfacción del Cliente (CSAT)',
      icon: Award,
      description: 'Satisfacción general con la experiencia de servicio',
      scale: 'Escala 1-5 o porcentaje de satisfacción',
      target: '85%+',
      improvements: [
        'Personalizar interacciones con clientes',
        'Reducir tiempos de espera y retrasos de respuesta',
        'Mejorar tasas de resolución en primera llamada',
        'Mejorar entrenamiento de habilidades blandas de agentes'
      ]
    }
  ];

  const tnpsStrategies = [
    {
      phase: 'Medir',
      icon: TrendingUp,
      actions: [
        'Implementar encuestas post-interacción',
        'Configurar ciclos regulares de seguimiento de tNPS',
        'Establecer mediciones de línea base',
        'Crear análisis segmentado por canal, agente y tipo de problema'
      ]
    },
    {
      phase: 'Analizar',
      icon: MessageSquare,
      actions: [
        'Identificar factores clave de satisfacción/insatisfacción',
        'Correlacionar tNPS con métricas operacionales',
        'Analizar comentarios textuales para obtener insights',
        'Comparar con estándares de la industria'
      ]
    },
    {
      phase: 'Mejorar',
      icon: Users,
      actions: [
        'Abordar puntos de dolor específicos identificados',
        'Implementar programas de entrenamiento específicos',
        'Rediseñar procesos problemáticos',
        'Cerrar el ciclo con clientes que proporcionaron retroalimentación'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiencia del Cliente y NPS Transaccional</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entendiendo y mejorando la satisfacción del cliente a través de medición estratégica y optimización
          </p>
        </div>

        {/* CX Metrics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Métricas Clave de CX</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cxMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{metric.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{metric.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Escala:</span>
                      <p className="text-sm text-gray-600">{metric.scale}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Objetivo:</span>
                      <span className="text-sm text-gray-900 ml-2 font-semibold">{metric.target}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Estrategias de Mejora:</span>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        {metric.improvements.map((improvement, idx) => (
                          <li key={idx}>• {improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* tNPS Strategy Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Estrategia de NPS Transaccional</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tnpsStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{strategy.phase}</h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    {strategy.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Mejores Prácticas para Mejora de CX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Diseño de Encuestas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Mantener encuestas cortas y enfocadas (máximo 2-3 preguntas)</li>
                <li>• Hacer la pregunta NPS primero para evitar sesgos</li>
                <li>• Incluir una pregunta abierta para contexto</li>
                <li>• Programar encuestas apropiadamente después de interacciones</li>
                <li>• Usar múltiples canales para distribución de encuestas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Planificación de Acciones</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Responder a detractores dentro de 24-48 horas</li>
                <li>• Compartir retroalimentación positiva con equipos relevantes</li>
                <li>• Rastrear iniciativas de mejora y su impacto</li>
                <li>• Crear responsabilidad por métricas de CX en todos los niveles</li>
                <li>• Comunicar resultados regularmente a la organización</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default CXTnps;
