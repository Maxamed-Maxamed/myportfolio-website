import { useState } from 'react';
import { Home, User, Briefcase, Award, Phone, Menu, X } from 'lucide-react';
import NavItem from './NavItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600">MM</a>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <NavItem icon={<Home size={18} />} label="Home" section="home" onClose={() => setIsMenuOpen(false)} />
          <NavItem icon={<User size={18} />} label="About" section="about" onClose={() => setIsMenuOpen(false)} />
          <NavItem icon={<Briefcase size={18} />} label="Projects" section="projects" onClose={() => setIsMenuOpen(false)} />
          <NavItem icon={<Award size={18} />} label="Certifications" section="certifications" onClose={() => setIsMenuOpen(false)} />
          <NavItem icon={<Phone size={18} />} label="Contact" section="contact" onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <NavItem icon={<Home size={18} />} label="Home" section="home" onClose={() => setIsMenuOpen(false)} />
            <NavItem icon={<User size={18} />} label="About" section="about" onClose={() => setIsMenuOpen(false)} />
            <NavItem icon={<Briefcase size={18} />} label="Projects" section="projects" onClose={() => setIsMenuOpen(false)} />
            <NavItem icon={<Award size={18} />} label="Certifications" section="certifications" onClose={() => setIsMenuOpen(false)} />
            <NavItem icon={<Phone size={18} />} label="Contact" section="contact" onClose={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;