import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPosts } from '../utils/blogUtils';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const BlogList = () => {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements similar to your research page */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 opacity-60 blur-sm"></div>
      <div className="absolute top-10 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 opacity-50 blur-sm"></div>
      
      <div className="pt-20 px-8 lg:px-16 max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-100 hover:text-blue-200 transition-colors duration-200 text-sm font-medium">
          ← Back to Home
        </Link>
        
        <motion.div {...fadeIn} viewport={{ once: true }} className="mt-12">
          <h1 className="text-4xl lg:text-5xl font-script font-light text-blue-300 text-center mb-4">
            blog.
          </h1>
          <p className="text-lg text-blue-100 font-sans font-light text-center max-w-2xl mx-auto">
            thoughts on adversarial robustness, mechanistic interpretability, and ai security
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              {...fadeIn}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-200/10 border border-blue-300/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-sans font-semibold text-blue-100 group-hover:text-blue-200 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm text-blue-300">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
                <p className="mt-4 text-blue-100 font-sans leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-300/20 text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-blue-200 font-sans text-lg">
              No posts yet. Check back soon for thoughts on AI security and interpretability!
            </p>
          </div>
        )}
        
        <div className="pb-20"></div>
      </div>
    </div>
  );
};
