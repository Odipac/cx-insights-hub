
import { ArrowRight, BarChart3, Users, Brain, Target, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'KPIs & Metrics',
      description: 'Comprehensive guide to essential contact center performance indicators and benchmarks',
      link: '/kpis'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Master CX metrics including tNPS, CSAT, and CES with proven improvement strategies',
      link: '/cx-tnps'
    },
    {
      icon: Brain,
      title: 'AI Technologies',
      description: 'Explore cutting-edge AI solutions and their transformative impact on contact centers',
      link: '/ai-insights'
    }
  ];

  const stats = [
    { value: '40-60%', label: 'Reduction in routine inquiries with AI', icon: TrendingUp },
    { value: '25-35%', label: 'Improvement in FCR rates', icon: Target },
    { value: '85%+', label: 'Target CSAT score', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Optimize Your
              <span className="block text-gray-300">Contact Center Performance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert guidance on KPIs, customer experience metrics, and AI technologies to transform your contact center operations and deliver exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kpis"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Explore KPIs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-insights"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                Discover AI Solutions
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Contact Center Guidance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to measure, analyze, and improve your contact center performance
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
                    Learn More
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Contact Center?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get personalized guidance and answers to your specific challenges with our AI-powered assistant
          </p>
          <p className="text-gray-300 mb-8">
            Click the chat button in the bottom right corner to start a conversation with our contact center expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Resources
            </Link>
            <Link
              to="/cx-tnps"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn About tNPS
            </Link>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Index;
