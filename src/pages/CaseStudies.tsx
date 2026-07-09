import React from "react";
import { PageId } from "../types";
import { 
  Building2, TrendingUp, Sparkles, ShieldCheck, 
  ArrowRight, BarChart4, ChevronRight, CheckCircle2 
} from "lucide-react";

interface CaseStudiesProps {
  setCurrentPage: (page: PageId) => void;
}

export default function CaseStudies({ setCurrentPage }: CaseStudiesProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const caseStudiesList = [
    {
      id: "apex-health",
      client: "Apex Health Group",
      industry: "Biotech & Clinical Logistics",
      title: "How Apex Health Automated Patient Medical Indexing with Absolute Privacy Security",
      summary: "Under HIPAA-governed administrative frameworks, Apex Health integrated Patient Record parsing pipelines. Administrative cost was cut by 94% with zero shared-tenant cloud logs.",
      metrics: [
        { label: "Admin Cost Cut", value: "94%" },
        { label: "Patient Records Parsed", value: "840K+" },
        { label: "Compliance Incidents", value: "0" }
      ],
      before: "Administrative workers manually spent 38 minutes reading scanned doctor notes, manually cataloging medicine schemas, and typing details into isolated CRMs.",
      after: "Scans instantly fire a LocalEdge Node Trigger. Raw files execute inside air-gapped secure local sandboxes, extracting rigid metadata and syncing records to secure ledgers in 4.1 seconds."
    },
    {
      id: "acme-logistics",
      client: "Acme Fleet Group",
      industry: "Global Cargo Transport",
      title: "Scaling Intelligent Cargo Fleet Routing Corridors Dynamically",
      summary: "Acme automated 4.2 million cargo dispatch pipelines. Standard execution delivery rates surged by 12x with autonomous weather mitigation loops.",
      metrics: [
        { label: "Process Acceleration", value: "12x" },
        { label: "Active Nodes Deployed", value: "1,200" },
        { label: "Manual Override Interventions", value: "<0.1%" }
      ],
      before: "Routing systems frequently lagged. Sudden weather incidents blocked routes, causing manual inventory dispatch dispatching delays of up to 4 hours.",
      after: "Distributed edge processes calculate routing lines in sub-120ms. When route incidents manifest, cognitive fallback loops instantly compute alternatives, automatically notifying warehousing dispatches."
    }
  ];

  return (
    <div id="case-studies-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Spotlight design spotlights */}
      <div className="absolute top-[15%] right-[20%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Partner Case Studies
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Realized Results Delivered on Decentralized Edge Networks
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            See how enterprise leaders leverage LocalEdge to eliminate legacy friction, accelerate throughput, and maintain absolute compliance.
          </p>
        </div>

        {/* Detailed Case studies wrapper */}
        <div className="space-y-16" id="case-studies-list-grid">
          {caseStudiesList.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 lg:p-8 hover:border-neutral-800 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header metadata */}
              <div className="flex justify-between items-start border-b border-neutral-900 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">ENTERPRISE CLIENT STUDY</span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight mt-1">{caseStudy.client}</h3>
                  <p className="text-xs text-blue-400 mt-0.5">{caseStudy.industry}</p>
                </div>
                
                <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 text-[9px] font-mono text-neutral-400 rounded uppercase">
                  VERIFIED AUDIT STATUS
                </span>
              </div>

              {/* Title description */}
              <h4 className="font-sans font-bold text-base sm:text-lg text-white mb-3">
                {caseStudy.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                {caseStudy.summary}
              </p>

              {/* Metrics Highlights block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-neutral-900/60 py-6 mb-6">
                {caseStudy.metrics.map((met, idx) => (
                  <div key={idx} className="bg-neutral-950 p-4 rounded-lg border border-neutral-900 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase">{met.label}</div>
                      <div className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight mt-1">{met.value}</div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-teal-400 shrink-0" />
                  </div>
                ))}
              </div>

              {/* Before and After details layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Before side */}
                <div className="p-4 bg-neutral-950/45 border border-red-500/10 rounded-lg">
                  <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider font-semibold mb-2">Legacy Operations (Before)</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {caseStudy.before}
                  </p>
                </div>

                {/* After side */}
                <div className="p-4 bg-neutral-950/45 border border-emerald-500/10 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2">Automated Edge Pipeline (After)</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {caseStudy.after}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-8 text-center max-w-3xl mx-auto mt-16">
          <h3 className="font-sans font-bold text-xl text-white tracking-tight">
            Ready to achieve verified results for your team?
          </h3>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed max-w-xl mx-auto">
            Book an integration workshop. Our developers can outline potential latency and speedup models tailored to your legacy SaaS tools.
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-blue-500/20 active:translate-y-0.5 transition-colors"
          >
            Schedule Integration Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
