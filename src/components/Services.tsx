import React from 'react';
import { Calendar, Printer, Megaphone, Keyboard as Billboard, Store, ShoppingBag, Users, PartyPopper, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Complete event management solutions from planning to execution, creating memorable corporate experiences.",
      features: ["Event Planning", "Venue Management", "Audio Visual Setup"],
      image: "/cop event.webp",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      icon: Printer,
      title: "Printing & Signage",
      description: "High-quality printing services and professional signage solutions for all your business needs.",
      features: ["Digital Printing", "Offset Printing", "Custom Signage"],
      image: "/ott.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Megaphone,
      title: "BTL & ATL Promotions",
      description: "Strategic below-the-line and above-the-line promotional campaigns to boost your brand visibility.",
      features: ["Campaign Strategy", "Brand Activation", "Media Planning"],
      image: "/btl.jpg",
      gradient: "from-yellow-600 to-amber-600"
    },
    {
      icon: Billboard,
      title: "OOH Advertising",
      description: "Out-of-home advertising solutions including billboards, van branding, rickshaw ads, and wall paintings.",
      features: ["Billboard Advertising", "Vehicle Branding", "Wall Paintings"],
      image: "/billboard.jpg",
      gradient: "from-amber-600 to-yellow-500"
    },
    {
      icon: Store,
      title: "Inshop & Store Branding",
      description: "Complete retail branding solutions to enhance your store's visual appeal and customer experience.",
      features: ["Store Design", "Visual Merchandising", "Brand Implementation"],
      image: "/inshop.jpg",
      gradient: "from-yellow-600 to-amber-500"
    },
    {
      icon: ShoppingBag,
      title: "Mall Decoration & Activations",
      description: "Creative mall decorations and brand activations to attract customers and create engaging experiences.",
      features: ["Mall Decorations", "Brand Activations", "Interactive Displays"],
      image: "/mALL.jpg",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Manpower Management",
      description: "Professional manpower solutions for events, promotions, and ongoing business operations.",
      features: ["Event Staff", "Promotional Teams", "Skilled Personnel"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      icon: PartyPopper,
      title: "Conference & Gala Nights",
      description: "Elegant conference setups and spectacular gala night events with complete production management.",
      features: ["Conference Setup", "Gala Production", "Entertainment Management"],
      image: "/conf.jpg",
      gradient: "from-amber-600 to-orange-500"
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Thoughtfully curated corporate gifts and promotional items to strengthen business relationships.",
      features: ["Custom Gifts", "Branded Merchandise", "Bulk Orders"],
      image: "/coorporate.jpg",
      gradient: "from-yellow-600 to-amber-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Our <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From corporate events to comprehensive branding solutions, we provide end-to-end services 
            to elevate your business presence and create lasting impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-stone-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-stone-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-stone-600 flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-900 hover:to-stone-800 text-amber-100 py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;