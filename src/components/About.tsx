import React from 'react';
import { Award, Clock, Users, Shield, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "10K+", label: "Projects Completed" },
    { icon: Clock, number: "24hr", label: "Quick Turnaround" },
    { icon: Shield, number: "100%", label: "Quality Guarantee" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Lightning-fast turnaround times without compromising on quality standards."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "State-of-the-art equipment and premium materials for exceptional results."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Dedicated customer service and support throughout your printing journey."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Madhav Print</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2020, Madhav Print has been the trusted partner for businesses seeking 
              exceptional printing solutions. We combine cutting-edge technology with 
              traditional craftsmanship to deliver results that exceed expectations.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our team of skilled professionals works tirelessly to ensure every project, 
              from the smallest business card to the largest banner, meets our rigorous 
              quality standards and your complete satisfaction.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
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
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl opacity-20"></div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-8 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">24hr Service</div>
                  <div className="text-xs text-gray-600">Express Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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