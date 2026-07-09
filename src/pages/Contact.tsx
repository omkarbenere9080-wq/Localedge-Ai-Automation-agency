import React, { useState } from "react";
import { PageId } from "../types";
import { 
  Mail, ShieldCheck, CheckCircle2, 
  Terminal, Sparkles, MapPin, Send 
} from "lucide-react";

interface ContactProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agentsWanted: "5",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/mkollzev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          agentsWanted: formData.agentsWanted,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setSubmitError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setSubmitError("Failed to submit form. Please check the fields and try again.");
        }
      }
    } catch (error) {
      setSubmitError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="relative pt-24 pb-20 text-neutral-300">
      
      {/* Background spotlights */}
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 rounded-full uppercase font-semibold">
            Enterprise Accounts
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
            Consult with Our Integration Engineers Today
          </h1>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Discuss dedicated edge nodes, HIPAA/SOC-2 compliance standards, and estimate exact resource multipliers with our advisory group based in Mumbai.
          </p>
        </div>

        {/* Form and Info Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          
          {/* Left: Contact Form Card */}
          <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-900 pb-3 mb-4">
                  <h3 className="font-sans font-bold text-base text-white">Direct Advisory Message</h3>
                  <p className="text-xs text-neutral-500 mt-1">Submit your specific pipeline goals below. Our accounts team will respond in under 2 hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah@apexhealth.com"
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      disabled={isSubmitting}
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Apex Health Corp"
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Estimated Active Agents Needed</label>
                    <select
                      name="agentsWanted"
                      disabled={isSubmitting}
                      value={formData.agentsWanted}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    >
                      <option value="1-5">1-5 Active agents</option>
                      <option value="5-20">5-20 Active agents</option>
                      <option value="20-100">20-100 Active agents</option>
                      <option value="100+">100+ Multi-region scale</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Describe Your Automation Objectives</label>
                  <textarea
                    name="message"
                    rows={4}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly summarize your legacy SaaS targets, compliance parameters, and security expectations..."
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 text-xs font-semibold text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex justify-center items-center space-x-1.5 active:translate-y-0.5 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Advisory Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Advisory Request</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-6 text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Advisory Request Transmitted!</h3>
                  <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your details have been indexed securely into our sandbox system. An advisory engineer will contact you shortly.
                  </p>
                </div>

                {/* Simulated response metadata */}
                <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-4 max-w-sm mx-auto text-left">
                  <div className="flex items-center space-x-2 pb-2 border-b border-neutral-900 mb-2">
                    <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="text-[9px] font-mono text-neutral-400 uppercase">TRANSMISSION RECEIPT METADATA</span>
                  </div>
                  <pre className="font-mono text-[9px] text-neutral-500 leading-normal">
                    {`{
  "client_id": "LOC_CLIENT_${Math.floor(Math.random() * 100000)}",
  "name": "${formData.name}",
  "company": "${formData.company || "N/A"}",
  "estimated_volume": "${formData.agentsWanted}",
  "routing_status": "SEC_NODE_QUEUE_ASSIGNED",
  "sla_timestamp": "${new Date().toISOString()}"
}`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right: Corporate Information & Office Details */}
          <div className="space-y-6">
            
            {/* Headquarters / Mumbai Office */}
            <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Office Location</span>
                  <h4 className="text-sm font-sans font-bold text-white">Mumbai Office</h4>
                </div>
              </div>
              <p className="text-xs text-neutral-300 font-semibold mb-1">LocalEdge Technologies</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Naman Centre, Bandra Kurla Complex<br />
                Mumbai, Maharashtra 400051, India
              </p>
            </div>

            {/* Communications */}
            <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Communications</span>
                  <h4 className="text-sm font-sans font-bold text-white">Direct Contacts</h4>
                </div>
              </div>
              <p className="text-xs text-neutral-300 font-semibold mb-1">omkar@localedge.space</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Support & Inquiries: <a href="mailto:omkar@localedge.space" className="text-blue-400 hover:underline">omkar@localedge.space</a>
              </p>
            </div>

            {/* Compliance Status */}
            <div className="bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Security & Trust</span>
                  <h4 className="text-sm font-sans font-bold text-white">Compliance Status</h4>
                </div>
              </div>
              <p className="text-xs text-neutral-300 font-semibold mb-1">SLA: 99.998% Delivery Uptime</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                SOC-2 Type II Certified &middot; HIPAA/GDPR Compliant Data Isolation Protection Shield
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
