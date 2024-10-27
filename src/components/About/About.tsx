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
            <p className="text-lg mb-6 text-gray-600 text-justify">
              Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University.
              AWS Certified Cloud Practitioner and currently pursuing CompTIA Security+. I am passionate about developing secure,
              efficient applications and continuously improving my skills in both software development and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
