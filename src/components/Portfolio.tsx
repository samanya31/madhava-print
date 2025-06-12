import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Corporate Business Cards",
      category: "Business Cards",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Premium business cards with foil stamping and embossing"
    },
    {
      title: "Restaurant Menu Design",
      category: "Brochures",
      image: "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Elegant tri-fold menu with food photography"
    },
    {
      title: "Event Promotional Banner",
      category: "Banners",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Large format outdoor banner for music festival"
    },
    {
      title: "Product Packaging",
      category: "Packaging",
      image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom packaging design for cosmetic brand"
    },
    {
      title: "Corporate Brochure",
      category: "Marketing",
      image: "https://images.pexels.com/photos/8052786/pexels-photo-8052786.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional company profile brochure"
    },
    {
      title: "Custom T-Shirt Design",
      category: "Apparel",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Screen printed promotional t-shirts"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our finest work across various printing categories. Each project represents 
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-xs bg-blue-600 px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                  <button className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors">
                    <span className="font-medium">View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;