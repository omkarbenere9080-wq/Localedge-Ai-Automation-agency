import React, { useState } from "react";
import { PageId } from "../types";
import { 
  Network, ShieldCheck, HeartHandshake, CloudLightning, 
  Terminal, Workflow, Database, ArrowRight, CheckCircle2 
} from "lucide-react";

interface SolutionsProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Solutions({ setCurrentPage }: SolutionsProps) {
  const [selectedSolution, setSelectedSolution] = useState<string>("sec");

  const solutionsList = [
    {
      id: "sec",
      label: "Regulatory compliance sandbox",
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      tagline: "Air-gapped secure local executions",
      summary: "Undergo absolute data custody validation. Run models strictly local, eliminating outbound standard API handshakes, in exact compliance with HIPAA and SOC-2 guidelines.",
      metrics: ["100% Data On-Premise", "HIPAA Aligned Code", "Air-gapped Sandbox Security"],
      technicalDetails: "Deploy localized models inside client-controlled VPC clusters. Standardize data pipelines to prevent any public internet routes or shared-tenant indexing logs."
    },
    {
      id: "api",
      label: "Legacy SaaS Orchestrator",
      icon: <Network className="w-5 h-5 text-blue-400" />,
      tagline: "Unifying disjointed business software",
      summary: "Extract, standardize, and route fields from outdated ERP structures into modern communication hubs, databases, or client frontends with native error recovery.",
      metrics: ["50+ Native Connectors", "Self-healing pipeline re-runs", "Custom Schema Transformer"],
      technicalDetails: "Leverages standard REST or GraphQL interfaces to poll databases, parse blobs via Gemini OCR capabilities, and index fields without altering existing legacy schemas."
    },
    {
      id: "voice",
      label: "Conversational Agent Nodes",
      icon: <CloudLightning className="w-5 h-5 text-purple-400" />,
      tagline: "Hyper-expressive speech synthesis API",
      summary: "Low-latency sub-120ms conversational audio pipelines. Synthesize voices, extract immediate customer intent, and resolve CRM requests live.",
      metrics: ["Sub-120ms latency rate", "Dynamic intent mapping", "Multimodal audio dispatches"],
      technicalDetails: "Converts client voice calls to high-fidelity little-endian PCM audio arrays, running real-time speech translation and routing answers back through optimized audio frames."
    }
  ];

  const activeSolution = solutionsList.find(s => s.id === selectedSolution) || solutionsList[0];

  return (
    <div id="solutions-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Decorative backdrop spotlights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-0.5 bg-teal-500/10 border border-teal-500/20 text-[10px] font-mono text-teal-400 rounded-full uppercase font-semibold">
            Enterprise Solutions
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Custom Automation Architectures Built for Enterprise Scale
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Eliminate operational overhead, secure critical data structures, and orchestrate complex legacy apps with modern cognitive pipelines.
          </p>
        </div>

        {/* Dynamic Solution Switcher layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          
          {/* Left: Interactive list selector */}
          <div className="lg:col-span-1 space-y-3">
            <div className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-2 pl-2">
              Select Solution Area
            </div>
            {solutionsList.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setSelectedSolution(sol.id)}
                className={`w-full flex items-center space-x-4 p-4 rounded-xl border text-left transition-all ${
                  selectedSolution === sol.id 
                    ? "bg-neutral-900 border-teal-500/50 shadow-lg shadow-teal-500/5 text-white" 
                    : "bg-neutral-950/40 border-neutral-900 hover:border-neutral-800 text-neutral-400"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  selectedSolution === sol.id ? "bg-teal-500/10 border-teal-500/20" : "bg-neutral-900 border-neutral-800"
                }`}>
                  {sol.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase">SOLUTION MODULE</div>
                  <div className="text-sm font-bold mt-0.5">{sol.label}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Inspector detail card */}
          <div className="lg:col-span-2 bg-neutral-900/30 border border-neutral-900/80 rounded-xl p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 text-[9px] font-mono text-teal-400 rounded">
                ACTIVE FOCUS AREA
              </span>
              <span className="text-neutral-600 font-mono text-xs">|</span>
              <span className="text-xs text-neutral-400 font-mono uppercase">{activeSolution.tagline}</span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-white tracking-tight">
              {activeSolution.label}
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
              {activeSolution.summary}
            </p>

            {/* Metrics List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-900 pt-6 mt-6">
              {activeSolution.metrics.map((metric, idx) => (
                <div key={idx} className="bg-neutral-950 p-3 rounded-lg border border-neutral-900">
                  <div className="text-xs font-sans font-bold text-teal-400">{metric}</div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase mt-1">Audit Standard</div>
                </div>
              ))}
            </div>

            {/* Technical block specs */}
            <div className="mt-6 p-4 bg-neutral-950 border border-neutral-900 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">SYSTEM NODE INSTRUCTIONS</span>
              </div>
              <p className="text-[11px] font-mono text-neutral-400 leading-normal">
                {activeSolution.technicalDetails}
              </p>
            </div>
          </div>

        </div>

        {/* Security block details */}
        <div className="bg-neutral-950/60 border border-neutral-900 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="font-sans font-bold text-xl text-white tracking-tight">
            Our Standard Security Blueprint
          </h3>
          <p className="text-xs text-neutral-400 mt-2 max-w-2xl mx-auto leading-relaxed">
            LocalEdge operations execute within dedicated isolated sandbox processes. Underpinned by advanced key-management, compliance policies, and cryptographic validation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-400" />
              </div>
              <div className="text-xs font-bold text-white">SOC-2 Audit Type II</div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase mt-1">Yearly Certification</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-400" />
              </div>
              <div className="text-xs font-bold text-white">HIPAA Secure Rails</div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase mt-1">Patient Privacy Shield</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-400" />
              </div>
              <div className="text-xs font-bold text-white">ISO 27001 Standard</div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase mt-1">VPC Isolation Nodes</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-900">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-teal-500/10 transition-colors"
            >
              Get Security Whitepaper
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
