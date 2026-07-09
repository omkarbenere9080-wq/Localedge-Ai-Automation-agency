import React from "react";
import { PageId } from "../types";
import DashboardMockup from "../components/DashboardMockup";
import WorkflowBuilder from "../components/WorkflowBuilder";
import { 
  Sparkles, ShieldCheck, Zap, ArrowRight, Building2, 
  Cpu, Users2, Database, Quote, HelpCircle, ChevronRight, Activity
} from "lucide-react";

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
  openChat: () => void;
}

export default function Home({ setCurrentPage, openChat }: HomeProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clientLogos = [
    { name: "Acme Group", industry: "Biotech Logistics" },
    { name: "Stripe Corp", industry: "SaaS Scaling" },
    { name: "Veridian Bank", industry: "Financial Orchestration" },
    { name: "Apex Health", industry: "HIPAA Cloud Records" },
    { name: "Novartis Systems", industry: "E-Commerce Dispatch" },
  ];

  const coreFeatures = [
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: "Sub-120ms Latency Engine",
      description: "Distributed execution node scheduling architecture bypasses standard network bottlenecks, achieving raw model results near-instantly."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      title: "Immutable Compliance Log",
      description: "Immutable transaction audit trails. Strictly audited for SOC-2 Type II, HIPAA compliance standards, and ISO 27001 data isolation."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Autonomous Decision Loops",
      description: "Advanced cognitive routing modules resolve branching conditionals without requiring constant API roundtrips."
    },
    {
      icon: <Database className="w-5 h-5 text-rose-400" />,
      title: "Local Edge Sandbox Execution",
      description: "Isolate enterprise workflows into air-gapped on-premise local server systems, eliminating external data breaches."
    }
  ];

  const testimonials = [
    {
      quote: "Deploying LocalEdge transformed our Clinical operations. We integrated patient record parsing directly into our CRM in less than 48 hours, keeping patient records fully secure, in absolute HIPAA alignment.",
      author: "Dr. Sarah Jenkins",
      role: "VP of Digital Health",
      company: "Apex Health Corp",
      metric: "94% Admin Time Saved"
    },
    {
      quote: "We automated over 4.2 million logistics routing dispatches using LocalEdge Agent Cloud. Standard latency plummeted from seconds to sub-100ms, with fully autonomous error mitigation when route incidents occurred.",
      author: "Markus Vane",
      role: "Director of Supply Chain",
      company: "Acme Group Logistics",
      metric: "12x Process Speedup"
    }
  ];

  const faqs = [
    {
      q: "How does LocalEdge guarantee data sovereignty?",
      a: "Our Local Edge Compute product packages custom micro-models directly on your on-premise hardware. Data never exits your internal VPC, ensuring absolute alignment with financial, healthcare, and federal regulations."
    },
    {
      q: "Can I connect my proprietary enterprise databases?",
      a: "Yes. Our visual Workflow Studio features ready-to-run secure adapters for PostgreSQL, Oracle DB, Salesforce, SAP, and Snowflake, complete with real-time tokenized security handshakes."
    },
    {
      q: "Is there a limit to the number of concurrent active agents?",
      a: "Our AI Agent Cloud is engineered on top of serverless, auto-scaling orchestrators. Whether you are running 5 active agents or 5,000, latency and resource allocation remain fully optimized."
    }
  ];

  return (
    <div id="home-page" className="relative text-neutral-300">
      
      {/* Background radial spotlights */}
      <div className="absolute top-0 inset-x-0 h-[700px] bg-gradient-to-b from-blue-950/15 via-neutral-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          {/* Top Banner Tag */}
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1 mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-mono text-neutral-300 font-semibold tracking-wide">
              REVOLUTIONIZING ENTERPRISE ORCHESTRATION &middot; v4.11
            </span>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
          </div>

          {/* Large display Typography */}
          <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Secure, Ultra-Fast <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-teal-400 bg-clip-text text-transparent">
              AI Automation
            </span>{" "}
            for Local Intelligence
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Orchestrate high-fidelity autonomous workflows on our decentralized edge nodes. Eliminate latency, secure proprietary data, and connect legacy apps with sub-second delivery.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Enterprise Access
            </button>
            <button
              onClick={openChat}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg transition-all"
            >
              Consult AI Assistant
            </button>
          </div>

          {/* Key Metrics strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-neutral-900/60">
            <div>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">sub-120ms</div>
              <div className="text-xs font-mono text-neutral-500 uppercase mt-1">Average Latency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">99.99%</div>
              <div className="text-xs font-mono text-neutral-500 uppercase mt-1">Uptime SLA Guarantee</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">100%</div>
              <div className="text-xs font-mono text-neutral-500 uppercase mt-1">Sovereign Data Storage</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">12x</div>
              <div className="text-xs font-mono text-neutral-500 uppercase mt-1">Process Acceleration</div>
            </div>
          </div>

        </div>
      </section>

      {/* Partners banner */}
      <section className="py-6 border-y border-neutral-900/60 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <span className="text-xs font-mono font-semibold text-neutral-500 tracking-wider uppercase">
            TRUSTED BY ELITE GLOBAL ENTERPRISES:
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex flex-col items-start px-2">
                <span className="text-sm font-bold text-neutral-300 font-sans tracking-tight hover:text-white transition-colors cursor-default">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono text-neutral-600 uppercase">
                  {logo.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Core Control Slot (DashboardMockup) */}
      <section className="py-20 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-sans font-bold text-2xl sm:text-4xl text-white tracking-tight">
              A Dynamic Dashboard Built for Modern Engineers
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Experience the control. Toggle simulated edge agents, track latency variance across multi-nodes, and analyze storage indicators in our live interactive cockpit below.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* Interactive Workflow Builder Section */}
      <section className="py-20 bg-neutral-950/40 border-t border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-12">
            <div className="lg:col-span-2 space-y-5">
              <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-400 rounded uppercase font-semibold">
                Modular Orchestrator
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Visually Design Multi-Node AI Blueprints
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect triggers, inject rigid Gemini processing models, audit compliances, and push results securely to legacy ledgers. Build, configure, and inspect directly in the visual builder canvas.
              </p>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-neutral-300">Strict error self-healing and recovery states.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-neutral-300">Cryptographic audit log proofing.</span>
                </div>
              </div>
              <button
                onClick={() => handleNavClick("products")}
                className="mt-4 flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
              >
                <span>Discover Workflow Studio capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="lg:col-span-3">
              <WorkflowBuilder />
            </div>
          </div>
        </div>
      </section>

      {/* Bento feature grid */}
      <section className="py-20 bg-neutral-950/20 border-t border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-widest">PRODUCT ARCHITECTURE</span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight mt-1">
              Secured for High-Performance Enterprise Scale
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Every system is engineered from the ground up to respect absolute data sovereignty, high throughput, and developer-first configuration structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="bento-feature-grid">
            {coreFeatures.map((feat, index) => (
              <div 
                key={index} 
                className="bg-neutral-900/30 border border-neutral-900/80 rounded-xl p-6 hover:border-neutral-800 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-sans font-semibold text-lg text-white">{feat.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-950/50 border-t border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">SUCCESS OUTCOMES</span>
                <h2 className="font-sans font-bold text-3xl text-white tracking-tight mt-1">
                  Validated by Enterprise Operators
                </h2>
                <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                  Startups, clinical health centers, and global logistics corridors rely on LocalEdge to process core operational data instantly.
                </p>
              </div>
              
              <button
                onClick={() => handleNavClick("casestudies")}
                className="hidden lg:flex items-center space-x-1 text-sm font-semibold text-blue-400 hover:text-white transition-colors mt-6"
              >
                <span>Read all customer stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((test, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-6 h-6 text-neutral-700 mb-4" />
                    <p className="text-xs text-neutral-300 italic leading-relaxed font-sans">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold text-white">{test.author}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{test.role}, <span className="text-neutral-400">{test.company}</span></div>
                    </div>
                    <div className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-md font-semibold shrink-0">
                      {test.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-950/20 border-t border-neutral-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">COMMON QUESTIONS</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">Frequently Answered Queries</h2>
          </div>

          <div className="space-y-4" id="faq-accordians">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900/20 border border-neutral-900 rounded-xl p-5 hover:border-neutral-800 transition-colors"
              >
                <h3 className="text-sm font-semibold text-white flex items-start space-x-2.5">
                  <HelpCircle className="w-4.5 h-4.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 relative overflow-hidden border-t border-neutral-900">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Ready to Automate with Absolute Security?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Deploy cognitive edge agents, construct custom multi-node pipelines, and transform raw operations. Speak with our experts or test your first agent sandbox today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-500/20 active:translate-y-0.5 transition-all"
            >
              Consult an Integration Engineer
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white font-semibold text-sm rounded-lg transition-colors"
            >
              See Pricing Options &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
