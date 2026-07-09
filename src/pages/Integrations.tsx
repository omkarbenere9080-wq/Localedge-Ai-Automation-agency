import React, { useState } from "react";
import { PageId } from "../types";
import { 
  Search, Grid, Link, ShieldCheck, CheckCircle2, 
  Terminal, HelpCircle, ArrowRight 
} from "lucide-react";

interface IntegrationsProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Integrations({ setCurrentPage }: IntegrationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "erp" | "database" | "comms" | "crm">("all");

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const appsList = [
    { name: "SAP S/4HANA Ledger", category: "erp", desc: "Sync compliance ledgers, accounts, and itemized invoice rates securely.", status: "Featured" },
    { name: "Salesforce CRM", category: "crm", desc: "Automate custom pipeline workflows and update record criteria live.", status: "Connected" },
    { name: "PostgreSQL Database", category: "database", desc: "Query, mutate, and write local relational records on air-gapped sandboxes.", status: "Featured" },
    { name: "Slack Workspaces", category: "comms", desc: "Dispatch real-time warning alerts and workflow reports directly to channels.", status: "Connected" },
    { name: "Snowflake Cloud", category: "database", desc: "Index structured cognitive metadata into corporate data warehouses.", status: "Available" },
    { name: "Zendesk Support", category: "crm", desc: "Classify inbound customer tickets and schedule diagnostic follow-ups.", status: "Available" },
    { name: "HubSpot Marketing", category: "crm", desc: "Verify lead metadata parameters and sync contact list details.", status: "Available" },
    { name: "ServiceNow ITSM", category: "erp", desc: "Trigger automated infrastructure dispatches when systems report warnings.", status: "Featured" },
    { name: "AWS S3 Storage", category: "database", desc: "Pull scanned document attachments securely from standard cloud buckets.", status: "Connected" }
  ];

  const filteredApps = appsList.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || app.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="integrations-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Background radial spotlights */}
      <div className="absolute top-[10%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Native Connectors
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Securely Connect Your Entire Enterprise Tech Stack
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            LocalEdge features ready-to-run secure adapters to query, mutate, and sync fields across industry-standard business applications without rewriting legacy code.
          </p>
        </div>

        {/* Directory Controls */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4">
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === "all" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                All Adapters ({appsList.length})
              </button>
              <button
                onClick={() => setActiveCategory("erp")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === "erp" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                ERP & Finance
              </button>
              <button
                onClick={() => setActiveCategory("database")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === "database" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                Databases
              </button>
              <button
                onClick={() => setActiveCategory("crm")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === "crm" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                CRM
              </button>
              <button
                onClick={() => setActiveCategory("comms")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === "comms" ? "bg-neutral-900 text-white border border-neutral-800" : "text-neutral-450 hover:text-white"
                }`}
              >
                Comms
              </button>
            </div>

            {/* Custom Search bar */}
            <div className="relative flex-grow max-w-sm">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search connected adapters..."
                className="w-full bg-neutral-900 border border-neutral-800 text-white text-xs rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
              />
            </div>

          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="integrations-list-grid">
          {filteredApps.map((app, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/30 border border-neutral-900 rounded-xl p-5 hover:border-neutral-800 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                    <Grid className="w-5 h-5 text-blue-400" />
                  </div>

                  <span className={`px-2 py-0.5 border text-[9px] font-mono font-medium rounded uppercase ${
                    app.status === "Featured" 
                      ? "bg-teal-500/10 border-teal-500/20 text-teal-400" 
                      : app.status === "Connected" 
                        ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                        : "bg-neutral-950 border-neutral-800 text-neutral-400"
                  }`}>
                    {app.status}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-white">{app.name}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{app.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono">
                <span className="text-neutral-500 uppercase">CATEGORY: {app.category}</span>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-blue-400 hover:underline flex items-center space-x-1"
                >
                  <span>Sync Code</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {filteredApps.length === 0 && (
            <div className="col-span-full text-center py-12 bg-neutral-900/10 border border-neutral-900 rounded-xl">
              <span className="text-neutral-500 text-sm font-sans">No native adapters match your search filters.</span>
            </div>
          )}
        </div>

        {/* Security / Handshake assurance */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 text-center max-w-2xl mx-auto flex items-start space-x-4 text-left">
          <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-white">OAuth2 Cryptographic Handshakes Guaranteed</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Every connected adapter secures API credentials with isolated tokenization vaults. Data passes securely through dedicated micro-sandbox instances, retaining full compliant isolation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
