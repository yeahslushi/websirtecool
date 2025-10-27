import React from 'react';
import { Shield, Zap, Clock, Headphones, Database, Globe, Settings, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced DDoS protection with SAIG technology keeps your server safe from attacks and ensures stable gameplay.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'AMD Ryzen 7600 processors up to 5.1 GHz with DDR5 RAM and enterprise NVMe storage for unmatched speed.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Clock,
    title: '99.5% Uptime SLA',
    description: 'Guaranteed uptime with redundant infrastructure and automatic failover to keep your players connected.',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Professional technical support team available around the clock to help you with any issues or questions.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Database,
    title: 'Automatic Backups',
    description: 'Multiple daily backups with one-click restore functionality ensure your world data is always safe.',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Multiple datacenter locations worldwide with low-latency connections for the best player experience.',
    color: 'from-teal-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'Intuitive control panel with one-click installers, mod support, and advanced configuration options.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    title: 'AI-Powered Optimization',
    description: 'Intelligent server optimization with AI management for Tier 1+ plans to maximize performance automatically.',
    color: 'from-pink-500 to-rose-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose BlueSkyes?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our cutting-edge hosting platform designed specifically for Minecraft servers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Server?</h3>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust BlueSkyes for their Minecraft hosting needs. 
                Get started in minutes with our simple setup process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                >
                  Start Free Trial
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}