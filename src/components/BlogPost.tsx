
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getBlogPost } from '../utils/blogUtils';
import 'katex/dist/katex.min.css'; // Add this import

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-8 lg:px-16 max-w-4xl mx-auto">
        <Link to="/blog" className="text-blue-100 hover:text-blue-200 transition-colors duration-200 text-sm font-medium">
          ← Back to Blog
        </Link>
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-sans font-bold text-white">Post Not Found</h1>
          <p className="mt-4 text-blue-100">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 opacity-60 blur-sm"></div>
      <div className="absolute top-10 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 opacity-50 blur-sm"></div>
      
      <article className="pt-20 px-8 lg:px-16 max-w-4xl mx-auto relative z-10">
        <Link to="/blog" className="text-blue-100 hover:text-blue-200 transition-colors duration-200 text-sm font-medium">
          ← Back to Blog
        </Link>
        
        <header className="mt-12">
          <h1 className="text-4xl lg:text-5xl font-sans font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-6 text-blue-300 font-sans">
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
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-blue-300/20 text-blue-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-12 prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              // Custom styling for markdown elements
              h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-blue-100 mt-10 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold text-blue-200 mt-8 mb-3">{children}</h3>,
              p: ({ children }) => <p className="text-blue-50 font-sans leading-relaxed mb-6">{children}</p>,
              code: ({ inline, children, ...props }) => {
                return inline ? (
                  <code className="bg-gray-800 px-2 py-1 rounded text-blue-200 font-mono text-sm" {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="block bg-gray-900 p-4 rounded-lg text-blue-100 font-mono text-sm overflow-x-auto" {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ src, alt, ...props }) => (
                <img
                  src={src}
                  alt={alt}
                  className="w-full rounded-lg shadow-lg my-8"
                  {...props}
                />
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-300 pl-6 italic text-blue-100 my-6">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => <ul className="list-disc list-inside text-blue-50 space-y-2 mb-6">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside text-blue-50 space-y-2 mb-6">{children}</ol>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        
        <div className="pb-20"></div>
      </article>
    </div>
  );
};