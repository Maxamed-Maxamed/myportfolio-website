import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Hydration Mate",
    description: "Mobile app to track daily water intake",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "/myportfolio-website/img.png"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack online shopping platform",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/myportfolio-website/E-commercePlatform.jpeg"
  },
  {
    title: "Vulnerability Assessment Tool",
    description: "Automated security scanning tool",
    tech: ["Python", "Docker", "REST APIs"],
    image: "/myportfolio-website/VulnerabilityAssessmentTool.jpeg"
  },
  {
    title: "Movie Web Application",
    description: "React-based movie browsing and rating app",
    tech: ["React", "Redux", "TMDB API"],
    image: "/myportfolio-website/MovieApp.jpeg"
  },
  {
    title: "Real-Time Chat Application",
    description: "Secure messaging app with end-to-end encryption",
    tech: ["Socket.io", "React", "Node.js", "MongoDB"],
    image: "/myportfolio-website/Chat.jpeg"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects and skills",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/myportfolio-website/notepad.jpeg"
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
