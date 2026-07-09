import React, { useState, useEffect } from "react";
import { PageId } from "../types";
import { 
  Menu, X, ChevronDown, Cpu, Network, Volume2, Layers, 
  Workflow, Building2, ShieldAlert, BookOpen, UserCheck, BarChart3, HelpCircle
} from "lucide-react";

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  openChat: () => void;
}

export default function Header({ currentPage, setCurrentPage, openChat }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    setActiveMega(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMega = (menu: string) => {
    if (activeMega === menu) {
      setActiveMega(null);
    } else {
      setActiveMega(menu);
    }
  };

  const navLinks: { label: string; pageId: PageId }[] = [
    { label: "Home", pageId: "home" },
    { label: "Pricing", pageId: "pricing" },
    { label: "Case Studies", pageId: "casestudies" },
    { label: "Integrations", pageId: "integrations" },
    { label: "Resources", pageId: "resources" },
    { label: "About", pageId: "about" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-neutral-950/75 backdrop-blur-md border-neutral-800/40 py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            id="logo-button"
            onClick={() => handleNavClick("home")} 
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="relative w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-700/60 overflow-hidden shadow-inner group-hover:border-blue-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-4 h-4 rounded-[4px] border-2 border-blue-400 group-hover:border-teal-400 transition-colors transform group-hover:rotate-45 duration-500 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-teal-400" />
              </div>
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              Local<span className="text-blue-400 font-medium">Edge</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            
            {/* Products Mega Dropdown */}
            <div className="relative">
              <button
                id="mega-products-trigger"
                onClick={() => toggleMega("products")}
                onMouseEnter={() => setActiveMega("products")}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-sans text-sm font-medium transition-colors hover:text-white ${
                  currentPage === "products" || activeMega === "products" ? "text-white bg-neutral-900/60" : "text-neutral-400"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMega === "products" ? "rotate-180" : ""}`} />
              </button>

              {activeMega === "products" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => handleNavClick("products")}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                    >
                      <Layers className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white">AI Agent Cloud</div>
                        <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">Orchestrate hyper-scalable agents securely.</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNavClick("products")}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                    >
                      <Cpu className="w-5 h-5 text-purple-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white">Local Edge Compute</div>
                        <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">Run offline, proprietary models on-prem.</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNavClick("products")}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                    >
                      <Volume2 className="w-5 h-5 text-teal-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white">Voice AI API</div>
                        <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">Low latency conversational speech API.</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNavClick("products")}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                    >
                      <Workflow className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white">Workflow Studio</div>
                        <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">Elegant visual flow node builder.</div>
                      </div>
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-900 flex justify-between items-center px-3">
                    <span className="text-xs text-neutral-500 font-mono">LATEST DEV CORE v4.11</span>
                    <button onClick={() => handleNavClick("products")} className="text-xs text-blue-400 hover:underline">Explore Products &rarr;</button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Mega Dropdown */}
            <div className="relative">
              <button
                id="mega-solutions-trigger"
                onClick={() => toggleMega("solutions")}
                onMouseEnter={() => setActiveMega("solutions")}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-sans text-sm font-medium transition-colors hover:text-white ${
                  currentPage === "solutions" || currentPage === "industries" || activeMega === "solutions" 
                    ? "text-white bg-neutral-900/60" 
                    : "text-neutral-400"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMega === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {activeMega === "solutions" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-500 tracking-wider uppercase px-2 mb-2 font-mono">By Scenario</div>
                      <button 
                        onClick={() => handleNavClick("solutions")}
                        className="w-full flex items-start space-x-2 p-2 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                      >
                        <Network className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-white">Enterprise Orchestration</div>
                          <div className="text-[11px] text-neutral-400">Sync all legacy applications.</div>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleNavClick("solutions")}
                        className="w-full flex items-start space-x-2 p-2 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                      >
                        <ShieldAlert className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-white">Compliance Guardrails</div>
                          <div className="text-[11px] text-neutral-400">SOC-2 & HIPAA grade limits.</div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-neutral-500 tracking-wider uppercase px-2 mb-2 font-mono">By Industry</div>
                      <button 
                        onClick={() => handleNavClick("industries")}
                        className="w-full flex items-start space-x-2 p-2 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                      >
                        <Building2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-white">Logistics & Supply</div>
                          <div className="text-[11px] text-neutral-400">Agent route planners.</div>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleNavClick("industries")}
                        className="w-full flex items-start space-x-2 p-2 rounded-lg hover:bg-neutral-900/50 transition-colors text-left"
                      >
                        <BarChart3 className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-white">Financial Risk</div>
                          <div className="text-[11px] text-neutral-400">Instant validation flows.</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-900 flex justify-between items-center px-2">
                    <button onClick={() => handleNavClick("solutions")} className="text-xs text-blue-400 hover:underline">All Solutions</button>
                    <button onClick={() => handleNavClick("industries")} className="text-xs text-blue-400 hover:underline font-medium">Industry Insights &rarr;</button>
                  </div>
                </div>
              )}
            </div>

            {/* General Static Links */}
            {navLinks.map((link) => (
              <button
                key={link.pageId}
                onClick={() => handleNavClick(link.pageId)}
                className={`px-3 py-2 rounded-lg font-sans text-sm font-medium transition-colors hover:text-white ${
                  currentPage === link.pageId ? "text-white bg-neutral-900/60" : "text-neutral-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={openChat}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono rounded-md border border-neutral-800 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Ask Agent</span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="relative px-4 py-2 text-xs font-semibold text-white rounded-lg bg-blue-600 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all hover:bg-blue-500 border border-blue-400/20 active:translate-y-0.5"
            >
              Get Demo
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={openChat}
              className="px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-md border border-neutral-800 text-xs font-mono"
            >
              Agent
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-neutral-700 rounded-lg"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[61px] bottom-0 z-40 bg-neutral-950 border-t border-neutral-900 p-6 flex flex-col space-y-6 overflow-y-auto"
        >
          {/* Main Links */}
          <div className="flex flex-col space-y-4">
            <div className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">Main Directory</div>
            
            <button 
              onClick={() => handleNavClick("home")}
              className={`text-left text-base font-medium py-1 transition-colors ${currentPage === "home" ? "text-blue-400" : "text-neutral-300"}`}
            >
              Home
            </button>

            <button 
              onClick={() => handleNavClick("products")}
              className={`text-left text-base font-medium py-1 transition-colors ${currentPage === "products" ? "text-blue-400" : "text-neutral-300"}`}
            >
              Products
            </button>

            <button 
              onClick={() => handleNavClick("solutions")}
              className={`text-left text-base font-medium py-1 transition-colors ${currentPage === "solutions" ? "text-blue-400" : "text-neutral-300"}`}
            >
              Solutions
            </button>

            <button 
              onClick={() => handleNavClick("industries")}
              className={`text-left text-base font-medium py-1 transition-colors ${currentPage === "industries" ? "text-blue-400" : "text-neutral-300"}`}
            >
              Industries
            </button>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.pageId}
                onClick={() => handleNavClick(link.pageId)}
                className={`text-left text-base font-medium py-1 transition-colors ${
                  currentPage === link.pageId ? "text-blue-400" : "text-neutral-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="pt-6 border-t border-neutral-900 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openChat();
              }}
              className="w-full py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-center font-mono text-xs text-neutral-300 hover:text-white"
            >
              Chat with Assistant
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              Book Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
