import React from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

// Code Block Component
interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'typescript', 
  title,
  showLineNumbers = false 
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <span className="text-sm text-gray-400">{title}</span>
          <span className="text-xs text-gray-500">{language}</span>
        </div>
      )}
      <div className="relative bg-gray-900">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-green-400 font-mono">
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-gray-600 mr-4 select-none w-8 text-right">{i + 1}</span>
                  <span>{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Info Box Component
interface InfoBoxProps {
  type: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ type, title, children }) => {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: 'ℹ️',
      title: 'text-blue-400'
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      icon: '⚠️',
      title: 'text-yellow-400'
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: '✅',
      title: 'text-green-400'
    },
    danger: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      icon: '🚨',
      title: 'text-red-400'
    }
  };

  const style = styles[type];

  return (
    <div className={`my-4 p-4 rounded-lg ${style.bg} border ${style.border}`}>
      {title && (
        <div className={`flex items-center gap-2 font-semibold mb-2 ${style.title}`}>
          <span>{style.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
};

// Table Component
interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-3 px-4 text-gray-400 font-medium text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/30">
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-gray-300 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Heading Component
interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  id?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, id, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = {
    1: 'text-3xl md:text-4xl font-bold text-white mb-4',
    2: 'text-2xl md:text-3xl font-bold text-white mb-3 mt-8',
    3: 'text-xl md:text-2xl font-semibold text-white mb-2 mt-6',
    4: 'text-lg font-semibold text-white mb-2 mt-4'
  };

  return (
    <Tag id={id} className={styles[level]}>
      {children}
    </Tag>
  );
};

// Paragraph Component
export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <p className={`text-gray-300 leading-relaxed mb-4 ${className}`}>{children}</p>;
};

// List Component
interface ListProps {
  items: (string | React.ReactNode)[];
  ordered?: boolean;
}

export const List: React.FC<ListProps> = ({ items, ordered = false }) => {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`my-4 space-y-2 ${ordered ? 'list-decimal' : 'list-disc'} list-inside`}>
      {items.map((item, i) => (
        <li key={i} className="text-gray-300">{item}</li>
      ))}
    </Tag>
  );
};

// Link Component
interface DocLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export const DocLink: React.FC<DocLinkProps> = ({ href, external, children }) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
    >
      {children}
      {external && <ExternalLink size={14} />}
    </a>
  );
};

// Card Component
interface CardProps {
  title: string;
  description?: string;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, href, children }) => {
  const content = (
    <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-primary-500/50 transition-colors">
      {icon && <span className="text-2xl mb-3 block">{icon}</span>}
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

// Grid Component
interface GridProps {
  cols?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ cols = 2, children }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[cols]} gap-4 my-6`}>
      {children}
    </div>
  );
};

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-700 text-gray-300',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    danger: 'bg-red-500/20 text-red-400',
    primary: 'bg-purple-500/20 text-purple-400',
    secondary: 'bg-blue-500/20 text-blue-400'
  };

  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Tabs Component
interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="my-4">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === index
                ? 'text-primary-400 border-b-2 border-primary-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

// Divider Component
export const Divider: React.FC = () => {
  return <hr className="my-8 border-gray-800" />;
};
