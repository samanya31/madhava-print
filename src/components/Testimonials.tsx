import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Restaurant Owner",
      company: "Spice Garden",
      rating: 5,
      text: "Madhava Print & Events transformed our restaurant's branding with beautiful menus and signage. The quality is exceptional and delivery was faster than promised!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Director",
      company: "Tech Solutions Inc",
      rating: 5,
      text: "We've been working with Madhava Print & Events for 3 years. Their attention to detail and customer service is unmatched. Highly recommended for corporate printing needs.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Anita Patel",
      role: "Event Planner",
      company: "Dream Events",
      rating: 5,
      text: "From wedding invitations to corporate events, Madhava Print & Events always delivers perfection. Their creative team understands our vision and brings it to life beautifully.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "Vikram Singh",
      role: "Retail Store Owner",
      company: "Fashion Hub",
      rating: 5,
      text: "The packaging solutions and promotional materials from Madhava Print & Events have significantly boosted our brand image. Professional service with competitive pricing.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      name: "Meera Joshi",
      role: "Startup Founder",
      company: "Green Earth Co",
      rating: 5,
      text: "As a startup, budget was a concern, but Madhava Print & Events offered excellent quality at affordable prices. They helped us establish our brand identity perfectly.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      name: "Arjun Mehta",
      role: "Non-Profit Director",
      company: "Hope Foundation",
      rating: 5,
      text: "Madhava Print & Events has been our go-to partner for all awareness campaigns. Their socially conscious approach and quality work make them stand out from the competition.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      gradient: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            What Our <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about 
            their experience with Madhava Print & Events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-stone-200">
              <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full border-2 border-white`}></div>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-600">{testimonial.role}</p>
                  <p className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 px-6 py-3 rounded-full border border-amber-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-stone-800 font-semibold">4.9/5 Average Rating</span>
            <span className="text-stone-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;