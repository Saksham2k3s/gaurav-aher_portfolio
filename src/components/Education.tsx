const Education = () => {
  const education = [
    { degree: "MSc Business Analytics", school: "University of Galway", period: "Sep 2025 – Aug 2026", logo: "UG" },
    { degree: "PG Diploma, Data Science and Engineering", school: "Great Lakes Institute of Management", period: "Jan 2022 – Oct 2022", logo: "GL" },
    { degree: "Bachelor of Business Administration", school: "Savitribai Phule Pune University", period: "2018 – 2021", logo: "SP" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic foundation in business analytics, data science, engineering, and enterprise administration.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">{edu.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                  </div>
                </div>
                <div className="text-right"><p className="text-gray-300 font-medium">{edu.period}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
