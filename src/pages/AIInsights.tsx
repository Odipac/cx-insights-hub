
import { Brain, Zap, TrendingUp, Shield, MessageSquare, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const AIInsights = () => {
  const aiTechnologies = [
    {
      name: 'Conversational AI',
      icon: MessageSquare,
      description: 'AI-powered chatbots and virtual assistants that handle routine inquiries',
      benefits: [
        '24/7 availability for customer support',
        'Instant response to common questions',
        'Reduces agent workload by 40-60%',
        'Consistent service quality'
      ],
      implementation: 'Deploy on website, mobile app, and messaging platforms'
    },
    {
      name: 'Sentiment Analysis',
      icon: Brain,
      description: 'Real-time analysis of customer emotions during interactions',
      benefits: [
        'Identify escalation risks early',
        'Improve agent coaching opportunities',
        'Enhanced quality monitoring',
        'Better customer satisfaction prediction'
      ],
      implementation: 'Integrate with call recording and chat systems'
    },
    {
      name: 'Predictive Analytics',
      icon: TrendingUp,
      description: 'Forecast customer behavior, demand patterns, and operational needs',
      benefits: [
        'Optimized staffing and scheduling',
        'Proactive customer outreach',
        'Reduced churn through early intervention',
        'Improved resource allocation'
      ],
      implementation: 'Analyze historical data and implement ML models'
    },
    {
      name: 'Speech Analytics',
      icon: BarChart,
      description: 'Automated analysis of voice interactions for insights and compliance',
      benefits: [
        '100% call monitoring vs. traditional sampling',
        'Automatic compliance checking',
        'Trend identification across interactions',
        'Agent performance insights'
      ],
      implementation: 'Deploy on existing call recording infrastructure'
    },
    {
      name: 'Intelligent Routing',
      icon: Zap,
      description: 'AI-driven customer routing based on skills, availability, and context',
      benefits: [
        'Improved first call resolution',
        'Reduced average handle time',
        'Better agent-customer matching',
        'Enhanced customer satisfaction'
      ],
      implementation: 'Integrate with existing ACD systems'
    },
    {
      name: 'Fraud Detection',
      icon: Shield,
      description: 'Real-time identification of potentially fraudulent activities',
      benefits: [
        'Reduced financial losses',
        'Enhanced security protocols',
        'Faster threat identification',
        'Improved customer trust'
      ],
      implementation: 'Deploy across all customer touchpoints'
    }
  ];

  const implementationSteps = [
    {
      phase: 'Assessment',
      title: 'Current State Analysis',
      tasks: [
        'Evaluate existing technology infrastructure',
        'Identify pain points and improvement opportunities',
        'Assess data quality and availability',
        'Define success metrics and KPIs'
      ]
    },
    {
      phase: 'Strategy',
      title: 'AI Implementation Planning',
      tasks: [
        'Prioritize AI use cases based on ROI',
        'Develop phased implementation roadmap',
        'Identify required resources and budget',
        'Plan change management and training'
      ]
    },
    {
      phase: 'Pilot',
      title: 'Proof of Concept',
      tasks: [
        'Deploy AI solution in controlled environment',
        'Monitor performance and gather feedback',
        'Iterate and optimize based on results',
        'Document lessons learned and best practices'
      ]
    },
    {
      phase: 'Scale',
      title: 'Full Deployment',
      tasks: [
        'Roll out successful pilots organization-wide',
        'Integrate with existing systems and processes',
        'Train staff on new AI-enhanced workflows',
        'Establish ongoing monitoring and optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Insights & Technologies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging artificial intelligence to transform contact center operations and enhance customer experiences
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
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Implementation:</h4>
                    <p className="text-sm text-gray-600">{tech.implementation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <span className="bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Phase {index + 1}
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
          <h2 className="text-2xl font-bold mb-6">AI Impact & ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40-60%</div>
              <div className="text-gray-300">Reduction in routine inquiries handled by agents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25-35%</div>
              <div className="text-gray-300">Improvement in first call resolution rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20-30%</div>
              <div className="text-gray-300">Reduction in average handle time</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Operational Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reduced operational costs through automation</li>
                <li>• Improved agent productivity and satisfaction</li>
                <li>• Enhanced scalability during peak periods</li>
                <li>• Better resource allocation and planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Faster resolution times and reduced wait</li>
                <li>• 24/7 availability for support</li>
                <li>• More personalized service experiences</li>
                <li>• Proactive issue identification and resolution</li>
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
