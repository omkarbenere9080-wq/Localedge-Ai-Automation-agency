/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PageId } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AiChatInterface from "./components/AiChatInterface";

// Pages
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import Integrations from "./pages/Integrations";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Animations
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} openChat={() => setIsChatOpen(true)} />;
      case "solutions":
        return <Solutions setCurrentPage={setCurrentPage} />;
      case "industries":
        return <Industries setCurrentPage={setCurrentPage} />;
      case "products":
        return <Products setCurrentPage={setCurrentPage} />;
      case "pricing":
        return <Pricing setCurrentPage={setCurrentPage} />;
      case "casestudies":
        return <CaseStudies setCurrentPage={setCurrentPage} />;
      case "integrations":
        return <Integrations setCurrentPage={setCurrentPage} />;
      case "resources":
        return <Resources setCurrentPage={setCurrentPage} />;
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} openChat={() => setIsChatOpen(true)} />;
    }
  };

  return (
    <div id="root-app-layout" className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-blue-500/30 selection:text-white overflow-hidden flex flex-col justify-between">
      
      {/* Mega Menu Navigation */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        openChat={() => setIsChatOpen(true)} 
      />

      {/* Main Content with dynamic animated switches */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Chat Button trigger */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          id="floating-chat-trigger-btn"
          className="fixed bottom-6 right-6 z-45 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all hover:scale-105 active:scale-95 duration-200 border border-blue-400/20"
          title="Open AI Assistant"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      )}

      {/* Sliding AI Chat assistant drawer */}
      <AiChatInterface 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Corporate Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
