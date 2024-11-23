import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">BuildMaster Pro</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
              <Link to="/projects" className="hover:text-yellow-400" onClick={toggleMenu}>Projects</Link>
              <Link to="/services" className="hover:text-yellow-400" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="hover:text-yellow-400" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;