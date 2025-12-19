import React from 'react';
import { Link } from 'react-router-dom';
import ramaLogo from '../assets/RamaPay.png';

const Header: React.FC = () => {

  return (
    <header className="bg-black/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-800/50" role="banner">
      <div className="container-max">
        <div className="flex justify-center items-center py-4">
          <Link to="/" className="flex items-center space-x-2" aria-label="Ramestta home page">
            <img
              src={ramaLogo}
              alt="Ramestta - Institutional-Grade Layer-3 Blockchain Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              width="40"
              height="40"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white font-ramestta" >Ramestta</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;