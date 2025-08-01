
'use client';

export default function ManagementTeam() {
  const teamMembers = [
    {
      name: "Mohammad Riaz",
      position: "Managing Director",
      image: "https://www.shaheenent.com/images/mohammad-riaz.jpg",
      email: "mriaz@cyber.net.pk",
      experience: "40+ years in natural casings industry"
    },
    {
      name: "Mohammad Riaz",
      position: "CEO & Founder",
      image: "https://www.shaheenent.com/images/mohammad-riaz-2.jpg",
      email: "mriaz@cyber.net.pk",
      experience: "Established company in 1983"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Management Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the leadership team behind Shaheen Enterprises' success since 1983
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gray-200 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.experience}</p>
                <div className="flex items-center text-gray-700">
                  <i className="ri-mail-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors cursor-pointer">
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leadership Message
            </h3>
            <p className="text-gray-700 leading-relaxed">
              "With over 40 years of experience in the natural casings industry, we have built our reputation on 
              quality, reliability, and customer satisfaction. Our commitment to international standards and 
              continuous improvement has made us a trusted partner for customers worldwide."
            </p>
            <p className="text-gray-600 mt-4 font-medium">- Mohammad Riaz, Managing Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
