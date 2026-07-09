import React from "react";
import { PageId } from "../types";
import { 
  Layers, Cpu, Volume2, Workflow, CheckCircle2, 
  Terminal, ShieldCheck, Database, ArrowRight 
} from "lucide-react";

interface ProductsProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Products({ setCurrentPage }: ProductsProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const productDetails = [
    {
      title: "AI Agent Cloud",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      tagline: "Scale workflows on autonomous virtual machines",
      desc: "Deploy, monitor, and scale millions of autonomous processes concurrently. Underpinned by stateless serverless architectures, custom load balancing, and immediate telemetry indexing.",
      specs: [
        "Serverless auto-scaling node orchestration",
        "Stateless VM state recovery modules",
        "Granular REST & WebSocket event endpoints",
        "Immediate OpenTelemetry log shipping"
      ],
      accent: "bg-blue-600"
    },
    {
      title: "Local Edge Compute",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      tagline: "Run high-reasoning models strictly on-premise",
      desc: "Air-gapped security for sensitive enterprise operations. Package fine-tuned LLMs, neural parsers, and custom compliance rules directly onto your local VPC clusters, removing public internet routes.",
      specs: [
        "Proprietary model weight fine-tuning",
        "Air-gapped sandbox process boundaries",
        "Strict compliance VPC path routing",
        "Offline database connectors ready-to-run"
      ],
      accent: "bg-purple-600"
    },
    {
      title: "Voice AI API",
      icon: <Volume2 className="w-5 h-5 text-teal-400" />,
      tagline: "Ultra-expressive conversational audio pipelines",
      desc: "Sub-120ms latency voice comprehension and generation. Synthesize emotionally resonant speech, capture customer requests, and synchronize transactions with local ledgers in real-time.",
      specs: [
        "PCM Little-endian little latency encoding",
        "Intent classification mapping algorithms",
        "Multi-speaker voice synthesis voices",
        "Secure bidirectional websocket streaming"
      ],
      accent: "bg-teal-600"
    },
    {
      title: "Workflow Studio",
      icon: <Workflow className="w-5 h-5 text-rose-400" />,
      tagline: "Visual node workspace for design and audit",
      desc: "An intuitive drag-and-drop workspace to construct, debug, and test multi-node automated sequences. Connect inputs, structure AI reasoning models, specify conditions, and monitor logs live.",
      specs: [
        "Drag-and-drop node graph canvas UI",
        "Visual variables mapping panel",
        "Immediate dry-run log stream simulator",
        "Immutable transaction audit proofing"
      ],
      accent: "bg-rose-600"
    }
  ];

  return (
    <div id="products-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Background spotlights */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-2.5 py-0.5 bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-400 rounded-full uppercase font-semibold">
            Product Portfolio
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            High-Performance AI Products Engineered for Enterprise Uptime
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            From hyper-scalable cloud processes to secure local on-premise model execution, our products furnish elite startups and Fortune 500 networks with sub-second delivery.
          </p>
        </div>

        {/* Detailed Product List */}
        <div className="space-y-16" id="products-list-wrapper">
          {productDetails.map((prod, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12 border-b border-neutral-900/60 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Text Side */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                      {prod.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">PRODUCT AREA 0{index + 1}</span>
                      <h2 className="font-sans font-bold text-2xl text-white tracking-tight">{prod.title}</h2>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-neutral-400 uppercase mt-2 tracking-wider">{prod.tagline}</p>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">{prod.desc}</p>

                  {/* Bullet specs list */}
                  <div className="mt-6 space-y-2">
                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleNavClick("contact")}
                    className="mt-6 px-4 py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs font-semibold text-white rounded-lg transition-colors inline-flex items-center space-x-1.5"
                  >
                    <span>Request Technical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Visual / Code Block side */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                    
                    {/* Mock editor header */}
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-3 mb-4">
                      <div className="flex space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500">config/adapters/{prod.title.toLowerCase().replace(/\s/g, "-")}.json</span>
                    </div>

                    {/* Syntax codes */}
                    <pre className="font-mono text-[10px] sm:text-xs text-neutral-400 overflow-x-auto leading-normal whitespace-pre-wrap">
                      <code>
                        {`{
  "product": "${prod.title}",
  "engine": "LocalEdge-Core-Orchestrator-v4.1",
  "isolated_sandbox": true,
  "telemetry": "open_telemetry_enabled",
  "compliance": ["HIPAA", "SOC-2", "ISO-27001"],
  "security_handshake": "tokenized_crypto_handshake",
  "max_concurrency": "unlimited_scaling",
  "average_execution_latency": "sub-120ms"
}`}
                      </code>
                    </pre>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Ending CTA block */}
        <div className="bg-neutral-950/60 border border-neutral-900 rounded-xl p-8 text-center max-w-3xl mx-auto mt-12">
          <h3 className="font-sans font-bold text-xl text-white tracking-tight">Need a custom localized model fine-tuned?</h3>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed max-w-xl mx-auto">
            Our ML research team specializes in aligning raw model weights, developing proprietary compliance schemas, and scaling sandboxes to meet specific regulatory directives.
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-blue-500/20 active:translate-y-0.5 transition-all"
          >
            Consult our ML Team
          </button>
        </div>

      </div>
    </div>
  );
}
