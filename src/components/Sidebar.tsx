import React from "react";
import { SearchBar } from "./SearchBar";
// Mock data
const categories = [{
  name: "Technology",
  count: 24
}, {
  name: "Lifestyle",
  count: 18
}, {
  name: "Travel",
  count: 12
}, {
  name: "Food",
  count: 9
}, {
  name: "Health",
  count: 7
}, {
  name: "Business",
  count: 5
}];
const popularPosts = [{
  id: 1,
  title: "The Ultimate Guide to Productivity Apps",
  image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
}, {
  id: 2,
  title: "How to Build a Successful Morning Routine",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
}, {
  id: 3,
  title: "10 Must-Visit Destinations in Europe",
  image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
}];
export function Sidebar() {
  return <aside className="space-y-8">
      {/* Author Bio */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex items-center mb-4">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Author" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
          <div className="ml-4">
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Content Creator & Writer</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Passionate about technology, travel, and personal growth. Sharing
          insights and stories to inspire others on their journey.
        </p>
      </div>
      {/* Search Bar */}
      <SearchBar />
      {/* Categories */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => <li key={category.name} className="flex justify-between items-center">
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200">
                {category.name}
              </a>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </li>)}
        </ul>
      </div>
      {/* Popular Posts */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map(post => <div key={post.id} className="flex items-center">
              <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
              <h4 className="ml-3 text-sm font-medium hover:text-gray-700 cursor-pointer transition-colors duration-200">
                {post.title}
              </h4>
            </div>)}
        </div>
      </div>
    </aside>;
}