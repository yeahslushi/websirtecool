import React from 'react';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Dirt',
    description: 'Perfect for velocity servers.',
    price: 2.00,
    ram: 1,
    link: 'https://billing.blueskyes.com/dirt-plan',
    features: [
      '0.7 VCores',
      '1GB DDR4 RAM',
      '3GB NVMe SSD Storage',
      'Up to 5 Recommended players',
      'Basic DDoS protection',
      '99.5% uptime SLA',
      'One-click network manager',
      'Dedicated IP Address'
    ],
    popular: false,
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Copper',
    description: 'Good for small smps',
    price: 7.25,
    ram: 4,
    link: 'https://billing.blueskyes.com/copper-plan',
    features: [
      '1 VCore',
      '4GB DDR4 RAM',
      '6GB NVMe SSD Storage',
      'Up to 10 Recommended players',
      'Advanced DDoS protection',
      '99.5% uptime SLA',
      'Basic Staff Support',
      'One-click network manager',
      'Dedicated IP Address',
      'Advanced startup section'
    ],
    popular: false,
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'Gold',
    description: 'Great for small modded servers!',
    price: 10.50,
    ram: 6,
    link: 'https://billing.blueskyes.com/gold-plan',
    features: [
      '1.2 VCores',
      '6GB DDR5 RAM',
      'Unmetered NVMe SSD Storage',
      'Up to 20 Recommended players',
      'Advanced DDoS protection',
      '99.5% uptime SLA',
      '24/7 Staff Support',
      '12 Allocations',
      '8 Backups',
      'One-click network manager',
      'Dedicated IP Address',
      'Advanced startup section'
    ],
    popular: true,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Diamond',
    description: 'Outstanding power for medium sized smps and economy servers.',
    price: 12.60,
    ram: 8,
    link: 'https://billing.blueskyes.com/diamond-plan',
    features: [
      '1.5 VCores',
      '8GB DDR5 RAM',
      'Unmetered NVMe SSD Storage',
      'Up to 30 Recommended players',
      'Enterprise DDoS protection',
      '99.5% uptime SLA',
      '24/7 Staff Support',
      '17 Allocations',
      '10 Backups',
      'One-click network manager',
      'Dedicated IP Address',
      'Advanced startup section'
    ],
    popular: false,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Tier 1',
    description: 'Perfect for big smps who need enterprise power.',
    price: 16.60,
    ram: 12,
    link: 'https://billing.blueskyes.com/tier1-plan',
    features: [
      '3 VCores',
      '12GB DDR5 RAM',
      'Unmetered NVMe SSD Storage',
      'Up to 40 Recommended players',
      'Enterprise DDoS protection + SAIG',
      '99.5% uptime SLA',
      '24/7 Staff Support',
      '25 Allocations',
      '15 Backups',
      'One-click network manager',
      'Dedicated IP Address',
      'AI Management',
      'Advanced startup section'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Tier 2',
    description: 'Enterprise power for the biggest servers out there.',
    price: 27.00,
    ram: 15,
    link: 'https://billing.blueskyes.com/tier2-plan',
    features: [
      '5.5 VCores',
      '15GB DDR5 RAM',
      'Unmetered NVMe SSD Storage',
      'Up to 60+ Recommended players',
      'Enterprise DDoS protection + SAIG',
      '99.5% uptime SLA',
      '24/7 Staff Support',
      '40 Allocations',
      '25 Backups',
      'One-click network manager',
      'Dedicated IP Address',
      'AI Management',
      'Advanced startup section'
    ],
    popular: false,
    color: 'from-indigo-500 to-purple-600'
  }
];

export default function PricingPlans() {
  return (
    <section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From small SMPs to massive networks, we have the perfect hosting solution for every server size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => window.open(plan.link, '_blank')}>
                <div className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}