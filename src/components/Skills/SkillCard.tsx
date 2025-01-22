import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: readonly string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax and 3D Tilt Effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [-10, 10]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(event.clientX - rect.left - centerX);
    y.set(event.clientY - rect.top - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ 
        rotateX, 
        rotateY, 
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        y: 50 
      }}
      animate={{ 
        opacity: 1, 
        scale: isHovering ? 1.05 : 1,
        y: 0 
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        duration: 0.5 
      }}
      whileHover={{ 
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
      className="relative bg-white rounded-2xl overflow-hidden 
                  shadow-lg border border-gray-100 
                  cursor-pointer transform-gpu"
    >
      {/* Dramatic Hover Gradient Background */}
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute inset-0 bg-gradient-to-br 
                      from-blue-100 via-purple-100 to-pink-100 
                      mix-blend-overlay z-0"
        />
      )}

      <div className="relative z-10 p-6">
        {/* Animated Icon with Interactive Rotation */}
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            rotateY: isHovering ? 15 : 0
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.div 
            className="bg-blue-50 p-3 rounded-full mr-4"
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </motion.div>

        {/* Expandable Skills List with Staggered Animation */}
        <AnimatedSkillList 
          skills={skills} 
          isExpanded={isExpanded}
        />
      </div>

      {/* Interactive Click Indicator */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ 
          scale: isExpanded ? 1 : 0,
          opacity: isExpanded ? 0.5 : 0
        }}
        className="absolute bottom-2 right-2 
                    bg-blue-500 rounded-full 
                    w-4 h-4"
      />
    </motion.div>
  );
};

// Separate component for animated skills list
const AnimatedSkillList: React.FC<{ skills: readonly string[], isExpanded: boolean }> = ({ 
  skills, 
  isExpanded 
}) => {
  return (
    <motion.ul 
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isExpanded ? 'auto' : 0, 
        opacity: isExpanded ? 1 : 0 
      }}
      transition={{ 
        duration: 0.3,
        type: 'tween'
      }}
      className="overflow-hidden space-y-2"
    >
      {skills.map((skill, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isExpanded ? 1 : 0, 
            x: isExpanded ? 0 : -10 
          }}
          transition={{ 
            delay: isExpanded ? index * 0.1 : 0,
            duration: 0.2
          }}
          className="text-gray-600 flex items-center"
        >
          <span className="mr-2 text-blue-500">•</span>
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillCard;