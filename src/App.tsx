import React from "react";
import { Header } from "./components/Header";
import { BlogPostList } from "./components/BlogPostList";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
export function App() {
  return <div className="flex flex-col min-h-screen bg-white text-[#333333]">
      <Header />
      <main className="flex flex-col lg:flex-row flex-1 container mx-auto px-4 py-8 gap-8">
        <div className="w-full lg:w-2/3">
          <BlogPostList />
        </div>
        <div className="w-full lg:w-1/3">
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>;
}