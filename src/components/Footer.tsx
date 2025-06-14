import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const services = [
    "Corporate Events", "Printing & Signage", "BTL & ATL Promotions", "OOH Advertising",
    "Inshop & Store Branding", "Mall Decoration & Activations", "Manpower Management", "Conference & Gala Nights", "Corporate Gifting"
  ];

  const quickLinks = [
    "About Us", "Our Services", "Portfolio", "Pricing", "FAQ", "Career", "Blog", "Contact"
  ];

  const socialLinks = [
    { icon: Facebook, gradient: "from-amber-600 to-yellow-700", hover: "hover:from-amber-700 hover:to-yellow-800" },
    { icon: Twitter, gradient: "from-yellow-500 to-orange-600", hover: "hover:from-yellow-600 hover:to-orange-700" },
    { icon: Instagram, gradient: "from-orange-500 to-amber-500", hover: "hover:from-orange-600 hover:to-amber-600" },
    { icon: Linkedin, gradient: "from-amber-700 to-yellow-800", hover: "hover:from-amber-800 hover:to-yellow-900" }
  ];

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-amber-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-5 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Madhava Print & Events</h1>
                <p className="text-sm text-stone-400">Professional Printing & Events</p>
              </div>
            </div>
            
            <p className="text-stone-400 mb-6 leading-relaxed">
              Your trusted partner for high-quality printing solutions and memorable events. From concept to completion, 
              we bring your ideas to life with precision and care.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href="#" className={`w-10 h-10 bg-gradient-to-r ${social.gradient} ${social.hover} rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110`}>
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-stone-400">123 Print Street</p>
                  <p className="text-stone-400">Business District</p>
                  <p className="text-stone-400">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <a href="tel:+919876543210" className="text-stone-400 hover:text-white transition-colors">
                    +91 9876543210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <div>
                  <a href="mailto:info@madhavaprint.com" className="text-stone-400 hover:text-white transition-colors">
                    info@madhavaprint.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-xl border border-amber-500/20">
              <h4 className="font-semibold mb-2 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Business Hours</h4>
              <p className="text-sm text-stone-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-sm text-stone-400">Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-stone-400">
              <span>© 2024 Madhava Print & Events. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-stone-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-amber-500 fill-current animate-pulse" />
              <span>for quality printing & events</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;