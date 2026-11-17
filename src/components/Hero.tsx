import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden">
                <img src="/Gaurav-Aher_Profile.png" alt="Gaurav Aher" className="w-full h-full object-cover object-[center_20%]" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Gaurav</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Aher</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">Data Analyst | AI & Risk Analytics</p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Data Analyst with 7 years of experience delivering predictive modelling, anomaly detection, and governance pipelines within
            internal audit and financial compliance. Proficient in Python, SQL, and Power BI for machine learning workflows and automated risk analytics.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
            <a href="mailto:gauravyuvrajaher@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><span>📧 gauravyuvrajaher@gmail.com</span></a>
            <a href="tel:+353899893448" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><span>📱 +353 89 989 3448</span></a>
            <div className="flex items-center gap-2"><span>📍 Galway, Ireland</span></div>
          </div>

          <button onClick={scrollToAbout} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Learn More About Me
            <ArrowDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
