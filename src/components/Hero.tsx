import React from 'react';
import { Server, Zap, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium Minecraft
              </span>
              <br />
              Server Hosting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience lightning-fast, reliable Minecraft server hosting with enterprise-grade hardware, 
              24/7 support, and cutting-edge performance optimization. Scale from small SMPs to massive networks.
            </p>
          </div>

          <div className="animate-fadeInUp animation-delay-200 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <Server className="h-5 w-5 group-hover:animate-pulse" />
                  <span>Start Your Server</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Plans
              </button>
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Enterprise NVMe storage with up to 5.1 GHz processors</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced DDoS protection with SAIG technology</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">99.5% Uptime</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Guaranteed uptime with redundant infrastructure</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Expert technical support whenever you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}