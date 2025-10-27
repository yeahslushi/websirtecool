import React from 'react';
import { Cloud, Mail, MessageCircle, Twitter, Github, Disc } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BlueSkyes Cloud Hosting</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Premium Minecraft server hosting with enterprise-grade performance, 24/7 support, and cutting-edge technology. 
              Scale from small SMPs to massive networks with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Disc className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors">RAM Calculator</a></li>
              <li><a href="#plans" className="text-gray-300 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge Base</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@blueskyes.com" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@blueskyes.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Live Chat</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Server Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BlueSkyes Cloud Hosting. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Powered by enterprise-grade infrastructure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}