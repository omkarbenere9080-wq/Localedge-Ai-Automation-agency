import React, { useState, useEffect } from "react";
import { 
  Play, Pause, RefreshCw, Layers, ShieldCheck, Zap, 
  Terminal, Server, CheckCircle2, TrendingUp, AlertCircle 
} from "lucide-react";

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"api" | "cpu" | "agents">("api");
  const [latencyData, setLatencyData] = useState<number[]>([120, 115, 125, 105, 140, 110, 128, 112, 102, 125, 95, 108, 98, 105]);
  const [agentsActive, setAgentsActive] = useState([
    { id: "A1", name: "Inbound Email Classifier", type: "Cognitive Dispatch", status: "running", tasks: 1420 },
    { id: "A2", name: "HIPAA Record Summarizer", type: "LLM Clinical Extraction", status: "running", tasks: 890 },
    { id: "A3", name: "Autonomous Logistics Router", type: "Route Optimizer Model", status: "idle", tasks: 310 },
    { id: "A4", name: "Threat Vector Auditor", type: "Anomaly Pattern Engine", status: "running", tasks: 2240 },
  ]);
  const [isLive, setIsLive] = useState(true);
  const [systemLoad, setSystemLoad] = useState(38);
  const [totalAutomations, setTotalAutomations] = useState(481230);

  // Live data simulation
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      // Add live data variance
      setLatencyData(prev => {
        const next = [...prev.slice(1)];
        const variance = Math.floor(Math.random() * 30) - 15;
        const base = activeTab === "api" ? 110 : activeTab === "cpu" ? 140 : 80;
        const newVal = Math.max(40, Math.min(250, base + variance));
        next.push(newVal);
        return next;
      });

      // Variance in system load
      setSystemLoad(prev => {
        const change = Math.floor(Math.random() * 8) - 4;
        return Math.max(10, Math.min(95, prev + change));
      });

      // Increment automations
      setTotalAutomations(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, [isLive, activeTab]);

  const toggleAgent = (id: string) => {
    setAgentsActive(prev => 
      prev.map(agent => 
        agent.id === id 
          ? { ...agent, status: agent.status === "running" ? "idle" : "running" }
          : agent
      )
    );
  };

  const getChartPoints = () => {
    const width = 500;
    const height = 140;
    const maxVal = 250;
    const paddingX = 10;
    const paddingY = 15;
    
    return latencyData.map((val, index) => {
      const x = paddingX + (index * (width - 2 * paddingX)) / (latencyData.length - 1);
      const y = height - paddingY - ((val / maxVal) * (height - 2 * paddingY));
      return { x, y };
    });
  };

  const points = getChartPoints();
  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaData = `${pathData} L ${points[points.length - 1].x} 125 L ${points[0].x} 125 Z`;

  return (
    <div 
      id="dashboard-container"
      className="relative bg-neutral-950 border border-neutral-800/80 rounded-xl overflow-hidden shadow-2xl p-6"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-900 pb-4 mb-5 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <div>
            <h3 className="font-sans font-semibold text-sm text-white">LocalEdge Core Control</h3>
            <p className="text-[11px] font-mono text-neutral-500">SYSTEM ID: SEC_NODE_NODE_411</p>
          </div>
        </div>

        {/* Live Controller / Tabs */}
        <div className="flex items-center space-x-3 self-stretch sm:self-auto justify-between sm:justify-start">
          <div className="bg-neutral-900 p-0.5 rounded-lg flex space-x-1 border border-neutral-800/60">
            <button
              onClick={() => setActiveTab("api")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "api" ? "bg-neutral-850 text-white shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              Latency
            </button>
            <button
              onClick={() => setActiveTab("cpu")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "cpu" ? "bg-neutral-850 text-white shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              Node Load
            </button>
            <button
              onClick={() => setActiveTab("agents")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "agents" ? "bg-neutral-850 text-white shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              Agents ({agentsActive.filter(a => a.status === "running").length})
            </button>
          </div>

          <button
            onClick={() => setIsLive(!isLive)}
            title={isLive ? "Pause simulation" : "Resume simulation"}
            className="p-1.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors"
          >
            {isLive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Stats Side */}
        <div className="lg:col-span-1 flex flex-col justify-between space-y-4">
          <div className="bg-neutral-900/40 border border-neutral-900 rounded-lg p-4 flex flex-col justify-between h-[100px] relative overflow-hidden group hover:border-neutral-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-neutral-500">AUTOMATED TRANSACTIONS</span>
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="mt-2 text-2xl font-bold font-sans tracking-tight text-white">
              {totalAutomations.toLocaleString()}
            </div>
            <div className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+410/min edge rate</span>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-900 rounded-lg p-4 flex flex-col justify-between h-[100px] relative overflow-hidden group hover:border-neutral-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-neutral-500">ACTIVE CPU WORKLOAD</span>
              <Server className="w-4 h-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-2xl font-bold font-sans tracking-tight text-white">{systemLoad}%</span>
                <span className="text-[10px] font-mono text-neutral-400">4x Local Edge Cores</span>
              </div>
              <div className="w-full bg-neutral-800/80 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    systemLoad > 80 ? "bg-red-500" : systemLoad > 60 ? "bg-amber-500" : "bg-blue-400"
                  }`} 
                  style={{ width: `${systemLoad}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-900 rounded-lg p-4 flex flex-col justify-between h-[100px] relative overflow-hidden group hover:border-neutral-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-neutral-500">TRUST INDEX</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="mt-2 text-2xl font-bold font-sans tracking-tight text-white">
              99.998%
            </div>
            <div className="text-[10px] font-mono text-neutral-400 flex items-center space-x-1 mt-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>SOC-2 compliance certified</span>
            </div>
          </div>
        </div>

        {/* Middle/Right Interactive Graphics */}
        <div className="lg:col-span-2 bg-neutral-900/30 border border-neutral-900 rounded-lg p-4 flex flex-col justify-between min-h-[320px]">
          
          {activeTab !== "agents" ? (
            /* Latency Graph View */
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-sans">
                    {activeTab === "api" ? "REST & WebSocket Delivery (ms)" : "Node Storage Load Capacity (GB)"}
                  </span>
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-neutral-500">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>Live Edge Stream</span>
                    </span>
                    <span>LIMIT: 250</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500">
                  {activeTab === "api" 
                    ? "Sub-100ms average dispatching across distributed edge networks. Low deviation spikes." 
                    : "Live server caching node allocation load across decentralized SSD volumes."}
                </p>
              </div>

              {/* Graphic Plot */}
              <div className="relative w-full h-36 border border-neutral-800/40 bg-neutral-950/40 rounded-lg mt-4 flex items-center justify-center overflow-hidden">
                
                {/* Horizontal Guide Lines */}
                <div className="absolute inset-x-0 top-1/4 border-b border-neutral-900/50" />
                <div className="absolute inset-x-0 top-1/2 border-b border-neutral-900/50" />
                <div className="absolute inset-x-0 top-3/4 border-b border-neutral-900/50" />

                {/* SVG Graph rendering */}
                <svg viewBox="0 0 500 140" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill area */}
                  <path d={areaData} fill="url(#areaGrad)" />
                  
                  {/* Stroke path */}
                  <path 
                    d={pathData} 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Highlighting active points */}
                  {points.map((p, i) => (
                    i === points.length - 1 ? (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="5" fill="#3b82f6" className="animate-ping" />
                        <circle cx={p.x} cy={p.y} r="3" fill="#60a5fa" />
                      </g>
                    ) : null
                  ))}
                </svg>

                {/* Floating tooltips */}
                <div className="absolute bottom-2 right-3 px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] font-mono rounded text-blue-400">
                  Val: {latencyData[latencyData.length - 1]}
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-neutral-500">
                <span>T-30s</span>
                <span>T-15s</span>
                <span className="text-blue-400">Live Tracker</span>
              </div>
            </div>
          ) : (
            /* Agents Control Grid */
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-sans mb-1">
                  Active Agent Process Orchestrator
                </h4>
                <p className="text-xs text-neutral-500">
                  Tapping into modular systems. Selectively deploy, pause, or query isolated VM agents directly on the LocalEdge node.
                </p>
              </div>

              {/* Node List */}
              <div className="space-y-2 mt-4 flex-grow">
                {agentsActive.map((agent) => (
                  <div 
                    key={agent.id}
                    className="flex justify-between items-center p-2.5 bg-neutral-950/60 border border-neutral-900/60 rounded-lg hover:border-neutral-800/80 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${agent.status === "running" ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"}`} />
                      <div>
                        <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                          <span>{agent.name}</span>
                          <span className="px-1 py-0.2 bg-neutral-900 text-[8px] text-neutral-400 font-mono border border-neutral-800 rounded">
                            {agent.id}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-neutral-500">{agent.type}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-[11px] font-mono font-medium text-neutral-300">{(agent.tasks + (isLive && agent.status === "running" ? Math.floor(Math.random() * 5) : 0)).toLocaleString()}</div>
                        <div className="text-[9px] font-mono text-neutral-500 uppercase">TASKS RUN</div>
                      </div>

                      <button
                        onClick={() => toggleAgent(agent.id)}
                        className={`px-2 py-1 rounded text-[10px] font-mono font-semibold transition-all ${
                          agent.status === "running" 
                            ? "bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20" 
                            : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
                        }`}
                      >
                        {agent.status === "running" ? "Pause" : "Deploy"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-neutral-500">
                <span className="flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3 text-neutral-600" />
                  <span>Individual sandboxes isolated</span>
                </span>
                <span className="text-neutral-400 font-mono">v4 VM System</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
