import React from 'react';
import { 
  Scissors, 
  Droplets, 
  Sparkles, 
  UserCheck, 
  Smile, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-stone-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm text-white border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <h1 className="text-2xl font-serif font-bold tracking-wider text-[#D4AF37]">ND SALON</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-stone-300 hover:text-[#D4AF37] transition-colors uppercase text-sm tracking-widest font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:flex">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#D4AF37] text-black px-6 py-2 rounded-sm font-semibold hover:bg-[#b5952f] transition-colors uppercase text-sm tracking-wider"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-[#D4AF37]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-[#D4AF37]/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-4 text-stone-300 hover:text-[#D4AF37] uppercase text-sm tracking-widest border-b border-white/5"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h2 className="text-[#D4AF37] font-serif text-lg md:text-2xl mb-4 tracking-[0.2em] uppercase">Welcome to</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            ND Salon <br/>
            <span className="text-3xl md:text-5xl font-light italic text-stone-300">Style, Confidence & Perfection</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 font-light max-w-2xl mx-auto">
            Professional Hair & Beauty Services in Andheri East, Mumbai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-sm font-bold hover:bg-[#b5952f] transition-all uppercase tracking-wider text-sm"
            >
              Book Appointment
            </button>
            <a 
              href="tel:+919930708098"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-sm font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">Our Story</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">A Trusted Neighborhood Salon</h2>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Welcome to ND Salon, your premier destination for modern hair styling, grooming, and beauty services in Marol, Andheri East. We believe that beauty is not just about looking good, but feeling confident and empowered.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Our team of experienced professionals is dedicated to providing personalized services in a hygienic, relaxing, and comfortable environment. Whether you need a quick trim, a complete makeover, or a relaxing spa day, we use only premium products to ensure you get the best results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#D4AF37] pl-4">
                  <h4 className="text-2xl font-serif font-bold text-black mb-1">10+</h4>
                  <p className="text-sm text-stone-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-4">
                  <h4 className="text-2xl font-serif font-bold text-black mb-1">5k+</h4>
                  <p className="text-sm text-stone-500 uppercase tracking-wider">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 border-2 border-[#D4AF37] translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" 
                alt="Salon Styling" 
                className="relative z-10 w-full h-[500px] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="absolute -bottom-12 -left-12 z-20 w-64 h-64 object-cover shadow-2xl border-8 border-white hidden md:block"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">What We Offer</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Premium Salon Services</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Scissors size={32} />, title: "Haircut & Styling", desc: "Trendy cuts and professional styling for men and women." },
              { icon: <Sparkles size={32} />, title: "Coloring & Highlights", desc: "Premium hair coloring, balayage, and creative highlights." },
              { icon: <Droplets size={32} />, title: "Hair Spa & Treatments", desc: "Deep conditioning, keratin, and scalp treatments." },
              { icon: <UserCheck size={32} />, title: "Beard Grooming", desc: "Precision trimming, styling, and classic hot towel shaves." },
              { icon: <Smile size={32} />, title: "Facial & Skin Care", desc: "Rejuvenating facials and skin treatments for a glowing look." },
              { icon: <Star size={32} />, title: "Manicure & Pedicure", desc: "Relaxing hand and foot care with premium polish." },
              { icon: <Sparkles size={32} />, title: "Bridal & Party Makeup", desc: "Flawless makeup for your special occasions." },
              { icon: <CheckCircle2 size={32} />, title: "Waxing & Threading", desc: "Gentle and hygienic hair removal services." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-black mb-3">{service.title}</h4>
                <p className="text-stone-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Experienced Stylists", desc: "Trained professionals who know the latest trends." },
                { title: "Premium Products", desc: "We use only top-tier, authentic beauty brands." },
                { title: "Hygienic Environment", desc: "Strict sanitization protocols for your safety." },
                { title: "Modern Equipment", desc: "State-of-the-art tools for the best results." },
                { title: "Friendly Staff", desc: "Welcoming atmosphere where you feel at home." },
                { title: "Affordable Pricing", desc: "Luxury services that don't break the bank." }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-[#D4AF37] flex-shrink-0 mt-1">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">The ND Difference</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose ND Salon?</h2>
              <p className="text-stone-300 mb-8 leading-relaxed text-lg">
                We don't just offer services; we offer an experience. From the moment you walk through our doors, our goal is to make you feel relaxed, pampered, and beautiful. Our commitment to quality and customer satisfaction sets us apart in Andheri East.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-sm font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase tracking-wider text-sm"
              >
                Experience It Yourself
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">Our Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Salon Gallery</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop" alt="Hair Styling" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop" alt="Salon Tools" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop" alt="Makeup" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" alt="Hair Color" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" alt="Facial" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop" alt="Manicure" className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section id="testimonials" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">Client Reviews</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", text: "Absolutely loved my haircut! The staff is very professional and the salon is extremely clean. Highly recommend ND Salon for anyone in Andheri." },
              { name: "Rahul Desai", text: "Best beard grooming I've had in Mumbai. They pay attention to detail and use great products. Will definitely be coming back." },
              { name: "Sneha Patel", text: "Got my bridal makeup done here and it was flawless. The team made me feel so comfortable and the results were exactly what I wanted." }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 relative">
                <div className="text-[#D4AF37] flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <h4 className="font-bold text-black font-serif">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-20 bg-[#D4AF37] text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl mb-8 font-medium">Book your appointment today and let our experts pamper you.</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white px-10 py-4 rounded-sm font-bold hover:bg-stone-800 transition-all uppercase tracking-wider text-sm"
          >
            Book Your Appointment Today
          </button>
        </div>
      </section>

      {/* 7 & 8. Contact & Location Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div>
              <h3 className="text-[#D4AF37] font-serif text-lg tracking-[0.2em] uppercase mb-2">Get In Touch</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-8">Visit ND Salon</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full text-[#D4AF37]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-stone-600 leading-relaxed">
                      SHOP NO.1, ND SALON, CTS 243/12, Military Rd,<br/>
                      Opp. Richard Garage, Sankara Nagar, Bhavani Nagar,<br/>
                      Marol, Andheri East, Mumbai, Maharashtra 400059, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full text-[#D4AF37]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-stone-600">+91 9930708098</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full text-[#D4AF37]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hours</h4>
                    <p className="text-stone-600">Mon - Sun: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-10">
                <a 
                  href="https://wa.me/919930708098" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-sm font-bold hover:bg-[#1ebd57] transition-all flex items-center gap-2"
                >
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>

              {/* Google Map Embed */}
              <div className="h-64 w-full bg-stone-200 rounded-sm overflow-hidden border border-stone-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.761823901416!2d72.8839158!3d19.1180905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c813e110d7a1%3A0x6e2617f69f2e3a15!2sND%20SALON!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ND Salon Location"
                ></iframe>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-stone-50 p-8 md:p-10 rounded-sm border border-stone-200">
              <h3 className="text-2xl font-serif font-bold text-black mb-6">Book an Appointment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white" placeholder="+91 9930708098" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white">
                    <option>Select a service</option>
                    <option>Haircut & Styling</option>
                    <option>Hair Coloring</option>
                    <option>Hair Spa</option>
                    <option>Beard Grooming</option>
                    <option>Facial & Skin Care</option>
                    <option>Manicure & Pedicure</option>
                    <option>Bridal Makeup</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Time</label>
                    <input type="time" className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-white" placeholder="Any specific requests?"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white px-8 py-4 rounded-sm font-bold hover:bg-[#D4AF37] transition-all uppercase tracking-wider text-sm">
                  Confirm Booking
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold tracking-wider text-[#D4AF37] mb-6">ND SALON</h2>
              <p className="text-stone-400 leading-relaxed mb-6 max-w-md">
                Your premium destination for hair, beauty, and grooming services in Andheri East, Mumbai. We bring out the best version of you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-3 text-stone-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#D4AF37] transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#D4AF37] transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-[#D4AF37] transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-[#D4AF37] transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#D4AF37] transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Contact Info</h4>
              <ul className="space-y-4 text-stone-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span className="text-sm">SHOP NO.1, CTS 243/12, Military Rd, Marol, Andheri East, Mumbai 400059</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm">+91 9930708098</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} ND Salon. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-stone-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
