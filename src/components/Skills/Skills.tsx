import { Award, Code, User,  Briefcase, Phone, Server, Shield, Database, GitBranch, Layers, Cloud, } from 'lucide-react';

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
  },
  {
    title: "Databases",
    icon: <Database size={48} className="text-indigo-500" />,
    skills: ["SQL", "MySQL", "MongoDB", "Firebase", "PostgreSQL", "Microsoft Excel", "Microsoft Access"]
  },
  {
    title: "Tools & Platforms",
    icon: <GitBranch size={48} className="text-orange-500" />,
    skills: ["Git", "GitHub", "Docker", "AWS", "VS Code", "IntelliJ IDEA", "PyCharm IDE", "Postman API Platform"]
  },
  {
    title: "Software Development",
    icon: <Briefcase size={48} className="text-teal-500" />,
    skills: ["Agile Methodologies", "Software Lifecycle Management", "Code Reviews", "CI/CD Pipelines", "GitHub Actions"]
  },
  {
    title: "APIs & Web Services",
    icon: <Server size={48} className="text-pink-500" />,
    skills: ["GraphQL", "RESTful Services"]
  },
  {
    title: "Testing Frameworks",
    icon: <Shield size={48} className="text-cyan-500" />,
    skills: ["Jest (JavaScript)", "Mocha (JavaScript)", "Chai (JavaScript)", "PyTest (Python)", "Selenium (Automated Testing)"]
  },
  {
    title: "Cloud Services",
    icon: <Cloud size={48} className="text-purple-500" />,
    skills: ["AWS (EC2, S3, Lambda)", "GCP (Firestore, Compute Engine)", "Microsoft Azure (App Service, Cosmos DB)"]
  },
  {
    title: "Security Practices",
    icon: <Shield size={48} className="text-red-500" />,
    skills: ["OAuth2", "JWT", "Secure Coding Practices", "Encryption", "Vulnerability Scanning (OWASP ZAP)"]
  },
  {
    title: "Machine Learning & Data Science",
    icon: <Award size={48} className="text-red-500" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "Jupyter Notebooks"]
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
