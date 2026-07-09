import React from "react";
import { PageId } from "../types";
import { Cpu, Terminal, ArrowUpRight } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2 flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick("home")}
              className="flex items-center space-x-2 group text-left focus:outline-none"
            >
              <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 shadow-inner group-hover:border-blue-500/50 transition-colors">
                <div className="w-3.5 h-3.5 rounded-[3px] border border-blue-400 transform group-hover:rotate-45 duration-500 relative flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                </div>
              </div>
              <span className="font-sans font-bold text-base tracking-tight text-white">
                Local<span className="text-blue-400 font-medium">Edge</span>
              </span>
            </button>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Securing and scaling local intelligence workflows for high-growth startups and global operations. Underpinned by ultra-fast model orchestration and decentralized edge compute nodes.
            </p>
            <div className="flex items-center space-x-2.5 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-neutral-500">All Edge Systems Live (0.9ms Core Latency)</span>
            </div>
          </div>

          {/* Directory Column: Products */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick("products")} className="hover:text-white transition-colors">
                  AI Agent Cloud
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("products")} className="hover:text-white transition-colors">
                  Local Edge Compute
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("products")} className="hover:text-white transition-colors">
                  Voice AI API
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("products")} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Workflow Studio</span>
                  <span className="px-1 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono font-medium rounded text-blue-400">Beta</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column: Resources */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick("resources")} className="hover:text-white transition-colors">
                  Technical Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("resources")} className="hover:text-white transition-colors">
                  Whitepapers
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("integrations")} className="hover:text-white transition-colors">
                  Integration App Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("casestudies")} className="hover:text-white transition-colors">
                  Enterprise Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column: Corporate */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors">
                  Our Story & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="hover:text-white transition-colors">
                  Contact Accounts
                </button>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Careers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Security Trust</span>
                  <span className="px-1 py-0.5 bg-neutral-800 border border-neutral-700 text-[9px] font-mono font-medium rounded text-neutral-300">SOC 2</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900 my-8"></div>

        {/* Legal and Specs */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <div className="flex items-center space-x-4">
            <span>&copy; {currentYear} LocalEdge Technologies, Inc. All rights reserved.</span>
            <span className="text-neutral-700">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center space-x-3 text-neutral-500 font-mono">
            <Terminal className="w-3.5 h-3.5 text-neutral-600" />
            <span>Active Stack: Vite + React + Node.js + Tailwind v4</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
