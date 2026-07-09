import React, { useState } from "react";
import { PageId } from "../types";
import { 
  BookOpen, Terminal, Sparkles, Filter, Search, 
  ArrowRight, FileText, ChevronRight 
} from "lucide-react";

interface ResourcesProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Resources({ setCurrentPage }: ResourcesProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "blog" | "whitepaper" | "guide">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: "p1",
      title: "Orchestrating Sub-120ms Distributed Cognitive Pipelines on Serverless Edge",
      category: "blog",
      date: "June 24, 2026",
      readTime: "7 min read",
      excerpt: "Deep dive into state-machine thread synchronization across localized virtual machines to eliminate standard network lag overhead."
    },
    {
      id: "p2",
      title: "HIPAA Compliant AI Blueprints: Decentralizing Patient Record Summaries",
      category: "whitepaper",
      date: "May 18, 2026",
      readTime: "14 min read",
      excerpt: "An architectural guide to deploying fine-tuned clinical metadata models onto isolated, on-premise VPC databases safely."
    },
    {
      id: "p3",
      title: "Visual Workflow Studio v4: Advanced Branching and Dynamic Self-Healing Variables",
      category: "guide",
      date: "April 05, 2026",
      readTime: "5 min read",
      excerpt: "Step-by-step configuration manual to map dynamic variables and manage automated pipeline fallback loops visually."
    },
    {
      id: "p4",
      title: "The Security of Sovereign Models: Why Closed API Keys Fail Regulatory Audits",
      category: "whitepaper",
      date: "March 12, 2026",
      readTime: "11 min read",
      excerpt: "Analyzing strict data retention policies and demonstrating the cryptographic isolation benefits of air-gapped model execution."
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="resources-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[10%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Developer Knowledge Hub
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Sovereign Research, Developer Logs, and Whitepapers
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Stay up to date with deep technical research into sub-second model dispatches, secure on-premise VPC clusters, and visual workflow builders.
          </p>
        </div>

        {/* Directory Controls */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeFilter === "all" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                All Resources
              </button>
              <button
                onClick={() => setActiveFilter("blog")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeFilter === "blog" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                Tech Blog
              </button>
              <button
                onClick={() => setActiveFilter("whitepaper")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeFilter === "whitepaper" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                Whitepapers
              </button>
              <button
                onClick={() => setActiveFilter("guide")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeFilter === "guide" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                Guides
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-grow max-w-sm">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & whitepapers..."
                className="w-full bg-neutral-900 border border-neutral-800 text-white text-xs rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
              />
            </div>

          </div>
        </div>

        {/* Directory List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="resources-posts-grid">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 lg:p-8 hover:border-neutral-800 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-2 py-0.5 text-[9px] font-mono font-semibold rounded uppercase ${
                    post.category === "whitepaper" 
                      ? "bg-purple-500/10 border border-purple-500/20 text-purple-400" 
                      : post.category === "blog" 
                        ? "bg-blue-500/10 border border-blue-500/20 text-blue-400" 
                        : "bg-teal-500/10 border border-teal-500/20 text-teal-400"
                  }`}>
                    {post.category}
                  </span>

                  <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-500">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500">ENGINE CORE v4.1</span>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="text-xs font-semibold text-blue-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Read Document</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-12 bg-neutral-900/10 border border-neutral-900 rounded-xl">
              <span className="text-neutral-500 text-sm font-sans">No resources match your filters.</span>
            </div>
          )}
        </div>

        {/* Technical specifications callout */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>Access Our Open API Specifications & Sandbox</span>
            </h4>
            <p className="text-xs text-neutral-400 mt-1 max-w-lg leading-relaxed">
              Read comprehensive technical documentation, check webhook parameter structures, and access sandbox testing logs easily in the active developer suite.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage("contact")}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-blue-500/15 transition-all shrink-0"
          >
            Access API Sandbox Documents &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
