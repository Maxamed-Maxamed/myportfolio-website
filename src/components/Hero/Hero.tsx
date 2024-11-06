// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="text-center">
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">Maxamed Maxamed</h1>
//         <p className="text-xl md:text-2xl mb-8 text-gray-600">BSc (Hons) in Software Systems Development Graduate | Actively Seeking New Opportunities</p>
//         <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
//           View My Work
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
      aria-label="Hero Section"
    >
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          Maxamed Maxamed
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          BSc (Hons) in Software Systems Development Graduate | Actively Seeking New Opportunities
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
