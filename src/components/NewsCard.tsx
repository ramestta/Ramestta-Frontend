import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface NewsCardProps {
  article: {
    title: string;
    description?: string;
    url: string;
    published_at: string;
    image_url?: string;
    source: {
      name: string;
      logo_url?: string;
    };
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-6 group hover:scale-105 transition-all duration-200 block"
    >
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      )}

      <div className="flex items-center space-x-3 mb-3">
        {article.source.logo_url && (
          <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center p-1">
            <img
              src={article.source.logo_url}
              alt={article.source.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <span className="text-sm text-primary-400 font-medium">
          {article.source.name}
        </span>
        <div className="flex items-center text-gray-400 text-xs">
          <Calendar size={12} className="mr-1" />
          {formatDate(article.published_at)}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
        {article.title}
      </h3>

      {article.description && (
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {article.description}
        </p>
      )}

      <div className="flex items-center text-primary-400 text-sm font-medium">
        Read Article <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
      </div>
    </a>
  );
};

export default NewsCard;
