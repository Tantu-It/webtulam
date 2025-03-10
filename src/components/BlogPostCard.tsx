import React from "react";
import { ClockIcon } from "lucide-react";
interface Post {
  id: number;
  title: string;
  excerpt: string;
  readingTime: string;
  date: string;
  category: string;
  image: string;
}
interface BlogPostCardProps {
  post: Post;
}
export function BlogPostCard({
  post
}: BlogPostCardProps) {
  return <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
              {post.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 hover:text-gray-700 cursor-pointer transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-lg text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <div className="flex items-center">
              <ClockIcon size={16} className="mr-1" />
              <span>{post.readingTime} read</span>
            </div>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </article>;
}