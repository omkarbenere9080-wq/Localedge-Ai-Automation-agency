import React, { useState, useEffect, useRef } from "react";
import { 
  Send, X, Sparkles, AlertCircle, HelpCircle, User, Cpu, Minimize2 
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AiChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiChatInterface({ isOpen, onClose }: AiChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am EdgeAssistant, your LocalEdge automation consultant. Ask me about our Agent Cloud, secure Local Edge Compute, Voice API, or details on custom enterprise pricing tiers."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickQuestions = [
    { text: "What products do you offer?", label: "Products" },
    { text: "What are your pricing plans?", label: "Pricing" },
    { text: "Do you support HIPAA compliance?", label: "Compliance" }
  ];

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMsg],
        }),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
      if (data.isSimulated) {
        setIsSimulated(true);
      } else {
        setIsSimulated(false);
      }
    } catch (err) {
      console.error("Failed to fetch reply from api:", err);
      // Fail gracefully with a local fallback message
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I apologize, but I ran into a connection error contacting the server. Please check your network and try again. (Simulated agent standby mode available)."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div 
      id="chat-assistant-drawer"
      className="fixed bottom-6 right-6 z-50 w-[380px] sm:w-[420px] max-h-[580px] h-[550px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Header bar */}
      <div className="p-4 bg-neutral-900 border-b border-neutral-800/80 flex justify-between items-center">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
              <span>LocalEdge Assistant</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </h3>
            <p className="text-[10px] font-mono text-neutral-500">AUTONOMOUS ORCHESTRATOR</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-neutral-500 hover:text-white p-1 rounded-md hover:bg-neutral-800 transition-all"
          title="Minimize Chat"
        >
          <X className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* Main Messages Content */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4" id="chat-messages-scroll">
        
        {/* API Info / Notice */}
        <div className="p-3 bg-blue-950/25 border border-blue-900/30 rounded-lg flex items-start space-x-2.5">
          <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <div className="text-[11px] text-neutral-400 leading-relaxed">
            This assistant connects to a live server-side <span className="text-white font-semibold">Gemini 3.5 Flash</span> node. If no secret key is deployed in settings, it cascades gracefully to local knowledge models.
          </div>
        </div>

        {/* Message bubbles */}
        {messages.map((msg, index) => {
          const isUser = msg.role === "user";
          return (
            <div key={index} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-start space-x-2.5 max-w-[85%] ${isUser ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
                
                {/* Avatar */}
                <div className={`w-7 h-7 rounded-md flex items-center justify-center border text-xs shrink-0 ${
                  isUser 
                    ? "bg-neutral-900 border-neutral-800 text-neutral-400" 
                    : "bg-blue-950/40 border-blue-900/50 text-blue-400"
                }`}>
                  {isUser ? <User className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble content */}
                <div className={`rounded-xl p-3 text-xs leading-relaxed ${
                  isUser 
                    ? "bg-blue-600 text-white" 
                    : "bg-neutral-900 border border-neutral-800/60 text-neutral-300"
                }`}>
                  {msg.content.split("\n").map((line, lIdx) => (
                    <p key={lIdx} className={lIdx > 0 ? "mt-1.5" : ""}>{line}</p>
                  ))}
                </div>

              </div>
            </div>
          );
        })}

        {/* Typing loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2.5">
              <div className="w-7 h-7 rounded-md bg-blue-950/40 border border-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <div className="bg-neutral-900 border border-neutral-800/60 rounded-xl p-3 flex space-x-1.5 items-center justify-center h-8">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Quick helpers */}
      {messages.length === 1 && (
        <div className="px-4 py-2 bg-neutral-950 border-t border-neutral-900 flex flex-wrap gap-2">
          {quickQuestions.map((q) => (
            <button
              key={q.label}
              onClick={() => handleSend(q.text)}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-md text-[10px] font-sans font-medium text-neutral-400 hover:text-white transition-all text-left"
            >
              {q.label} &rarr;
            </button>
          ))}
        </div>
      )}

      {/* Input box form */}
      <form onSubmit={handleSubmit} className="p-4 bg-neutral-900/40 border-t border-neutral-900 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about enterprise automation..."
          className="flex-grow bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-neutral-900 text-white disabled:text-neutral-700 rounded-lg transition-colors flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
