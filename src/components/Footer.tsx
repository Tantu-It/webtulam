import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
// Mock data for recent posts
const recentPosts = [{
  id: 1,
  title: "How AI is Transforming Content Creation"
}, {
  id: 2,
  title: "The Best Tools for Remote Collaboration"
}, {
  id: 3,
  title: "Sustainable Travel: Tips and Destinations"
}, {
  id: 4,
  title: "Mindfulness Practices for Busy Professionals"
}];
export function Footer() {
  return <footer className="bg-[#F5F5F5] pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <Facebook size={20} className="text-[#333333]" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <Twitter size={20} className="text-[#333333]" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <Instagram size={20} className="text-[#333333]" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <Linkedin size={20} className="text-[#333333]" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Stay updated with our latest articles, tips, and insights on
              various topics.
            </p>
          </div>
          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {recentPosts.map(post => <li key={post.id}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                    {post.title}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest posts delivered straight to your inbox.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400" />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors duration-200 flex items-center">
                <Mail size={16} className="mr-1" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}