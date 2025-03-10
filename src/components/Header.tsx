import React from "react";
import { SearchIcon } from "lucide-react";
export function Header() {
  return <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 transition-all hover:text-gray-700 cursor-pointer">
          Modern Blog
        </h1>
        <nav className="flex justify-center mb-4">
          <ul className="flex space-x-8">
            {["Home", "Technology", "Lifestyle", "Travel", "Food", "About"].map(item => <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
                    {item}
                  </a>
                </li>)}
          </ul>
        </nav>
      </div>
    </header>;
}