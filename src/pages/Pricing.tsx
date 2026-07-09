import React, { useState } from "react";
import { PageId } from "../types";
import { 
  Check, Info, HelpCircle, ArrowRight, ShieldCheck, 
  Layers, Users2, Database 
} from "lucide-react";

interface PricingProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Pricing({ setCurrentPage }: PricingProps) {
  const [agentCount, setAgentCount] = useState<number>(5);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateCost = (basePrice: number) => {
    const multi = billingCycle === "yearly" ? 0.8 : 1.0; // 20% discount
    return Math.floor(basePrice * agentCount * multi);
  };

  const featuresList = {
    professional: [
      "Up to 50 concurrent active agents",
      "Visual Workflow Studio access",
      "Standard SOC-2 compliance check",
      "50+ Native legacy adapters",
      "Email & Slack team support",
      "Immutable transaction audit proof"
    ],
    scale: [
      "Unlimited active concurrent agents",
      "Custom ML model weight fine-tuning",
      "Priority sub-120ms execution priority",
      "Dedicated, isolated edge sandboxes",
      "HIPAA compliance rails",
      "24/7 Priority Integration engineer"
    ]
  };

  return (
    <div id="pricing-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Glow spotlights */}
      <div className="absolute top-[10%] left-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Honest Enterprise Pricing
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Predictable Plans to Scale Your Intelligence Sandbox
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Choose from standard secure hosted tiers, or craft custom VPC on-premise local deployments backed by dedicated SLA parameters.
          </p>

          {/* Billing Toggle selector */}
          <div className="mt-8 inline-flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                billingCycle === "monthly" ? "bg-neutral-850 text-white shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center space-x-1.5 ${
                billingCycle === "yearly" ? "bg-neutral-850 text-white shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>Yearly billing</span>
              <span className="px-1.5 py-0.2 bg-teal-500/10 border border-teal-500/20 text-[9px] font-mono text-teal-400 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Estimator Slider */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-neutral-900 mb-6 space-y-4 md:space-y-0">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Dynamic Cost Estimator</span>
              <h3 className="font-sans font-bold text-lg text-white mt-1">Estimate Your Scaling Volume</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Drag the indicator to input the total active concurrent agents you expect to deploy across your edge network.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800">
              <span className="text-sm font-bold text-white font-mono">{agentCount}</span>
              <span className="text-xs text-neutral-500 font-mono">ACTIVE AGENTS</span>
            </div>
          </div>

          <div className="space-y-6">
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={agentCount} 
              onChange={(e) => setAgentCount(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
            />
            
            <div className="flex justify-between text-[10px] font-mono text-neutral-500">
              <span>1 AGENT</span>
              <span>25 AGENTS</span>
              <span>50+ AGENTS</span>
            </div>
          </div>
        </div>

        {/* Pricing Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16" id="pricing-tier-cards-grid">
          
          {/* Professional Card */}
          <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-neutral-800 transition-all relative overflow-hidden group">
            <div>
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase">PROFESSIONAL WORKSPACE</span>
              <h3 className="font-sans font-bold text-2xl text-white tracking-tight mt-1">Professional</h3>
              <p className="text-xs text-neutral-400 mt-2">Deploy secure hosted agents with modular, pre-configured legacy adapters.</p>
              
              <div className="mt-6">
                <span className="text-3xl font-sans font-bold text-white">${calculateCost(79)}</span>
                <span className="text-xs text-neutral-500 font-mono"> / mo</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 mt-1">Base rate: $79/mo per active agent</div>

              {/* Feature list */}
              <div className="mt-8 space-y-3.5 border-t border-neutral-900/80 pt-6">
                {featuresList.professional.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-8 w-full py-2.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs font-semibold text-white rounded-lg transition-colors"
            >
              Start Free Trial Sandbox
            </button>
          </div>

          {/* Scale Tier Card (Featured) */}
          <div className="bg-neutral-900/50 border border-blue-500/50 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-blue-400/80 transition-all relative overflow-hidden shadow-2xl shadow-blue-500/5">
            <div className="absolute top-0 right-0 bg-blue-500 text-white font-mono text-[9px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              POPULAR CHOICES
            </div>
            
            <div>
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase">SCALE PLATFORM</span>
              <h3 className="font-sans font-bold text-2xl text-white tracking-tight mt-1">Scale Tiers</h3>
              <p className="text-xs text-neutral-400 mt-2">For growing organizations requiring dedicated compliance guardrails and low-latency.</p>
              
              <div className="mt-6">
                <span className="text-3xl font-sans font-bold text-white">${calculateCost(299)}</span>
                <span className="text-xs text-neutral-500 font-mono"> / mo</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 mt-1">Base rate: $299/mo per active agent</div>

              {/* Feature list */}
              <div className="mt-8 space-y-3.5 border-t border-neutral-900/80 pt-6">
                {featuresList.scale.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-8 w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
            >
              Access Scale Sandbox
            </button>
          </div>

          {/* Custom Enterprise Card */}
          <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-neutral-800 transition-all relative overflow-hidden group">
            <div>
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase">ON-PREM SECURITY</span>
              <h3 className="font-sans font-bold text-2xl text-white tracking-tight mt-1">Bespoke Enterprise</h3>
              <p className="text-xs text-neutral-400 mt-2">Air-gapped secure on-premise deployments with custom regulatory compliance rails.</p>
              
              <div className="mt-6">
                <span className="text-3xl font-sans font-bold text-white">Custom Tiers</span>
                <span className="text-xs text-neutral-500 font-mono"> / annual SLA</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 mt-1">Volume and regional discounts apply</div>

              {/* Feature list */}
              <div className="mt-8 space-y-3.5 border-t border-neutral-900/80 pt-6">
                <div className="flex items-start space-x-2.5 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Air-gapped on-premise local node deployment</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>SOC-2, HIPAA & GDPR compliance certification</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom fine-tuned proprietary model weights</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated, multi-region integration support team</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-8 w-full py-2.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs font-semibold text-white rounded-lg transition-colors"
            >
              Consult Security Architects
            </button>
          </div>

        </div>

        {/* Security & Isolation Disclaimer details */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 text-center max-w-2xl mx-auto flex items-start space-x-4 text-left">
          <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-white">Sovereignty and Absolute Privacy Guarantee</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              We pledge to never utilize patient files, financial records, or client metadata for open-source model training logs. Sandboxes are completely isolated, ensuring standard VPC network compliance.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
