import { ReactNode } from 'react';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  section: string;
  onClose: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, section, onClose }) => (
  <a 
    href={`#${section}`} 
    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors"
    onClick={onClose}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </a>
);

export default NavItem;