import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    quantity: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      quantity: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 8765432109"],
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@madhavaprint.com", "orders@madhavaprint.com"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Print Street, Business District", "Mumbai, Maharashtra 400001"],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      gradient: "from-amber-600 to-yellow-600"
    }
  ];

  const services = [
    "Corporate Events",
    "Printing & Signage",
    "BTL & ATL Promotions",
    "OOH Advertising",
    "Inshop & Store Branding",
    "Mall Decoration & Activations",
    "Manpower Management",
    "Conference & Gala Nights",
    "Corporate Gifting"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-15 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Contact us for a free quote or consultation. 
            Our team is here to help you with all your printing and event needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-stone-300 mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-stone-200">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">Request a Quote</h3>
              
              {isSubmitted && (
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                  <span className="text-amber-800 font-medium">Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="e.g., 500 business cards, 100 guests event"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Please describe your printing or event requirements, timeline, special instructions, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Quote Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;