import React from "react";
import { PageId } from "../types";
import { 
  Building2, ShoppingBag, ShieldAlert, HeartPulse, 
  Workflow, ArrowRight, BarChart4, ClipboardList, CheckCircle 
} from "lucide-react";

interface IndustriesProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Industries({ setCurrentPage }: IndustriesProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const industriesList = [
    {
      title: "Healthcare & Biotech",
      icon: <HeartPulse className="w-5 h-5 text-red-400" />,
      color: "border-red-500/20 shadow-red-500/5",
      badge: "HIPAA Compliant",
      tag: "Biomed Records",
      desc: "Perform automated metadata extraction, medical record summaries, and appointment scheduling in full air-gapped isolation networks. Zero risk of patient data leaks.",
      useCases: ["Itemized Clinical OCR", "Patient Record Indexing", "Prescription Schema Synced"],
      stat: "94% Admin Cost Cut"
    },
    {
      title: "Logistics & Fleet Dispatch",
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/20 shadow-blue-500/5",
      badge: "Real-time Orchestrator",
      tag: "Route Planning",
      desc: "Deploy autonomous routing models to compute efficient delivery lines, monitor inventory levels, and schedule warehousing dispatches based on live weather vectors.",
      useCases: ["Autonomous Route Optimizer", "Inventory Forecast Logs", "SAP Ledger Sync"],
      stat: "12x Process Speedup"
    },
    {
      title: "Retail & E-commerce",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/20 shadow-emerald-500/5",
      badge: "High-Throughput Node",
      tag: "Checkout Flow",
      desc: "Synthesize personalized buyer recommendations, automate credit validation pipelines, and resolve customer inbound support tickets with sub-second latency.",
      useCases: ["Hyper-Personalized Catalog", "Dynamic Fraud Audit", "Inbound Ticket Dispatcher"],
      stat: "410 automations/min"
    },
    {
      title: "Financial Risk & Threat Assessment",
      icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/20 shadow-amber-500/5",
      badge: "Audit Ready",
      tag: "Threat Mitigation",
      desc: "Run active real-time transaction threat filters, evaluate credit scores, audit compliance rules, and flag suspicious activities with comprehensive immutable trails.",
      useCases: ["Real-time Transaction Filter", "Mutable Account Log Analysis", "Custom Portfolio Auditing"],
      stat: "99.998% Uptime SLA"
    }
  ];

  return (
    <div id="industries-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[15%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Vertical Landscapes
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Bespoke Solutions Engineered for Your Industry Rules
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Every vertical features specialized operational constraints. LocalEdge provides modular nodes that align directly with specific enterprise standards and regulations.
          </p>
        </div>

        {/* Industry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="industries-list-grid">
          {industriesList.map((ind, index) => (
            <div 
              key={index} 
              className={`bg-neutral-900/30 border rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-neutral-800 transition-colors ${ind.color}`}
            >
              <div>
                {/* Header detail */}
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800 shadow-inner">
                    {ind.icon}
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-medium rounded text-neutral-400 uppercase">
                      {ind.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                      {ind.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-xl text-white tracking-tight">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                  {ind.desc}
                </p>

                {/* Bullet Use Cases */}
                <div className="mt-6 pt-5 border-t border-neutral-900/80 space-y-2">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Production Blueprints</div>
                  {ind.useCases.map((uc, uIdx) => (
                    <div key={uIdx} className="flex items-center space-x-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lower Stat strip */}
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-500">PROVEN RESULT:</span>
                <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 rounded-lg font-bold">
                  {ind.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-sans font-bold text-xl text-white tracking-tight">
            Need a custom integration blueprint for your workflow?
          </h3>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed max-w-xl mx-auto">
            Our specialized solution team can draft, deploy, and audit mock sandboxes matching your technical specifications within days.
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-blue-500/20 transition-all active:translate-y-0.5"
          >
            Request Tailored Assessment
          </button>
        </div>

      </div>
    </div>
  );
}
