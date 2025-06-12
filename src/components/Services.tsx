import React from 'react';
import { CreditCard, FileText, Image, Package, Megaphone, Shirt, Calendar, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Business Cards",
      description: "Premium business cards with various finishes - matte, gloss, embossed, and foil stamping.",
      features: ["Multiple paper stocks", "Custom designs", "Fast 24hr turnaround"],
      price: "Starting ₹299"
    },
    {
      icon: FileText,
      title: "Brochures & Flyers",
      description: "Eye-catching marketing materials to promote your business and services effectively.",
      features: ["Bi-fold & tri-fold options", "High-quality printing", "Custom sizes"],
      price: "Starting ₹199"
    },
    {
      icon: Image,
      title: "Posters & Banners",
      description: "Large format printing for events, promotions, and advertising campaigns.",
      features: ["Weather resistant", "Various sizes", "Indoor & outdoor"],
      price: "Starting ₹499"
    },
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Custom packaging boxes, labels, and bags for your products and brand.",
      features: ["Custom branding", "Various materials", "Bulk discounts"],
      price: "Starting ₹149"
    },
    {
      icon: Megaphone,
      title: "Marketing Materials",
      description: "Complete marketing collateral including catalogs, newsletters, and promotional items.",
      features: ["Professional design", "High-resolution", "Bulk pricing"],
      price: "Starting ₹399"
    },
    {
      icon: Shirt,
      title: "Apparel Printing",
      description: "Custom t-shirts, uniforms, and promotional clothing with your designs.",
      features: ["Screen printing", "Digital printing", "Embroidery"],
      price: "Starting ₹299"
    },
    {
      icon: Calendar,
      title: "Stationery & Office",
      description: "Letterheads, envelopes, notepads, and complete office stationery solutions.",
      features: ["Professional layouts", "Brand consistency", "Bulk orders"],
      price: "Starting ₹199"
    },
    {
      icon: MapPin,
      title: "Signage & Display",
      description: "Indoor and outdoor signage, display boards, and exhibition materials.",
      features: ["Durable materials", "Professional mounting", "Installation service"],
      price: "Starting ₹799"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From small business cards to large format banners, we provide comprehensive printing solutions 
            with unmatched quality and competitive pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium">
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;