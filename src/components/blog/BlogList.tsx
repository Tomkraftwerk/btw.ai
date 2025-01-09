import React from 'react';
import BlogPost from './BlogPost';
import { BlogPost as BlogPostType } from '../../types/blog';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogList() {
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <div className="text-center py-8">Laden...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Fehler beim Laden der Blogbeiträge</div>;
  }

  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}