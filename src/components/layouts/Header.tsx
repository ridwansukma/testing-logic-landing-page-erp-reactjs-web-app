import { useState, JSX } from 'react';
import Button from '../Button';
import { Menu, X } from 'lucide-react';
import { HeaderProps } from '../../types/header';

const Header = ({setOpenModalLogin}: HeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          My ERP
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            PRICING
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            CONTACT
          </a>
          <Button variant="outline" size="sm"  onClick={() => setOpenModalLogin(true)}>
            LOGIN
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-purple-500" />
          ) : (
            <Menu className="w-6 h-6 text-purple-500" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600">
              ABOUT
            </a>
            <a href="#pricing" className="text-gray-600">
              PRICING
            </a>
            <a href="#contact" className="text-gray-600">
              CONTACT
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" onClick={() => setOpenModalLogin(true)}>
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
