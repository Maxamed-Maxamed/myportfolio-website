// import { ReactNode } from 'react';

// interface SkillCardProps {
//   title: string;
//   icon: ReactNode;
//   skills: string[];
// }

// const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => (
//   // <div className="bg-white rounded-lg shadow-md overflow-hidden">
//   // <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
//   <div className="bg-white rounded-lg shadow-md hover:shadow-lg border border-transparenttransition-transform hover:scale-105 hover:border-blue-500 transition-all duration-300">
//    <div className="p-6">
//       <div className="flex items-center mb-4">
//         {icon}
//         <h3 className="text-xl font-semibold ml-4 text-gray-800">{title}</h3>
//       </div>
//       <ul className="list-disc list-inside">
//         {skills.map((skill, index) => (
//           <li key={index} className="text-gray-600">{skill}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// export default SkillCard;


import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-500">
    <div className="p-6 sm:p-4">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center bg-blue-100 p-2 rounded-full" aria-label={`${title} icon`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold ml-4 text-gray-800">{title}</h3>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 leading-relaxed">{skill}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default SkillCard;