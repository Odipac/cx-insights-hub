
import { Brain, Zap, TrendingUp, Shield, MessageSquare, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const AIInsights = () => {
  const aiTechnologies = [
    {
      name: 'IA Conversacional',
      icon: MessageSquare,
      description: 'Chatbots y asistentes virtuales impulsados por IA que manejan consultas rutinarias',
      benefits: [
        'Disponibilidad 24/7 para soporte al cliente',
        'Respuesta instantánea a preguntas comunes',
        'Reduce carga de trabajo de agentes en 40-60%',
        'Calidad de servicio consistente'
      ],
      implementation: 'Desplegar en sitio web, aplicación móvil y plataformas de mensajería'
    },
    {
      name: 'Análisis de Sentimientos',
      icon: Brain,
      description: 'Análisis en tiempo real de emociones del cliente durante interacciones',
      benefits: [
        'Identificar riesgos de escalación temprano',
        'Mejorar oportunidades de coaching de agentes',
        'Monitoreo de calidad mejorado',
        'Mejor predicción de satisfacción del cliente'
      ],
      implementation: 'Integrar con sistemas de grabación de llamadas y chat'
    },
    {
      name: 'Analítica Predictiva',
      icon: TrendingUp,
      description: 'Pronosticar comportamiento del cliente, patrones de demanda y necesidades operacionales',
      benefits: [
        'Personal y horarios optimizados',
        'Alcance proactivo al cliente',
        'Churn reducido a través de intervención temprana',
        'Asignación de recursos mejorada'
      ],
      implementation: 'Analizar datos históricos e implementar modelos ML'
    },
    {
      name: 'Analítica de Voz',
      icon: BarChart,
      description: 'Análisis automatizado de interacciones de voz para insights y cumplimiento',
      benefits: [
        'Monitoreo 100% de llamadas vs. muestreo tradicional',
        'Verificación automática de cumplimiento',
        'Identificación de tendencias en interacciones',
        'Insights de rendimiento de agentes'
      ],
      implementation: 'Desplegar en infraestructura existente de grabación de llamadas'
    },
    {
      name: 'Enrutamiento Inteligente',
      icon: Zap,
      description: 'Enrutamiento de clientes impulsado por IA basado en habilidades, disponibilidad y contexto',
      benefits: [
        'Resolución en primera llamada mejorada',
        'Tiempo promedio de manejo reducido',
        'Mejor coincidencia agente-cliente',
        'Satisfacción del cliente mejorada'
      ],
      implementation: 'Integrar con sistemas ACD existentes'
    },
    {
      name: 'Detección de Fraude',
      icon: Shield,
      description: 'Identificación en tiempo real de actividades potencialmente fraudulentas',
      benefits: [
        'Pérdidas financieras reducidas',
        'Protocolos de seguridad mejorados',
        'Identificación más rápida de amenazas',
        'Confianza del cliente mejorada'
      ],
      implementation: 'Desplegar en todos los puntos de contacto con el cliente'
    }
  ];

  const implementationSteps = [
    {
      phase: 'Evaluación',
      title: 'Análisis del Estado Actual',
      tasks: [
        'Evaluar infraestructura tecnológica existente',
        'Identificar puntos de dolor y oportunidades de mejora',
        'Evaluar calidad y disponibilidad de datos',
        'Definir métricas de éxito y KPIs'
      ]
    },
    {
      phase: 'Estrategia',
      title: 'Planificación de Implementación de IA',
      tasks: [
        'Priorizar casos de uso de IA basados en ROI',
        'Desarrollar hoja de ruta de implementación por fases',
        'Identificar recursos y presupuesto requeridos',
        'Planificar gestión del cambio y entrenamiento'
      ]
    },
    {
      phase: 'Piloto',
      title: 'Prueba de Concepto',
      tasks: [
        'Desplegar solución de IA en ambiente controlado',
        'Monitorear rendimiento y recopilar retroalimentación',
        'Iterar y optimizar basado en resultados',
        'Documentar lecciones aprendidas y mejores prácticas'
      ]
    },
    {
      phase: 'Escalar',
      title: 'Despliegue Completo',
      tasks: [
        'Implementar pilotos exitosos en toda la organización',
        'Integrar con sistemas y procesos existentes',
        'Entrenar personal en nuevos flujos de trabajo con IA',
        'Establecer monitoreo y optimización continua'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights y Tecnologías de IA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprovechando la inteligencia artificial para transformar operaciones de contact center y mejorar experiencias del cliente
          </p>
        </div>

        {/* AI Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiTechnologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{tech.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Beneficios Clave:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Implementación:</h4>
                    <p className="text-sm text-gray-600">{tech.implementation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hoja de Ruta de Implementación de IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <span className="bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Fase {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {step.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ROI and Impact Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Impacto y ROI de IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40-60%</div>
              <div className="text-gray-300">Reducción en consultas rutinarias manejadas por agentes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25-35%</div>
              <div className="text-gray-300">Mejora en tasas de resolución en primera llamada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20-30%</div>
              <div className="text-gray-300">Reducción en tiempo promedio de manejo</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Beneficios Operacionales</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Costos operacionales reducidos a través de automatización</li>
                <li>• Productividad y satisfacción de agentes mejorada</li>
                <li>• Escalabilidad mejorada durante períodos pico</li>
                <li>• Mejor asignación y planificación de recursos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Beneficios para el Cliente</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Tiempos de resolución más rápidos y espera reducida</li>
                <li>• Disponibilidad 24/7 para soporte</li>
                <li>• Experiencias de servicio más personalizadas</li>
                <li>• Identificación y resolución proactiva de problemas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default AIInsights;
