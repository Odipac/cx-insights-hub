
import { BookOpen, FileText, Video, ExternalLink, Download } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const Resources = () => {
  const resources = [
    {
      category: 'Best Practice Guides',
      icon: BookOpen,
      items: [
        {
          title: 'Contact Center Optimization Handbook',
          description: 'Comprehensive guide to improving contact center performance',
          type: 'PDF Guide',
          action: 'Download'
        },
        {
          title: 'KPI Benchmarking Report 2024',
          description: 'Industry benchmarks and performance standards',
          type: 'Research Report',
          action: 'Download'
        },
        {
          title: 'AI Implementation Framework',
          description: 'Step-by-step approach to deploying AI in contact centers',
          type: 'Framework',
          action: 'Download'
        }
      ]
    },
    {
      category: 'Training Materials',
      icon: Video,
      items: [
        {
          title: 'CX Metrics Masterclass',
          description: 'In-depth training on customer experience measurement',
          type: 'Video Series',
          action: 'Watch Now'
        },
        {
          title: 'tNPS Implementation Workshop',
          description: 'Hands-on workshop for implementing transactional NPS',
          type: 'Interactive Course',
          action: 'Start Course'
        },
        {
          title: 'AI Tools for Contact Centers',
          description: 'Overview of AI technologies and their applications',
          type: 'Webinar',
          action: 'View Recording'
        }
      ]
    },
    {
      category: 'Templates & Tools',
      icon: FileText,
      items: [
        {
          title: 'KPI Dashboard Template',
          description: 'Ready-to-use dashboard template for key metrics',
          type: 'Excel Template',
          action: 'Download'
        },
        {
          title: 'Customer Survey Templates',
          description: 'Pre-built surveys for CSAT, NPS, and CES measurement',
          type: 'Survey Templates',
          action: 'Download'
        },
        {
          title: 'ROI Calculator for AI Initiatives',
          description: 'Calculate potential return on AI investments',
          type: 'Calculator Tool',
          action: 'Use Tool'
        }
      ]
    }
  ];

  const externalResources = [
    {
      title: 'ICMI - International Customer Management Institute',
      description: 'Leading resource for contact center best practices and certification',
      url: 'https://www.icmi.com'
    },
    {
      title: 'Contact Center Pipeline',
      description: 'Industry news, trends, and analysis for contact center professionals',
      url: 'https://www.contactcenterpipeline.com'
    },
    {
      title: 'Customer Experience Professionals Association',
      description: 'Global network of CX professionals sharing knowledge and best practices',
      url: 'https://www.cxpa.org'
    },
    {
      title: 'Forrester Research - Customer Service',
      description: 'Research and insights on customer service trends and technologies',
      url: 'https://www.forrester.com'
    }
  ];

  const faqItems = [
    {
      question: 'What is the ideal frequency for measuring tNPS?',
      answer: 'tNPS should be measured after every customer interaction or at least weekly for meaningful trend analysis. The key is consistency and ensuring you have sufficient sample sizes for statistical significance.'
    },
    {
      question: 'How do I calculate ROI for AI implementations?',
      answer: 'Calculate ROI by comparing implementation costs (software, training, integration) against benefits (reduced labor costs, improved efficiency, increased customer satisfaction). Typical payback periods range from 6-18 months.'
    },
    {
      question: 'What is the most important KPI for contact centers?',
      answer: 'While all KPIs are important, First Call Resolution (FCR) often has the highest correlation with customer satisfaction and operational efficiency. Focus on improving FCR to see improvements across multiple metrics.'
    },
    {
      question: 'How can small contact centers implement AI on a budget?',
      answer: 'Start with cloud-based AI solutions that offer pay-as-you-use pricing. Begin with chatbots for common inquiries, then gradually expand to speech analytics and predictive routing as you see ROI.'
    },
    {
      question: 'What are the key challenges in implementing AI?',
      answer: 'Common challenges include data quality issues, integration complexity, change management, and ensuring AI decisions are explainable. Start with pilot programs and focus on comprehensive training.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources to help you optimize your contact center performance
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
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
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
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
