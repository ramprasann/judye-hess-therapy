import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white border border-subtleBorder rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-card transition-all group">
      <div>
        {/* Category & Date */}
        <div className="flex items-center gap-3 text-xs text-mutedText mb-3">
          <span className="inline-flex items-center gap-1 bg-sage-50 text-sage-dark px-2.5 py-1 rounded-md font-medium">
            <Tag className="w-3 h-3" />
            <span>{post.category}</span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-forest transition-colors mb-3 leading-snug">
          <Link to={`/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-charcoal/80 leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
      </div>

      {/* Read More Link */}
      <div className="pt-4 border-t border-subtleBorder/60">
        <Link
          to={`/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-light transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};
