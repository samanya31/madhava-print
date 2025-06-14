import React from 'react';
import { Award, Clock, Users, Shield, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", gradient: "from-amber-500 to-yellow-500" },
    { icon: Award, number: "10K+", label: "Projects Completed", gradient: "from-yellow-500 to-orange-500" },
    { icon: Clock, number: "24hr", label: "Quick Turnaround", gradient: "from-orange-500 to-amber-500" },
    { icon: Shield, number: "100%", label: "Quality Guarantee", gradient: "from-amber-600 to-yellow-600" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Lightning-fast turnaround times without compromising on quality standards.",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "State-of-the-art equipment and premium materials for exceptional results.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Dedicated customer service and support throughout your printing and event journey.",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              About <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">Madhava Print & Events</span>
            </h2>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Since 2015, Madhava Print & Events has been the trusted partner for businesses seeking 
              exceptional printing solutions and memorable event experiences. We combine cutting-edge technology with 
              traditional craftsmanship to deliver results that exceed expectations.
            </p>
            
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Our team of skilled professionals works tirelessly to ensure every project, 
              from the smallest business card to the grandest corporate event, meets our rigorous 
              quality standards and your complete satisfaction.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-10">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-2">{value.title}</h3>
                      <p className="text-sm text-stone-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Printing facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-2xl opacity-30"></div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-amber-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-stone-800">ISO Certified</div>
                  <div className="text-xs text-stone-600">Quality Assured</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-8 bg-white rounded-xl p-4 shadow-xl border border-yellow-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-stone-800">24hr Service</div>
                  <div className="text-xs text-stone-600">Express Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-stone-800 mb-2">{stat.number}</div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;