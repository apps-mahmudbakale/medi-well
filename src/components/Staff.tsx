import React from 'react';
import { Award, BookOpen, Clock, Users } from 'lucide-react';

const Staff = () => {
  const doctors = [
    {
      name: "Dr. Sarah Martinez, MD",
      title: "Medical Director & Nephrologist",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Chronic Kidney Disease", "Hypertension", "Transplant Medicine"],
      education: "Harvard Medical School",
      experience: "15+ years",
      bio: "Dr. Martinez leads our medical team with extensive experience in nephrology and a commitment to patient-centered care."
    },
    {
      name: "Dr. Michael Chen, MD",
      title: "Nephrologist",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Dialysis Management", "Kidney Stones", "Electrolyte Disorders"],
      education: "Johns Hopkins University",
      experience: "12+ years",
      bio: "Dr. Chen specializes in comprehensive dialysis care and innovative treatment approaches for kidney disease."
    },
    {
      name: "Dr. Emily Rodriguez, MD",
      title: "Nephrologist",
      image: "https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Pediatric Nephrology", "Home Dialysis", "Patient Education"],
      education: "Stanford University",
      experience: "10+ years",
      bio: "Dr. Rodriguez focuses on pediatric and young adult kidney care, with expertise in home dialysis programs."
    }
  ];

  const nursing = [
    {
      name: "Jennifer Thompson, RN",
      title: "Charge Nurse",
      certifications: ["CNN", "CDN"],
      experience: "8+ years"
    },
    {
      name: "Robert Kim, RN",
      title: "Clinical Nurse",
      certifications: ["CNN", "CCHT"],
      experience: "6+ years"
    },
    {
      name: "Maria Santos, RN",
      title: "Patient Care Coordinator",
      certifications: ["CNN", "CPN"],
      experience: "10+ years"
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified nephrologists and experienced nursing staff are dedicated to 
            providing exceptional care with compassion and expertise.
          </p>
        </div>

        {/* Doctors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Physicians
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
                      <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
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

        {/* Nursing Team */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Nursing Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {nursing.map((nurse, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{nurse.name}</h4>
                <p className="text-blue-600 font-semibold mb-3">{nurse.title}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Certifications:</span> {nurse.certifications.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Experience:</span> {nurse.experience}
                  </p>
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
              <p className="font-semibold text-gray-900">Medicare Certified</p>
              <p className="text-sm text-gray-600">CMS Approved</p>
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