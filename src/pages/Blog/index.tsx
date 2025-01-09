import React from 'react';
import BlogList from '../../components/blog/BlogList';
import BlogHeader from '../../components/blog/BlogHeader';

export default function Blog() {
  return (
    <div className="flex-grow bg-gray-50">
      <BlogHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <BlogList />
      </div>
    </div>
  );
}