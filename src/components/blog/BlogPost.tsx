import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';
import { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {formatDate(post.publishedAt)}
        </div>
        <h2 className="text-2xl font-bold mb-4">
          <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Weiterlesen
        </Link>
      </div>
    </article>
  );
}