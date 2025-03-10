import React from "react";
import { SearchIcon } from "lucide-react";
export function SearchBar() {
  return <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h3 className="font-bold mb-4">Search</h3>
      <div className="relative">
        <input type="text" placeholder="Search articles..." className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400" />
        <SearchIcon size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>;
}