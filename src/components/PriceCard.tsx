import React from 'react';
import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';

interface PriceCardProps {
  platform: {
    name: string;
    url: string;
    icon_url: string;
  };
  price?: {
    price_usd: number;
    change_24h: number;
  };
}

const PriceCard: React.FC<PriceCardProps> = ({ platform, price }) => {
  const isPositiveChange = price && price.change_24h >= 0;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-6 hover:scale-105 transition-all duration-200 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="text-primary-400 m-2" size={16} />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center p-2">
            <img
              src={platform.icon_url || '/icons/default-crypto.svg'}
              alt={platform.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/icons/default-crypto.svg';
              }}
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
        </div>
      </div>

      {price ? (
        <div>
          <div className="text-2xl font-bold text-white mb-2">
            ${price.price_usd.toFixed(6)}
          </div>
          <div className={`flex items-center space-x-1 text-sm font-medium ${
            isPositiveChange ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositiveChange ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{Math.abs(price.change_24h).toFixed(2)}%</span>
            <span className="text-gray-400 ml-2">24h</span>
          </div>
        </div>
      ) : (
        <div className="text-gray-400 text-sm">
          View on {platform.name}
        </div>
      )}
    </a>
  );
};

export default PriceCard;
