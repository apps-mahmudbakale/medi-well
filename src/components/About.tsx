import { Heart, Shield, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We prioritize your comfort and well-being, providing personalized attention throughout your diagnostic journey."
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "Cutting-edge diagnostic equipment and imaging technology for precise and reliable test results."
    },
    {
      icon: Users,
      title: "Expert Radiologists",
      description: "Our team of board-certified radiologists and technicians are leaders in diagnostic imaging."
    },
    {
      icon: Award,
      title: "Accredited Facility",
      description: "Fully accredited diagnostic center meeting the highest standards of quality and patient care."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Medi Well
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, Medi Well Outpatient Diagnostic Center has been a trusted provider of 
            comprehensive diagnostic services. Our mission is to deliver accurate, timely, and 
            compassionate diagnostic care using the latest technology and expert medical professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Precision Diagnostics, Compassionate Care
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that diagnostic testing can be stressful. That's why we've created 
                a welcoming, comfortable environment where patients receive the highest standard of 
                diagnostic care with compassion and respect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art facility is equipped with the latest diagnostic imaging technology, 
                and our team of certified professionals is dedicated to providing accurate results 
                and clear communication throughout your diagnostic process.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Diagnostic Tests</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">99%</p>
                <p className="text-sm text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">24/7</p>
                <p className="text-sm text-gray-600">Emergency Services</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1585435557343-3b109b0c6e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Modern diagnostic imaging equipment in medical facility"
              className="w-full h-96 lg:h-[450px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;