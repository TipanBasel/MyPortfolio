import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI / ML Opportunity',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Prepare direct Gmail compose URL with prefilled parameters
    const gmailSubject = encodeURIComponent(`[Portfolio] ${formData.subject} - from ${formData.name}`);
    const gmailBody = encodeURIComponent(
      `Hi Tipan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${gmailSubject}&body=${gmailBody}`;

    setTimeout(() => {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'AI / ML Opportunity',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 8000);
    }, 400);
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            I'm always interested in learning, building and exploring meaningful opportunities in AI and software engineering.
          </p>
        </div>

        {/* Contact Layout: Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Email Direct Card */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                  DIRECT GMAIL INBOX
                </span>
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 font-mono hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-block"
                  title="Open in Gmail"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Click to open Gmail directly for inquiries regarding AI engineering roles, internships, research, or system collaborations.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 text-center rounded-xl bg-cyan-50 dark:bg-cyan-950/70 hover:bg-cyan-100 dark:hover:bg-cyan-900/90 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={copyEmailAddress}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1 text-xs font-mono"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Connect */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-panel-interactive border border-slate-200 dark:border-slate-800 flex items-center gap-3 group shadow-xs"
              >
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Connect</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    LinkedIn
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-panel-interactive border border-slate-200 dark:border-slate-800 flex items-center gap-3 group shadow-xs"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Codebase</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    GitHub
                  </span>
                </div>
              </a>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/60 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping shrink-0" />
              <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Direct Inbox: <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">{personalInfo.email}</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xl relative">
              
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-mono flex items-center gap-2 animate-in fade-in font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Opened Gmail directly to send to <strong>{personalInfo.email}</strong>!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Engineering Lead"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                    Subject / Discussion Area
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="AI / ML Opportunity">AI / Machine Learning Opportunity</option>
                    <option value="Internship / Engineering Role">Internship / Full-time Engineering Role</option>
                    <option value="GovSathi / RAG Architecture Discussion">GovSathi / RAG Architecture Discussion</option>
                    <option value="General Technical Collaboration">General Technical Collaboration</option>
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                    Message Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your project details, interview inquiry, or technical question..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Opening Gmail...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Open in Gmail & Compose</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
