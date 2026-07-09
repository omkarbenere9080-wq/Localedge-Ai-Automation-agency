import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
      console.warn("GEMINI_API_KEY is not defined. Falling back to simulated AI mode.");
      return null;
    }
    try {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (err) {
      console.error("Failed to initialize Gemini client:", err);
      return null;
    }
  }
  return aiClient;
}

// Local mock replies about LocalEdge to ensure the app stays 100% functional even if no key is set
const LOCALEDGE_KNOWLEDGE = [
  {
    keywords: ["price", "pricing", "cost", "costing", "tier", "plan", "subscription"],
    response: "LocalEdge offers flexible, enterprise-grade pricing:\n\n1. **Professional Tier**: $79/mo per active agent. Perfect for growing teams (includes 50+ integrations, standard SLA, visual builder).\n2. **Scale Tier**: $299/mo per active agent. Engineered for scaling enterprises (includes 24/7 priority support, custom ML training, advanced visual flows, and dedicated edge instances).\n3. **Enterprise Tier**: Custom pricing. Built for heavy multi-region infrastructure, custom compliance, HIPAA/SOC-2, and volume discounts.\n\nWould you like me to connect you with our accounts team, or estimate your costs?"
  },
  {
    keywords: ["product", "feature", "agent cloud", "workflow studio", "voice ai", "edge compute"],
    response: "LocalEdge offers four premier AI Automation products:\n\n- **AI Agent Cloud**: Orchestrate thousands of secure autonomous workflows on our low-latency distributed cloud.\n- **Local Edge Compute**: Run proprietary LLMs and custom ML models directly on-premise, guaranteeing data sovereignty.\n- **Voice AI API**: Low-latency, emotionally expressive conversational speech synthesis and intelligence (sub-120ms response times).\n- **Workflow Studio**: An elegant visual workspace to design, debug, and connect multi-node automation systems."
  },
  {
    keywords: ["solutions", "industries", "retail", "healthcare", "finance", "logistics", "use case"],
    response: "Our custom enterprise systems are tailored for key industries:\n\n- **Logistics**: Autonomous dispatching, route efficiency models, and inventory supply chains.\n- **Healthcare**: HIPAA-compliant health logs, administrative summaries, and client onboarding.\n- **Retail**: Automated inventory forecasts, hyper-personalized customer recommendations, and checkout optimization.\n- **Finance**: Real-time compliance filters, transaction threat detection, and portfolio risk mapping."
  },
  {
    keywords: ["about", "story", "founders", "location", "who are you"],
    response: "LocalEdge is an enterprise AI automation company. Founded in 2024 by a team of deep learning researchers and automation veterans, we specialize in high-performance autonomous workflows, edge intelligence, and secure on-premise AI deployments. We are backed by elite venture firms and based in Mumbai, India, with edge hub operations worldwide."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "help", "support"],
    response: "Greetings! I'm the LocalEdge Autonomous EdgeAssistant. I can guide you through our core products, detailed enterprise pricing, solution blueprints, case studies, or walk you through setting up an active automation agent. What can I help you automate today?"
  }
];

function getSimulatedResponse(prompt: string): string {
  const query = prompt.toLowerCase();
  for (const entry of LOCALEDGE_KNOWLEDGE) {
    if (entry.keywords.some(keyword => query.includes(keyword))) {
      return entry.response;
    }
  }
  return "That is a great question about LocalEdge's enterprise automation capabilities! LocalEdge offers cutting-edge AI Agent Cloud hosting, secure Local Edge Compute, real-time Voice AI APIs, and an immersive visual Workflow Studio. We help high-growth startups and Fortune 500 enterprises automate complex processes with sub-second latency and absolute data security.\n\nCould you tell me more about your specific workflow automation goals so I can give you a tailored solution?";
}

// AI Chat endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array." });
  }

  const userMessage = messages[messages.length - 1]?.content || "";

  const ai = getGeminiClient();
  if (!ai) {
    // Return simulated response with a header/flag indicating mock mode
    const text = getSimulatedResponse(userMessage);
    // Add a slight delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    return res.json({
      content: text,
      isSimulated: true,
      message: "Responding via LocalEdge Local Knowledge-base engine."
    });
  }

  try {
    const formattedHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // System instruction explaining LocalEdge to Gemini
    const systemInstruction = `
You are the LocalEdge Assistant, a premium, professional, helpful, and highly sophisticated AI automation consultant representing LocalEdge. 
LocalEdge is a leading global enterprise AI automation platform based in Mumbai, India. We provide:
- **AI Agent Cloud**: Low-latency secure autonomous agents.
- **Local Edge Compute**: On-premise secure model execution.
- **Voice AI API**: Low-latency, sub-120ms expressive voice processing.
- **Workflow Studio**: An interactive visual drag-and-drop workspace for designing complex node networks.

Our enterprise solutions target:
- **Retail & E-commerce**: Autonomous inventory dispatching, smart recommendations.
- **Finance**: Dynamic risk auditing, real-time threat detection.
- **Logistics & Supply Chain**: Route optimization, live tracking automation.
- **Healthcare & Biotech**: HIPAA-compliant records indexing, appointment management.

Pricing:
- Professional: $79/mo/agent (standard integrations, visual builder).
- Scale: $299/mo/agent (24/7 support, custom ML training, dedicated edge).
- Enterprise: Custom pricing for multi-region scale and bespoke SLA.

Tone: Professional, inspiring, precise, clear, and highly articulate. Keep answers well-structured and format responses with markdown bullet points where appropriate. Always prioritize high-value, secure enterprise workflows.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...formattedHistory,
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, I processed your request but was unable to formulate a text response. Please let me know how else I can assist you.";
    return res.json({
      content: replyText,
      isSimulated: false,
    });
  } catch (err: any) {
    console.error("Gemini API Error in /api/chat:", err);
    // Graceful fallback to mock response if the live call fails
    const text = getSimulatedResponse(userMessage);
    return res.json({
      content: text + "\n\n*(Note: Our live cloud connection experienced a brief timeout. This response is compiled by the local cache system.)*",
      isSimulated: true,
      error: err.message || "Unknown live node error."
    });
  }
});

// Healthy probe endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Vite server integrations
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`LocalEdge Enterprise server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
