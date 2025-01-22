import React from 'react';
import { 
  Code, 
  User, 
  Cpu, 
  Phone, 
  Server, 
  Database, 
  GitBranch, 
  Cloud 
} from 'lucide-react';

import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
  {
    title: "Soft Skills",
    icon: <User size={48} className="text-blue-500" />,
    skills: ["Team Collaboration & Communication", "Time Management & Prioritization" ,"Problem-solving & Critical Thinking"]
  },
  {
    title: "Programming Languages",
    icon: <Code size={48} className="text-purple-500" />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Kotlin"]
  },
  {
    title: "Frameworks & Technologies",
    icon: <Server size={48} className="text-red-500" />,
    skills: ["React", "Next.js", "Vue.js", ".NET Core", "FastAPI","MERN",  "React Native", "Express.js", "Django", "Spring Boot" ]
  },
  {
    title: "Mobile Development",
    icon: <Phone size={48} className="text-green-500" />,
    skills: ["React Native", "Flutter", "Android Studio"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={48} className="text-purple-500" />,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Kubernetes"]
  },
  {
    title: "Databases",
    icon: <Database size={48} className="text-indigo-500" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu size={48} className="text-emerald-500" />,
    skills: ["TensorFlow", "PyTorch", "MLOps", "LLMs", "NLP"]
  },
  {
    title: "Development Tools",
    icon: <GitBranch size={48} className="text-orange-500" />,
    skills: ["Visual Studio", "VS Code", "Postman", "Figma", " Jupyter Notebook", "Android Studio", "IntelliJ IDEA", "PyCharm"]
  },

  {
    title: "Version Control",
    icon: <GitBranch size={48} className="text-green-500" />,
    skills: ["Git", "GitHub", "GitLab"]
  }, 

  {
    title: "Operating Systems",
    icon: <Server size={48} className="text-red-500" />,
    skills: ["Windows", "Linux", "macOS"]
  }
  
  
] as const;

const Skills: React.FC = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };



    return (
      <motion.section 
        id="skills" 
        className="py-20 bg-white relative overflow-hidden"
        aria-labelledby="skills-heading"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Subtle Background Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-20 pointer-events-none"
          aria-hidden="true"
        />
  
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            id="skills-heading"
            className="text-3xl font-bold mb-12 text-center text-gray-800"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            aria-description="A collection of skills across various technology domains"
            variants={containerVariants}
          >
            {SKILLS_DATA.map((skill) => (
              <motion.div 
                key={skill.title} 
                variants={itemVariants}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
};

export default React.memo(Skills);