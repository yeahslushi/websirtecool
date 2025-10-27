import React, { useState, useEffect } from 'react';
import { Calculator, Users, Cpu, HardDrive, Wifi, Zap, ArrowRight } from 'lucide-react';

export default function RamCalculator() {
  const [players, setPlayers] = useState(10);
  const [serverType, setServerType] = useState('vanilla');
  const [pluginCount, setPluginCount] = useState(0);
  
  // New RAM calculation logic based on your specifications
  const calculateRAM = () => {
    let baseRAM = 2; // Start with 2GB minimum
    
    // Player-based RAM calculation
    if (players <= 5) baseRAM = 2;
    else if (players <= 7) baseRAM = 3;
    else if (players <= 10) baseRAM = 4;
    else if (players <= 14) baseRAM = 5;
    else if (players <= 16) baseRAM = 6;
    else if (players <= 30) baseRAM = 8;
    else if (players <= 36) baseRAM = 10;
    else baseRAM = 16;
    
    // Plugin/mod overhead
    const pluginRAM = Math.ceil(pluginCount * 0.15);
    
    // Server type multiplier
    const serverTypeMultiplier = {
      vanilla: 1,
      paper: 1.1,
      forge: 1.6,
      fabric: 1.2
    };
    
    const totalRAM = Math.ceil((baseRAM + pluginRAM) * serverTypeMultiplier[serverType]);
    return Math.max(totalRAM, 2); // Minimum 2GB
  };
  
  const totalRAM = calculateRAM();
  
  // Get world size and plugin limits based on RAM
  const getSpecs = (ram) => {
    if (ram <= 2) return { players: 5, worldSize: '8GB', plugins: 5 };
    if (ram <= 3) return { players: 7, worldSize: '5GB', plugins: 9 };
    if (ram <= 4) return { players: 10, worldSize: 'Unlimited', plugins: 12 };
    if (ram <= 5) return { players: 14, worldSize: 'Unlimited', plugins: 15 };
    if (ram <= 6) return { players: 16, worldSize: 'Unlimited', plugins: 22 };
    if (ram <= 8) return { players: '30+', worldSize: 'Unlimited', plugins: 30 };
    if (ram <= 10) return { players: '36+', worldSize: 'Unlimited', plugins: '42+' };
    return { players: '50+', worldSize: 'Unlimited', plugins: '60+' };
  };
  
  const currentSpecs = getSpecs(totalRAM);
  
  const serverTypeDescriptions = {
    vanilla: 'Pure Minecraft experience without any modifications.',
    paper: 'Optimized server with basic plugin support.',
    forge: 'Run your favorite modpacks and custom mods.',
    fabric: 'Lightweight mod loader with great performance.'
  };

  const getRecommendedPlan = () => {
    if (totalRAM <= 1) return { name: 'Dirt', price: 2.00, ram: '1GB', link: 'https://billing.blueskyes.com/dirt-plan' };
    if (totalRAM <= 4) return { name: 'Copper', price: 7.25, ram: '4GB', link: 'https://billing.blueskyes.com/copper-plan' };
    if (totalRAM <= 6) return { name: 'Gold', price: 10.50, ram: '6GB', link: 'https://billing.blueskyes.com/gold-plan' };
    if (totalRAM <= 8) return { name: 'Diamond', price: 12.60, ram: '8GB', link: 'https://billing.blueskyes.com/diamond-plan' };
    if (totalRAM <= 12) return { name: 'Tier 1', price: 16.60, ram: '12GB', link: 'https://billing.blueskyes.com/tier1-plan' };
    return { name: 'Tier 2', price: 27.00, ram: '15GB', link: 'https://billing.blueskyes.com/tier2-plan' };
  };
  
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <section id="calculator" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            RAM Calculator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the perfect server configuration for your needs with our intelligent RAM calculator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Server Configuration</h3>
            </div>

            {/* Server Type */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">Server Type</label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(serverTypeDescriptions).map(([type, description]) => (
                  <button
                    key={type}
                    onClick={() => setServerType(type)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      serverType === type
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white capitalize mb-1">{type}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Expected Players */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Expected Players: <span className="text-blue-600 dark:text-blue-400">{players}</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={players}
                  onChange={(e) => setPlayers(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Plugin Count */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Number of Plugins: <span className="text-purple-600 dark:text-purple-400">{pluginCount}</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={pluginCount}
                  onChange={(e) => setPluginCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>0</span>
                  <span>12</span>
                  <span>25</span>
                  <span>37</span>
                  <span>50+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* RAM Breakdown */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">RAM Usage Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Base Server</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2GB</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Player Allocation</span>
                  <span className="font-semibold text-gray-900 dark:text-white">+{(totalRAM - 2).toFixed(1)}GB</span>
                </div>
                {pluginCount > 0 && (
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">Plugins</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Included</span>
                  </div>
                )}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Required</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalRAM}GB</span>
                </div>
              </div>
            </div>

            {/* Server Specifications */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Server Specifications</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">Player Slots</span>
                  </div>
                  <span className="text-green-600 font-bold">Up to {currentSpecs.players}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-3">
                    <HardDrive className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">World Size</span>
                  </div>
                  <span className="text-blue-600 font-bold">{currentSpecs.worldSize}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">Plugins/Mods</span>
                  </div>
                  <span className="text-purple-600 font-bold">Up to {currentSpecs.plugins}</span>
                </div>
              </div>
            </div>

            {/* Hardware Specs */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Hardware Specifications</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Processor</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AMD Ryzen 7600</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Up to 5.1 GHz</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <HardDrive className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Memory</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">DDR5 RAM</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">6000-7200MHz</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <HardDrive className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Storage</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Enterprise NVMe</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Ultra-fast SSD</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Wifi className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Network</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Unmetered</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">High-speed</div>
                </div>
              </div>
            </div>

            {/* Recommended Plan */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Recommended Plan</h3>
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold">{recommendedPlan.name}</h4>
                    <p className="text-white/80">Perfect for up to {players} players</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${recommendedPlan.price}</div>
                    <div className="text-white/80">/month</div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span>Requires {totalRAM}GB RAM</span>
                  <span>Optimized for {serverType.charAt(0).toUpperCase() + serverType.slice(1)}</span>
                </div>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open(recommendedPlan.link, '_blank')}
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                  <button 
                    onClick={scrollToPlans}
                    className="w-full bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    View All Plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}