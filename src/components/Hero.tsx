import { useState, useEffect } from 'react';
import { Phone, Calendar, ChevronLeft, ChevronRight, Droplets, Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Comprehensive Diagnostics",
      subtitle: "Precision & Care",
      description: "State-of-the-art diagnostic imaging and laboratory services. Our advanced technology and expert radiologists ensure accurate and timely results for better patient outcomes.",
      cta: "Schedule Test",
      ctaAction: "appointment",
      icon: Heart,
      stats: { number: "50+", label: "Diagnostic Tests" }
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "MRI & CT Scans",
      subtitle: "Advanced Imaging",
      description: "High-resolution MRI and CT scanning services with the latest technology for detailed internal imaging. Our comfortable facilities and expert technicians ensure a stress-free experience.",
      cta: "Learn More",
      ctaAction: "services",
      icon: Shield,
      stats: { number: "98%", label: "Accuracy Rate" }
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Laboratory Services",
      subtitle: "Quick & Reliable",
      description: "Comprehensive laboratory testing with fast turnaround times. From routine blood work to specialized tests, our certified lab technicians ensure precise and confidential results.",
      cta: "View Tests",
      ctaAction: "services",
      icon: Droplets,
      stats: { number: "1000+", label: "Tests Daily" }
    },
    {
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Expert Medical Team",
      subtitle: "Caring Professionals",
      description: "Our team of board-certified radiologists, pathologists, and technicians are committed to providing the highest standard of diagnostic care in a compassionate and professional environment.",
      cta: "Meet Our Team",
      ctaAction: "staff",
      icon: Users,
      stats: { number: "20+", label: "Medical Experts" }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`${slide.title} - Professional dialysis treatment facility`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <div className="space-y-8 text-white">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
                      <slide.icon className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-200 font-semibold">Dialysis Excellence</span>
                    </div>

                    <div className="space-y-6">
                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        {slide.title}
                        <span className="text-blue-400 block">{slide.subtitle}</span>
                      </h1>
                      <p className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* Dialysis-Specific Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                        <div className="flex items-center gap-3">
                          <Shield className="w-6 h-6 text-green-400" />
                          <div>
                            <p className="font-semibold text-lg">Medicare Certified</p>
                            <p className="text-sm opacity-80">CMS Quality Standards</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                        <div className="flex items-center gap-3">
                          <Droplets className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="font-semibold text-lg">All Dialysis Types</p>
                            <p className="text-sm opacity-80">HD, PD, Nocturnal</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button 
                        onClick={() => scrollToSection(slide.ctaAction)}
                        className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold group transform hover:scale-105 shadow-lg"
                      >
                        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        {slide.cta}
                      </button>
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold group"
                      >
                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Call (555) 123-DIAL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide 
                ? 'bg-white border-white scale-125' 
                : 'bg-transparent border-white/50 hover:border-white/75 hover:bg-white/25'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Dynamic Floating Stats Card */}
      <div className="absolute bottom-24 left-4 lg:left-8 bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <currentSlideData.icon className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-blue-400">{currentSlideData.stats.number}</p>
          <p className="text-sm opacity-90">{currentSlideData.stats.label}</p>
        </div>
      </div>

      {/* Certification Badge */}
      <div className="absolute top-20 right-4 lg:right-8 bg-white/15 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white shadow-2xl">
        <div className="text-center">
          <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-green-400">Joint Commission</p>
          <p className="text-xs opacity-90">Accredited Facility</p>
        </div>
      </div>

      {/* Emergency Dialysis Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600/90 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-3 shadow-lg">
        <Phone className="w-4 h-4" />
        <span>Emergency Dialysis: (555) 911-DIAL</span>
        <span className="text-red-200">•</span>
        <span>24/7 Available</span>
      </div>
    </section>
  );
};

export default Hero;