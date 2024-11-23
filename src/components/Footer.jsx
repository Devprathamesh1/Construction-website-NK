import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BuildMaster Pro</h3>
            <p className="text-gray-400">Building dreams into reality with excellence and innovation.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-yellow-400">Projects</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} BuildMaster Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;