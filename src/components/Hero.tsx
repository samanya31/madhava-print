import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-amber-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-stone-300">Trusted by 500+ businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-pulse">Print & Event</span> Solutions
            </h1>
            
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Transform your ideas into stunning prints and unforgettable events. From business cards to corporate galas, 
              we deliver exceptional quality with lightning-fast turnaround times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-amber-400 bg-amber-400/10 text-amber-100 hover:bg-amber-400/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-stone-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-stone-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-stone-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/first.jpg"
                alt="Professional printing equipment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-2xl opacity-30"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;