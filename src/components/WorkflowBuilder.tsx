import React, { useState, useEffect } from "react";
import { 
  Play, RotateCcw, AlertTriangle, CheckCircle2, ChevronRight, 
  Settings, Mail, Eye, Sparkles, FileSpreadsheet, ShieldAlert, FileText 
} from "lucide-react";

interface NodeDetails {
  id: string;
  label: string;
  type: "trigger" | "ai" | "decision" | "action";
  icon: React.ReactNode;
  description: string;
  config: Record<string, string>;
}

export default function WorkflowBuilder() {
  const [activeStep, setActiveStep] = useState<number>(-1); // -1 = idle, 0 = Trigger, 1 = AI, 2 = Branch, 3 = Output
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "System: Standing by. Press [RUN PIPELINE] to simulate automation."
  ]);
  const [selectedNode, setSelectedNode] = useState<string>("trigger-invoice");

  const nodes: NodeDetails[] = [
    {
      id: "trigger-invoice",
      label: "Inbound Document Received",
      type: "trigger",
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      description: "Triggered instantly when an attachment lands on the enterprise invoice inbox via custom API webhooks.",
      config: {
        "Source Channel": "shared-inbox@localedge-enterprise.com",
        "Payload Filter": "MimeType: application/pdf",
        "Deduplication": "Enabled (T-24h window)"
      }
    },
    {
      id: "ai-extract",
      label: "Gemini Clinical Metadata Extraction",
      type: "ai",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      description: "Leverages the server-side LLM model to scan unstructured text and extract key metadata into a rigid JSON structure.",
      config: {
        "AI Model": "gemini-3.5-flash",
        "System Instruction": "Extract patient IDs, itemized rates, total balance, billing vendor...",
        "Format Output": "Rigid Application Schema JSON"
      }
    },
    {
      id: "decision-credit",
      label: "Regulatory Audit Check",
      type: "decision",
      icon: <ShieldAlert className="w-4 h-4 text-amber-400" />,
      description: "Applies localized enterprise compliance logic. Auto-approves under $10,000; flags for audit if risk patterns match.",
      config: {
        "Condition A": "Metadata.total_amount <= $10,000",
        "Condition B": "Vendor.reputation_score >= 85",
        "Compliance Rule": "HIPAA-Guardrail-4"
      }
    },
    {
      id: "action-sync",
      label: "SAP ERP Ledger Push",
      type: "action",
      icon: <FileSpreadsheet className="w-4 h-4 text-emerald-400" />,
      description: "Securely pushes audited records into internal SAP general ledgers, firing standard webhook alerts to accounting channels.",
      config: {
        "ERP Adapter": "SAP S/4HANA Ledger V2",
        "Authentication": "OAuth2 Client-Credentials Token",
        "Audit Trail": "Immutable Cryptographic Log Saved"
      }
    }
  ];

  const runPipeline = () => {
    if (activeStep !== -1) return; // Already running
    
    setTerminalLogs([]);
    addLog("Initializing EdgeNode sandbox session...", "info");
    setActiveStep(0);
  };

  const addLog = (msg: string, type: "info" | "success" | "warn" | "error" = "info") => {
    const timestamp = new Date().toLocaleTimeString().split(" ")[0];
    const prefix = `[${timestamp}] [${type.toUpperCase()}]`;
    setTerminalLogs(prev => [...prev, `${prefix} ${msg}`]);
  };

  useEffect(() => {
    if (activeStep === -1) return;

    let timer: NodeJS.Timeout;

    if (activeStep === 0) {
      addLog("Node 'Inbound Document' triggered. Reading inbox webhook...", "info");
      timer = setTimeout(() => {
        addLog("Attachment fetched. File ID: pdf_998a12. size: 4.2MB.", "success");
        addLog("Transmitting payload to the AI Cognitive sandbox...", "info");
        setActiveStep(1);
      }, 1500);
    } else if (activeStep === 1) {
      addLog("Node 'Gemini Clinical Metadata' initialized. Accessing Gemini API...", "info");
      timer = setTimeout(() => {
        addLog("Prompt injected. Performing high-reasoning parsing...", "info");
        timer = setTimeout(() => {
          addLog("Gemini response extracted (MIME: application/json). Confidence: 99.8%", "success");
          addLog("Extracted data: { patient_id: 10423, total_amount: 8400.00, vendor: 'BioMed Care' }", "info");
          setActiveStep(2);
        }, 1200);
      }, 800);
    } else if (activeStep === 2) {
      addLog("Node 'Regulatory Audit' examining compliance parameters...", "info");
      timer = setTimeout(() => {
        addLog("Auto-approval verified. Invoice total $8,400.00 is below $10,000 threshold.", "success");
        addLog("Routing packet directly to production ERP syncing ledger...", "info");
        setActiveStep(3);
      }, 1600);
    } else if (activeStep === 3) {
      addLog("Node 'SAP ERP Ledger Push' securing API handshake...", "info");
      timer = setTimeout(() => {
        addLog("ERP ledger synced. Record added under reference #ERP-2026-8812.", "success");
        addLog("Dispatching webhook alerts to slack-accounting. Workflow completed in 6.1s.", "success");
        setActiveStep(4); // Finished
      }, 1400);
    } else if (activeStep === 4) {
      // Completed, pause briefly then reset
    }

    return () => clearTimeout(timer);
  }, [activeStep]);

  const resetPipeline = () => {
    setActiveStep(-1);
    setTerminalLogs([
      "System: Cleaned sandbox. Standing by. Press [RUN PIPELINE] to simulate automation."
    ]);
  };

  return (
    <div id="workflow-builder-container" className="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl p-6 relative">
      
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-900 mb-6 space-y-4 sm:space-y-0">
        <div>
          <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded uppercase font-semibold">Interactive Studio</span>
          <h3 className="font-sans font-bold text-lg text-white mt-1">Live Automation Workflow Simulator</h3>
          <p className="text-xs text-neutral-400">Design nodes and click on each to inspect parameters, or trigger the live pipeline execution.</p>
        </div>
        <div className="flex items-center space-x-2">
          {activeStep === -1 || activeStep === 4 ? (
            <button
              onClick={runPipeline}
              disabled={activeStep !== -1 && activeStep !== 4}
              className="flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all active:translate-y-0.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Run Pipeline</span>
            </button>
          ) : (
            <button
              disabled
              className="flex items-center space-x-1.5 px-4 py-2 bg-neutral-900 text-neutral-500 text-xs font-semibold rounded-lg border border-neutral-800"
            >
              <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mr-1" />
              <span>Simulating...</span>
            </button>
          )}

          <button
            onClick={resetPipeline}
            className="flex items-center space-x-1 px-3 py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white text-xs transition-colors"
            title="Reset system simulator"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Main Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Node Pipeline layout */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-4 relative">
          
          {nodes.map((node, index) => {
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;
            const isSelected = selectedNode === node.id;

            return (
              <div key={node.id} className="relative">
                {/* Node Box */}
                <button
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    isSelected 
                      ? "bg-neutral-900 border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                      : isActive 
                        ? "bg-neutral-900/90 border-blue-400 animate-pulse" 
                        : isCompleted 
                          ? "bg-neutral-950 border-emerald-500/40" 
                          : "bg-neutral-950/40 border-neutral-900 hover:border-neutral-800"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Icon Ring */}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                      isCompleted 
                        ? "bg-emerald-500/10 border-emerald-500/20" 
                        : isActive 
                          ? "bg-blue-500/10 border-blue-500/20" 
                          : "bg-neutral-900 border-neutral-800"
                    }`}>
                      {node.icon}
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-neutral-400 font-mono flex items-center space-x-1.5 uppercase">
                        <span>NODE 0{index + 1}</span>
                        <span>&middot;</span>
                        <span className="text-neutral-500">{node.type}</span>
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">{node.label}</div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center space-x-3">
                    {isCompleted ? (
                      <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        SUCCESS
                      </span>
                    ) : isActive ? (
                      <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded animate-pulse">
                        RUNNING
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-neutral-600 border border-neutral-900 px-2 py-0.5 rounded">
                        STANDBY
                      </span>
                    )}
                    <Settings className="w-4 h-4 text-neutral-600 hover:text-white transition-colors" />
                  </div>
                </button>

                {/* Animated connector path to next node */}
                {index < nodes.length - 1 && (
                  <div className="flex justify-center h-5 relative">
                    <div className="w-[1.5px] bg-neutral-900 h-full relative overflow-hidden">
                      {isActive && (
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 animate-bounce" />
                      )}
                      {isCompleted && (
                        <div className="absolute inset-0 bg-emerald-500" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Right Side: Configuration Inspector & Log terminal */}
        <div className="lg:col-span-1 flex flex-col space-y-4">
          
          {/* Node Inspector */}
          <div className="bg-neutral-900/50 border border-neutral-900 rounded-lg p-4">
            <h4 className="text-xs font-mono text-neutral-500 tracking-wider uppercase mb-3">NODE INSPECTOR</h4>
            
            {(() => {
              const node = nodes.find(n => n.id === selectedNode);
              if (!node) return <p className="text-xs text-neutral-500">Select a node to inspect parameters.</p>;
              return (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-white">{node.label}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 leading-relaxed">{node.description}</div>
                  </div>

                  <div className="border-t border-neutral-800/80 my-2 pt-2 space-y-2.5">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Parameters & Props</div>
                    {Object.entries(node.config).map(([key, val]) => (
                      <div key={key} className="bg-neutral-950 p-2 rounded border border-neutral-900">
                        <div className="text-[10px] font-mono text-neutral-500">{key}</div>
                        <div className="text-xs font-mono text-white mt-0.5 truncate">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Real-time Sandbox terminal logs */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-3 flex-grow flex flex-col min-h-[160px] max-h-[220px]">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-900 mb-2">
              <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">Log Terminal Stream</span>
              <div className="flex space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
            
            <div className="overflow-y-auto space-y-1.5 font-mono text-[10px] text-neutral-400 leading-normal flex-grow pr-1">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={
                  log.includes("SUCCESS") || log.includes("completed") ? "text-emerald-400" :
                  log.includes("RUNNING") || log.includes("Initialized") ? "text-blue-400" : 
                  log.includes("Audit") ? "text-amber-400" : "text-neutral-400"
                }>
                  {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
