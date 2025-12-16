import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/structuredData';
import { blogPosts, featuredPost } from '../data/blogData';

const BlogPage: React.FC = () => {

  const categories = [
    { name: 'All', count: 25 },
    { name: 'Announcement', count: 5 },
    { name: 'Technical', count: 8 },
    { name: 'Tutorial', count: 6 },
    { name: 'DeFi', count: 4 },
    { name: 'NFT', count: 2 }
  ];
  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
  const injectGlobalStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0) translateX(20px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(10px) rotate(270deg);
        }
        100% {
          transform: translateY(0) translateX(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  };
  
  // Call this once when the component mounts
  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }
 

  const blogBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'Blog', url: 'https://ramestta.com/blog' }
  ]);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Ramestta Blog - Layer-3 Blockchain News, Updates & Insights"
        description="Stay updated with the latest news, technical insights, and announcements from Ramestta. Learn about Layer-3 blockchain technology, DeFi, gaming, and Web3 innovations."
        keywords="Ramestta blog, blockchain news, Layer 3 updates, crypto news, Web3 insights, DeFi news, blockchain technology, Ramestta announcements"
        canonical="https://ramestta.com/blog"
        structuredData={blogBreadcrumb}
      />
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ramestta
            <span className="block text-gradient">
              Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, tutorials, and insights from the Ramestta ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Post</h2>
          </div>
          <Link to={`/blog/${featuredPost.id}`} className="card p-8 lg:p-12 block hover:scale-[1.02] transition-all duration-200 cursor-pointer group hover:shadow-xl hover:shadow-primary-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">{featuredPost.author}</div>
                      <div className="text-gray-400 text-sm">{featuredPost.readTime}</div>
                    </div>
                  </div>
                  <span className="btn-primary inline-flex items-center group-hover:bg-primary-600 transition-colors">
                    Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Categories</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-gray-800/50 hover:bg-primary-600/20 text-gray-300 hover:text-primary-400 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-200 flex items-center space-x-2"
              >
                <Tag size={16} />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Latest Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.id}`} className="card p-6 group cursor-pointer hover:scale-105 transition-transform duration-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="text-white" size={14} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.readTime}</div>
                    </div>
                  </div>
                  <ArrowRight className="text-primary-400 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest updates from the Ramestta ecosystem.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;