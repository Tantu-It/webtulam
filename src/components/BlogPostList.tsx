import React from "react";
import { BlogPostCard } from "./BlogPostCard";
// Mock data for blog posts
const posts = [{
  id: 1,
  title: "The Future of Web Development in 2023",
  excerpt: "Exploring the emerging trends and technologies that will shape the web development landscape in the coming year.",
  readingTime: "5 min",
  date: "Oct 15, 2023",
  category: "Technology",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 2,
  title: "Essential Tips for Remote Work Productivity",
  excerpt: "Practical strategies to stay focused and productive while working from home or anywhere in the world.",
  readingTime: "7 min",
  date: "Oct 12, 2023",
  category: "Lifestyle",
  image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 3,
  title: "Exploring Hidden Gems in Southeast Asia",
  excerpt: "Discover the lesser-known but breathtaking destinations across Southeast Asia that should be on your travel bucket list.",
  readingTime: "10 min",
  date: "Oct 8, 2023",
  category: "Travel",
  image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 4,
  title: "Mastering Plant-Based Cooking at Home",
  excerpt: "Simple techniques and delicious recipes to elevate your plant-based cooking skills and create restaurant-quality meals.",
  readingTime: "6 min",
  date: "Oct 5, 2023",
  category: "Food",
  image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}];
export function BlogPostList() {
  return <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
      {posts.map(post => <BlogPostCard key={post.id} post={post} />)}
      <div className="flex justify-center pt-4">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          Load More Articles
        </button>
      </div>
    </div>;
}