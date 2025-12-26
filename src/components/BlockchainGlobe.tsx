import React from 'react';
import ramaLogo from '../assets/RamaPay.png';



const BlockchainGlobe: React.FC = () => {
  return (
    <div className="blockchain-globe-container">
      <div className="globe-sphere">
        {/* These divs create the grid lines of the globe */}
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>
        <div className="globe-line"></div>

      </div>
      <img
          src={ramaLogo}
          alt="Ramestta Logo"
          className="globe-logo"
        />
    </div>
  );
};

export default BlockchainGlobe;