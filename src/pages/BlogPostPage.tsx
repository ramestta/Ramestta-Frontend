import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { getBlogPostById } from '../data/blogData';
import { articleSchema } from '../utils/structuredData';
import FloatingParticles from '../components/FloatingParticles';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const structuredData = articleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: post.author,
    url: `https://ramestta.com/blog/${post.id}`
  });

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={`${post.title} | Ramestta Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, Ramestta, blockchain, Layer 3`}
        canonical={`https://ramestta.com/blog/${post.id}`}
        ogImage={post.image}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding relative">
        <FloatingParticles />
        <div className="container-max relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30">
                {post.category}
              </span>
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center text-gray-300">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">{post.author}</div>
                <div className="text-gray-300">Ramestta Team Member</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-black py-8">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-950">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-gray-300 leading-relaxed"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8'
                }}
              >
                {post.content.split('\n').map((paragraph, index) => {
                  // Handle markdown-style headers
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-4xl font-bold text-white mt-12 mb-6">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-white mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-semibold text-white mt-8 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  // Handle code blocks
                  if (paragraph.startsWith('```')) {
                    return null;
                  }
                  // Handle bold text
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-white mt-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  // Handle list items
                  if (paragraph.trim().startsWith('- ')) {
                    return (
                      <li key={index} className="ml-6 text-gray-300 mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  // Regular paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-6 text-gray-300">
                        {paragraph}
                      </p>
                    );
                  }
                  return <br key={index} />;
                })}
              </div>
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap items-center gap-3">
                <Tag size={20} className="text-primary-400" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm hover:bg-gray-800 transition-colors cursor-pointer border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Twitter
                </button>
                <button className="px-6 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors">
                  Facebook
                </button>
                <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Explore More</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover more insights, tutorials, and updates from the Ramestta ecosystem.
          </p>
          <Link to="/blog" className="btn-primary inline-flex items-center">
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
