import React from "react";
import { PageId } from "../types";
import { 
  Sparkles, Award, ShieldCheck, HeartHandshake, 
  ChevronRight, ArrowRight, Activity, Users2 
} from "lucide-react";

interface AboutProps {
  setCurrentPage: (page: PageId) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const values = [
    {
      title: "Absolute Sovereignty",
      desc: "We prioritize patient records privacy, financial ledger security, and corporate network compliance over public model fine-tuning logs."
    },
    {
      title: "Sub-Second Latency Tethers",
      desc: "Friction hinders productivity. Our distributed orchestrator is engineered to bypass legacy SaaS bottlenecks for near-instant dispatches."
    },
    {
      title: "Architectural Clarity",
      desc: "Our visual Workflow Studio empowers developers and managers alike to design, test, and audit pipelines securely, with zero black box logic."
    }
  ];

  const team = [
    { name: "Dr. Elena Rostova", role: "Co-Founder & Chief Scientist", bio: "Former DeepMind Senior Research Scientist, Ph.D. in Machine Learning from Stanford." },
    { name: "Julian Drake", role: "Co-Founder & CEO", bio: "Automation veteran, previously built high-throughput financial routing systems at Stripe." },
    { name: "Aria Thorne", role: "VP of Enterprise Security", bio: "SOC-2/HIPAA compliance architect, former lead infrastructure engineer at Vercel." }
  ];

  return (
    <div id="about-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Background radial spotlights */}
      <div className="absolute top-[10%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Corporate Blueprint
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Backing Secure Intelligence Workflows Everywhere
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Based in Mumbai, India. LocalEdge was established in 2024 by deep learning researchers and enterprise automation architects to secure and scale local cognitive processes.
          </p>
        </div>

        {/* Corporate timeline / story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 pb-12 border-b border-neutral-900/60">
          <div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">OUR FOUNDATION STORY</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">
              Securing Decentralized Ledger Flows Safely
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
              As AI models surged in capability, standard enterprise pipelines encountered a fatal paradox: using public cloud APIs compromised patient records privacy and exposed proprietary secrets.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
              Julian Drake and Dr. Elena Rostova set out to resolve this friction. By developing air-gapped sandboxes, distributed node schedulers, and an intuitive visual Workflow Studio, they established the premier gateway for enterprise cognitive automation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-left shrink-0">
                <span className="text-lg font-bold text-white font-mono">$18.4M</span>
                <span className="text-[10px] text-neutral-500 font-mono block uppercase">Seed Series Funding</span>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-left shrink-0">
                <span className="text-lg font-bold text-white font-mono">1.2B+</span>
                <span className="text-[10px] text-neutral-500 font-mono block uppercase">Transactions Securely Run</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
            <h3 className="font-sans font-bold text-base text-white mb-4 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Elite Venture Backers</span>
            </h3>
            
            <p className="text-xs text-neutral-400 leading-relaxed">
              LocalEdge is backed by global preeminent deep tech VCs, supporting our mission to scale sovereign, high-performance node orchestrators.
            </p>

            <div className="mt-6 space-y-3">
              <div className="p-3 bg-neutral-900/45 rounded-lg border border-neutral-900 flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-300">Andreessen Ventures (Partner Node)</span>
                <span className="text-[9px] font-mono text-neutral-500">SEED INVESTOR</span>
              </div>
              <div className="p-3 bg-neutral-900/45 rounded-lg border border-neutral-900 flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-300">Veridian Capital</span>
                <span className="text-[9px] font-mono text-neutral-500">STRATEGIC FUND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Values Block */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">GUIDING DIRECTIVES</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">Our Core Philosophies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="about-values-grid">
            {values.map((v, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900/30 border border-neutral-900 rounded-xl p-6 hover:border-neutral-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400">0{idx + 1}</span>
                </div>
                <h3 className="font-sans font-semibold text-base text-white">{v.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Founders bios */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 lg:p-8">
          <div className="flex justify-between items-center mb-8 border-b border-neutral-900 pb-4">
            <div className="flex items-center space-x-2.5">
              <Users2 className="w-5 h-5 text-blue-400" />
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white">Executive Board & Researchers</h3>
            </div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">ACTIVE v4 CORE MEMBERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="about-team-grid">
            {team.map((t, idx) => (
              <div key={idx} className="bg-neutral-900/25 border border-neutral-900 rounded-xl p-5 hover:border-neutral-800 transition-colors">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-[10px] font-mono text-blue-400 mt-0.5 uppercase">{t.role}</div>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
