import { BookOpen, Clock, Brain, Heart, Bone } from 'lucide-react';

const Staff = () => {
  const doctors = [
    {
      name: "Dr. James Wilson, MD",
      title: "Medical Director & Radiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      specialties: ["Neuroradiology", "MRI Interpretation", "Diagnostic Imaging"],
      education: "Harvard Medical School",
      experience: "18+ years",
      bio: "Dr. Wilson leads our radiology team with extensive experience in advanced diagnostic imaging and a commitment to accurate, timely diagnoses.",
      icon: Brain
    },
    {
      name: "Dr. Lisa Chen, MD",
      title: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      specialties: ["Cardiac Imaging", "Echocardiography", "Stress Testing"],
      education: "Johns Hopkins University",
      experience: "15+ years",
      bio: "Dr. Chen specializes in comprehensive cardiac diagnostics and innovative imaging techniques for heart health assessment.",
      icon: Heart
    },
    {
      name: "Dr. Robert Taylor, MD",
      title: "Radiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Dr. Taylor brings expertise in musculoskeletal imaging and minimally invasive diagnostic procedures.",
      icon: Bone
    }
  ];

  const technicians = [
    {
      name: "Sarah Johnson, RT(R)",
      title: "Lead Radiologic Technologist",
      certifications: ["ARRT", "CT Certification"],
      experience: "10+ years"
    },
    {
      name: "Michael Chen, RT(MR)",
      title: "MRI Technologist",
      certifications: ["ARRT(MR)", "ACLS"],
      experience: "8+ years"
    },
    {
      name: "Emily Rodriguez, RDMS",
      title: "Ultrasound Specialist",
      certifications: ["ARDMS", "RVT"],
      experience: "7+ years"
    },
    {
      name: "David Kim, CNMT",
      title: "Nuclear Medicine Technologist",
      certifications: ["NMTCB", "PET/CT"],
      experience: "9+ years"
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Medical Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified radiologists and experienced technologists are dedicated to 
            providing accurate diagnoses with the latest imaging technology and compassionate care.
          </p>
        </div>

        {/* Doctors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Radiologists & Specialists
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.title}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <doctor.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Specialties:</p>
                        <p className="text-gray-600 text-sm">{doctor.specialties.join(", ")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{doctor.education}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-600">{doctor.experience} experience</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Technicians */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Technologists
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicians.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">{tech.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4">{tech.title}</p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-left">Certifications: {tech.certifications.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Experience: {tech.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Accreditations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">ACR Accredited</p>
              <p className="text-sm text-gray-600">Imaging Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">Joint Commission</p>
              <p className="text-sm text-gray-600">Accredited</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">AAMI Standards</p>
              <p className="text-sm text-gray-600">Compliant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">State Licensed</p>
              <p className="text-sm text-gray-600">Fully Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;