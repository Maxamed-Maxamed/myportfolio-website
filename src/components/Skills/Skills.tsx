import { User, Code, Server, Layers, Phone, Award } from 'lucide-react';
import SkillCard from './SkillCard';

const skillsData = [
  {
    title: "Soft Skills",
    icon: <User size={48} className="text-blue-500" />,
    skills: ["Team Collaboration & Communication", "Time Management & Prioritization", "Problem-solving & Critical Thinking"]
  },
  {
    title: "Programming Languages",
    icon: <Code size={48} className="text-purple-500" />,
    skills: ["Java", "Python", "JavaScript", "HTML/CSS", "Kotlin", "TypeScript"]
  },
  {
    title: "Frameworks",
    icon: <Server size={48} className="text-red-500" />,
    skills: ["React", "Next.js", "Vue.js", "FastAPI", "Nuxt.js", "React Native", "Express.js", "Django", "Flutter"]
  },
  {
    title: "Libraries",
    icon: <Layers size={48} className="text-orange-500" />,
    skills: ["Node.js", "Vite.js", "NPM", "Webpack", "Tailwind CSS", "Material-UI (MUI)", "Electron.js"]
  },
  {
    title: "Mobile Development",
    icon: <Phone size={48} className="text-green-500" />,
    skills: ["Android Studio", "Xcode"]
  },
  {
    title: "Design & Prototyping Tools",
    icon: <Award size={48} className="text-yellow-500" />,
    skills: ["Figma", "Adobe XD", "Sketch (UI/UX Design)", "InVision (Prototyping)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills & Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;