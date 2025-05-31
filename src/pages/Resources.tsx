
import { BookOpen, FileText, Video, ExternalLink, Download } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const Resources = () => {
  const resources = [
    {
      category: 'Guías de Mejores Prácticas',
      icon: BookOpen,
      items: [
        {
          title: 'Manual de Optimización de Contact Center',
          description: 'Guía completa para mejorar el rendimiento del contact center',
          type: 'Guía PDF',
          action: 'Descargar'
        },
        {
          title: 'Reporte de Benchmarking de KPIs 2024',
          description: 'Benchmarks de la industria y estándares de rendimiento',
          type: 'Reporte de Investigación',
          action: 'Descargar'
        },
        {
          title: 'Marco de Implementación de IA',
          description: 'Enfoque paso a paso para desplegar IA en contact centers',
          type: 'Marco de Trabajo',
          action: 'Descargar'
        }
      ]
    },
    {
      category: 'Materiales de Entrenamiento',
      icon: Video,
      items: [
        {
          title: 'Masterclass de Métricas de CX',
          description: 'Entrenamiento profundo en medición de experiencia del cliente',
          type: 'Serie de Videos',
          action: 'Ver Ahora'
        },
        {
          title: 'Taller de Implementación de tNPS',
          description: 'Taller práctico para implementar NPS transaccional',
          type: 'Curso Interactivo',
          action: 'Iniciar Curso'
        },
        {
          title: 'Herramientas de IA para Contact Centers',
          description: 'Visión general de tecnologías de IA y sus aplicaciones',
          type: 'Webinar',
          action: 'Ver Grabación'
        }
      ]
    },
    {
      category: 'Plantillas y Herramientas',
      icon: FileText,
      items: [
        {
          title: 'Plantilla de Dashboard de KPIs',
          description: 'Plantilla lista para usar para métricas clave',
          type: 'Plantilla Excel',
          action: 'Descargar'
        },
        {
          title: 'Plantillas de Encuestas de Cliente',
          description: 'Encuestas pre-construidas para medición de CSAT, NPS y CES',
          type: 'Plantillas de Encuesta',
          action: 'Descargar'
        },
        {
          title: 'Calculadora de ROI para Iniciativas de IA',
          description: 'Calcula el retorno potencial de inversiones en IA',
          type: 'Herramienta Calculadora',
          action: 'Usar Herramienta'
        }
      ]
    }
  ];

  const externalResources = [
    {
      title: 'ICMI - Instituto Internacional de Gestión de Clientes',
      description: 'Recurso líder para mejores prácticas y certificación de contact center',
      url: 'https://www.icmi.com'
    },
    {
      title: 'Contact Center Pipeline',
      description: 'Noticias de la industria, tendencias y análisis para profesionales de contact center',
      url: 'https://www.contactcenterpipeline.com'
    },
    {
      title: 'Asociación de Profesionales de Experiencia del Cliente',
      description: 'Red global de profesionales de CX compartiendo conocimiento y mejores prácticas',
      url: 'https://www.cxpa.org'
    },
    {
      title: 'Forrester Research - Servicio al Cliente',
      description: 'Investigación e insights sobre tendencias y tecnologías de servicio al cliente',
      url: 'https://www.forrester.com'
    }
  ];

  const faqItems = [
    {
      question: '¿Cuál es la frecuencia ideal para medir tNPS?',
      answer: 'tNPS debe medirse después de cada interacción con el cliente o al menos semanalmente para un análisis de tendencias significativo. La clave es la consistencia y asegurar tamaños de muestra suficientes para significancia estadística.'
    },
    {
      question: '¿Cómo calculo el ROI para implementaciones de IA?',
      answer: 'Calcula el ROI comparando costos de implementación (software, entrenamiento, integración) contra beneficios (costos de mano de obra reducidos, eficiencia mejorada, satisfacción del cliente aumentada). Los períodos típicos de recuperación van de 6-18 meses.'
    },
    {
      question: '¿Cuál es el KPI más importante para contact centers?',
      answer: 'Aunque todos los KPIs son importantes, la Resolución en Primera Llamada (FCR) a menudo tiene la correlación más alta con satisfacción del cliente y eficiencia operacional. Enfócate en mejorar FCR para ver mejoras en múltiples métricas.'
    },
    {
      question: '¿Cómo pueden los contact centers pequeños implementar IA con presupuesto limitado?',
      answer: 'Comienza con soluciones de IA en la nube que ofrecen precios por uso. Comienza con chatbots para consultas comunes, luego expande gradualmente a analítica de voz y enrutamiento predictivo conforme veas ROI.'
    },
    {
      question: '¿Cuáles son los desafíos clave en implementar IA?',
      answer: 'Los desafíos comunes incluyen problemas de calidad de datos, complejidad de integración, gestión del cambio y asegurar que las decisiones de IA sean explicables. Comienza con programas piloto y enfócate en entrenamiento integral.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recursos y Documentación</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos integrales para ayudarte a optimizar el rendimiento de tu contact center
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12 mb-16">
          {resources.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 ml-4">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.type}</span>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          {item.action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* External Resources */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos Externos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 flex items-center text-sm font-medium"
                >
                  Visitar Sitio Web
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default Resources;
