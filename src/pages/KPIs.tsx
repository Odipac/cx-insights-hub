
import { TrendingUp, Clock, Users, Target, Phone, Star } from 'lucide-react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';

const KPIs = () => {
  const kpis = [
    {
      name: 'First Call Resolution (FCR)',
      icon: Target,
      description: 'Percentage of customer issues resolved on the first contact',
      benchmark: '70-75%',
      improvement: 'Improve agent training, enhance knowledge base, implement better call routing'
    },
    {
      name: 'Average Handle Time (AHT)',
      icon: Clock,
      description: 'Average time spent handling a customer interaction',
      benchmark: '6-8 minutes',
      improvement: 'Streamline processes, provide better tools, optimize scripts'
    },
    {
      name: 'Service Level',
      icon: Phone,
      description: 'Percentage of calls answered within target time',
      benchmark: '80% in 20 seconds',
      improvement: 'Optimize staffing, implement callback options, improve forecasting'
    },
    {
      name: 'Customer Satisfaction (CSAT)',
      icon: Star,
      description: 'Measure of customer satisfaction with service received',
      benchmark: '85%+',
      improvement: 'Focus on soft skills training, personalize interactions, follow up on issues'
    },
    {
      name: 'Agent Utilization',
      icon: Users,
      description: 'Percentage of time agents spend on productive activities',
      benchmark: '75-85%',
      improvement: 'Optimize scheduling, reduce idle time, balance workload distribution'
    },
    {
      name: 'Call Abandonment Rate',
      icon: TrendingUp,
      description: 'Percentage of callers who hang up before reaching an agent',
      benchmark: '<5%',
      improvement: 'Reduce wait times, offer callback options, improve queue messaging'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Center KPIs & Metrics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential performance indicators to measure and optimize your contact center operations
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
                    <span className="text-sm font-medium text-gray-700">Industry Benchmark:</span>
                    <span className="text-sm text-gray-900 ml-2 font-semibold">{kpi.benchmark}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Improvement Strategies:</span>
                    <p className="text-sm text-gray-600 mt-1">{kpi.improvement}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">KPI Dashboard Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Implement live dashboards for immediate visibility</li>
                <li>• Set up automated alerts for critical thresholds</li>
                <li>• Use color-coded indicators for quick status assessment</li>
                <li>• Ensure data updates in real-time or near real-time</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Track trends over time, not just point-in-time metrics</li>
                <li>• Correlate different KPIs to understand relationships</li>
                <li>• Use historical data for forecasting and planning</li>
                <li>• Implement drill-down capabilities for detailed analysis</li>
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
