import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Corporate Business Cards",
      category: "Business Cards",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Premium business cards with foil stamping and embossing",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      title: "Restaurant Menu Design",
      category: "Brochures",
      image: "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Elegant tri-fold menu with food photography",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      title: "Event Promotional Banner",
      category: "Banners",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Large format outdoor banner for music festival",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      title: "Product Packaging",
      category: "Packaging",
      image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom packaging design for cosmetic brand",
      gradient: "from-amber-600 to-yellow-500"
    },
    {
      title: "Corporate Event Setup",
      category: "Events",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete corporate event management and setup",
      gradient: "from-yellow-600 to-orange-500"
    },
    {
      title: "Custom T-Shirt Design",
      category: "Apparel",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Screen printed promotional t-shirts",
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Our <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our finest work across various printing and event categories. Each project represents 
            our commitment to quality and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-90 transition-all duration-300`}>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{item.description}</p>
                  <button className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors">
                    <span className="font-medium">View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;