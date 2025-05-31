
import { Heart, TrendingUp, Users, MessageSquare, Award, Target } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const CXTnps = () => {
  const cxMetrics = [
    {
      title: 'Customer Effort Score (CES)',
      icon: Target,
      description: 'Measures how easy it was for customers to get their issue resolved',
      scale: '1-7 scale (1 = very difficult, 7 = very easy)',
      target: '5.5+',
      improvements: [
        'Simplify processes and reduce steps',
        'Improve self-service options',
        'Enhance agent training on efficiency',
        'Implement better knowledge management'
      ]
    },
    {
      title: 'Net Promoter Score (NPS)',
      icon: Heart,
      description: 'Measures customer loyalty and likelihood to recommend',
      scale: '0-10 scale (9-10 = Promoters, 7-8 = Passives, 0-6 = Detractors)',
      target: '50+',
      improvements: [
        'Focus on exceeding customer expectations',
        'Implement proactive customer outreach',
        'Address detractor feedback quickly',
        'Create loyalty programs and incentives'
      ]
    },
    {
      title: 'Customer Satisfaction (CSAT)',
      icon: Award,
      description: 'Overall satisfaction with the service experience',
      scale: '1-5 scale or percentage satisfaction',
      target: '85%+',
      improvements: [
        'Personalize customer interactions',
        'Reduce wait times and response delays',
        'Improve first call resolution rates',
        'Enhance agent soft skills training'
      ]
    }
  ];

  const tnpsStrategies = [
    {
      phase: 'Measure',
      icon: TrendingUp,
      actions: [
        'Implement post-interaction surveys',
        'Set up regular tNPS tracking cycles',
        'Establish baseline measurements',
        'Create segmented analysis by channel, agent, and issue type'
      ]
    },
    {
      phase: 'Analyze',
      icon: MessageSquare,
      actions: [
        'Identify key drivers of satisfaction/dissatisfaction',
        'Correlate tNPS with operational metrics',
        'Analyze verbatim feedback for insights',
        'Benchmark against industry standards'
      ]
    },
    {
      phase: 'Improve',
      icon: Users,
      actions: [
        'Address specific pain points identified',
        'Implement targeted training programs',
        'Redesign problematic processes',
        'Close the loop with customers who provided feedback'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Experience & Transactional NPS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding and improving customer satisfaction through strategic measurement and optimization
          </p>
        </div>

        {/* CX Metrics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key CX Metrics</h2>
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
                      <span className="text-sm font-medium text-gray-700">Scale:</span>
                      <p className="text-sm text-gray-600">{metric.scale}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Target:</span>
                      <span className="text-sm text-gray-900 ml-2 font-semibold">{metric.target}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Improvement Strategies:</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transactional NPS Strategy</h2>
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
          <h2 className="text-2xl font-bold mb-6">CX Improvement Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Survey Design</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Keep surveys short and focused (2-3 questions max)</li>
                <li>• Ask the NPS question first to avoid bias</li>
                <li>• Include an open-ended question for context</li>
                <li>• Time surveys appropriately after interactions</li>
                <li>• Use multiple channels for survey distribution</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Action Planning</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Respond to detractors within 24-48 hours</li>
                <li>• Share positive feedback with relevant teams</li>
                <li>• Track improvement initiatives and their impact</li>
                <li>• Create accountability for CX metrics at all levels</li>
                <li>• Regularly communicate results to the organization</li>
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
