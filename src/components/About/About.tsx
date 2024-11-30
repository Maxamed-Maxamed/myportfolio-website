const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-8">
            <img
              src="public/mine.jpeg"
              alt="Maxamed Maxamed"
              className="rounded-full w-[300px] h-[300px] shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md mb-4 inline-block">
              🎓 Actively Seeking Opportunities
            </div>
            <p className="text-lg mb-4 text-gray-600 text-justify">
              I recently graduated with a Bachelor of Science in Software Systems Development from South East Technological University and am passionate about leveraging technology to solve real-world problems.  I have a profound understanding of coding, troubleshooting, and software design. My strengths include exceptional problem-solving capabilities, quick learning, adaptability in fast-paced environments, and collaborative teamwork skills.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Proficient in multiple programming languages and frameworks, I am eager to apply my skills and contribute to a dynamic team.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              I am proud to hold an AWS Certified Cloud Practitioner certification, showcasing my foundational expertise in cloud technologies. I am eager to bring my skills and strengths into a professional setting, facilitating growth and driving innovation within a dynamic, fast-paced team.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Actively seeking opportunities to contribute to impactful development projects, I remain dedicated to continuous learning and professional growth in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
