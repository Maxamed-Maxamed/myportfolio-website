const About = () => {
  return (
    <section id="about" className="py-20 bg-white justify-center md:justify-self-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-self-auto md:pr-8">
            <img
              src="mine.jpeg"
              alt="Maxamed Maxamed"
              className="rounded-full w-[400px] h-[400px] shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 justify-center text-justify md:text-justify">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md mb-4 inline-block">
              🎓  Recent Graduate - Seeking Opportunities.
            </div>
            <p className="text-lg mb-4 text-gray-600">
              I am a recent graduate with a Bachelor of Science in Software Systems Development from South East Technological University. I am passionate about leveraging technology to solve real-world problems. My strengths include exceptional problem-solving capabilities, quick learning, adaptability in fast-paced environments, and collaborative teamwork skills.
            </p>

            <p className="text-lg mb-4 text-gray-600 ">
              I am proud to hold an AWS Certified Cloud Practitioner certification, showcasing my foundational expertise in cloud technologies. I am eager to bring my skills and strengths into a professional setting, facilitating growth and driving innovation within a dynamic, fast-paced team.
            </p>

        
            <p className="text-lg mb-4 text-gray-600 ">
            I am excited to bring my skills and experience to a dynamic team and contribute to the development of cutting-edge software solutions.
            </p>

            <p className="text-lg mb-4 text-gray-600">
            I am actively seeking opportunities to contribute to impactful development projects, collaborate with cross-functional teams, and continue learning and growing in the tech industry.
           </p>
          
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
