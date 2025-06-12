import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">Trusted by 500+ businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Printing</span> Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your ideas into stunning prints. From business cards to large format banners, 
              we deliver exceptional quality with lightning-fast turnaround times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/262370/pexels-photo-262370.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional printing equipment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;