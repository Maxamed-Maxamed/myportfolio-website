// import { ExternalLink } from 'lucide-react';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {tech.map((item, index) => (
//           <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//             {item}
//           </span>
//         ))}
//       </div>
//       <a href="https://github.com/Maxamed-Maxamed" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
//         View Project <ExternalLink size={16} className="ml-1" />
//       </a>
//     </div>
//   </div>
// );

// export default ProjectCard;



// import { ExternalLink } from 'lucide-react';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   url: string; // New prop for dynamic project URL
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, url }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
//     <img src={image} alt={`Screenshot of ${title}`} className="w-full h-48 object-cover rounded-t-lg" />
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
//       <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {tech.map((item, index) => (
//           <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
//             {item}
//           </span>
//         ))}
//       </div>
//       <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
//         View Project <ExternalLink size={16} className="ml-1" />
//       </a>
//     </div>
//   </div>
// );

// export default ProjectCard;







import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string; // Prop for dynamic project URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, url }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg  border bg-transparent hover:border-blue-500">
    <img 
      src={image} 
      alt={`Screenshot of ${title}`} 
      className="w-full h-48 object-cover rounded-t-lg border border-gray-200" // Border and border-radius for the image
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm" // Enhanced tech tag styling
          >
            {item}
          </span>
        ))}
      </div>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
      >
        View Project <ExternalLink size={16} className="ml-1" />
      </a>
    </div>
  </div>
);

export default ProjectCard;