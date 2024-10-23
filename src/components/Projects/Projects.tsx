import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Hydration Mate",
    description: "Mobile app to track daily water intake",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "/img.png"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack online shopping platform",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/E-commercePlatform.jpeg"
  },
  {
    title: "Vulnerability Assessment Tool",
    description: "Automated security scanning tool",
    tech: ["Python", "Docker", "REST APIs"],
    image: "/VulnerabilityAssessmentTool.jpeg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;