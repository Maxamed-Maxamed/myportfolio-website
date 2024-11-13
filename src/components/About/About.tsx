const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-8">
            <img
              src="/myportfolio-website/mine.jpeg"
              alt="Maxamed Maxamed"
              className="rounded-full w-[300px] h-[300px] shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md mb-4 inline-block">
              🎓 Actively Seeking Opportunities
            </div>
            
            <p className="text-lg mb-4 text-gray-600 text-justify">
              Hi there! I'm Maxamed, a recent graduate with a BSc in Software Systems Development from South East Technological University. My journey in computer science has been driven by a genuine passion for solving complex problems through innovative coding solutions. One of my proudest achievements has been becoming an AWS Certified Cloud Practitioner, which has given me valuable insights into cloud computing and modern service architectures.
            </p>
            
            <p className="text-lg text-gray-600 text-justify">
              As a fresh graduate eager to make my mark in the tech industry, I'm actively seeking opportunities where I can develop my skills and continue growing as a developer. I maintain an active presence in the tech community by contributing to open-source projects and developing personal applications that push my technical boundaries. I'm looking forward to joining a team where I can contribute my knowledge while learning from experienced professionals in building impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;