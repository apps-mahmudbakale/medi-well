import { Activity, Heart, CheckCircle, Scan, Microscope, Brain, Bone, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scan,
      title: "MRI Scans",
      description: "High-resolution magnetic resonance imaging for detailed views of organs, soft tissues, and bones.",
      features: ["3T MRI technology", "No radiation", "45-60 min average", "Board-certified radiologists"],
      color: "blue"
    },
    {
      icon: Activity,
      title: "CT Scans",
      description: "Advanced computed tomography for fast, detailed cross-sectional imaging of the body.",
      features: ["64-slice CT scanner", "Low-dose options", "Contrast & non-contrast", "Quick results"],
      color: "green"
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Comprehensive lab testing with rapid turnaround times for accurate diagnosis and monitoring.",
      features: ["Blood tests", "Urinalysis", "Pathology", "Same-day results"],
      color: "purple"
    }
  ];

  const additionalServices = [
    {
      icon: Brain,
      title: "Neurological Imaging",
      description: "Specialized imaging for brain and nervous system conditions including MRI and CT scans."
    },
    {
      icon: Heart,
      title: "Cardiac Diagnostics",
      description: "Comprehensive heart health assessments including stress tests and cardiac imaging."
    },
    {
      icon: Bone,
      title: "Musculoskeletal Imaging",
      description: "Detailed imaging for bones, joints, and soft tissues to diagnose injuries and conditions."
    },
    {
      icon: Stethoscope,
      title: "Pulmonary Function Tests",
      description: "Evaluations to assess lung function and diagnose respiratory conditions."
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'bg-blue-100 text-blue-600',
          title: 'text-blue-900',
          feature: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'bg-green-100 text-green-600',
          title: 'text-green-900',
          feature: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          icon: 'bg-purple-100 text-purple-600',
          title: 'text-purple-900',
          feature: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'bg-gray-100 text-gray-600',
          title: 'text-gray-900',
          feature: 'text-gray-600'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Diagnostic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Medi Well, we provide a comprehensive range of diagnostic imaging and laboratory services 
            using the latest technology and interpreted by our team of expert radiologists and pathologists.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className={`border rounded-2xl p-8 transition-all hover:shadow-lg ${colors.bg} ${colors.border}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${colors.title}`}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${colors.feature}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Specialized Diagnostic Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need More Information?</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to schedule an appointment or learn more about our diagnostic services.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;