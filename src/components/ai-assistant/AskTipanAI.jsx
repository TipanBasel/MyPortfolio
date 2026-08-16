import React, { useState, useEffect, useRef, useCallback } from 'react';
import { aiKnowledgeBase, personalInfo } from '../../data/portfolioData';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  RotateCcw, 
  Copy, 
  Check, 
  ArrowUpRight,
  Download,
  ExternalLink,
  CornerDownLeft,
  ChevronRight,
  Terminal,
  Maximize2,
  Minimize2
} from 'lucide-react';

const SUGGESTED_PROMPTS = [
  "Tell me about GovSathi.",
  "What is Diabetic Retinopathy detection?",
  "What technologies does Tipan use?",
  "Is Tipan available for opportunities?",
  "Where does Tipan study?",
  "How can I download Tipan's resume?"
];

export default function AskTipanAI({ isOpen, onClose, onOpenResume }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am Tipan's Portfolio AI Assistant. Ask me anything about Tipan's engineering projects (like GovSathi or Diabetic Retinopathy), tech stack, education, or resume download.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      targetSection: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const streamingTimerRef = useRef(null);

  // Auto-scroll to latest token or message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      scrollToBottom();
    }
    return () => {
      if (streamingTimerRef.current) clearInterval(streamingTimerRef.current);
    };
  }, [isOpen, scrollToBottom]);

  // Clean intent matcher with scoring
  const findAnswer = (query) => {
    const cleanQuery = query.toLowerCase().trim();
    const queryTokens = cleanQuery.split(/[\s,?.!]+/).filter(Boolean);

    let bestMatch = null;
    let highestScore = 0;

    for (const item of aiKnowledgeBase) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleanQuery === kw) {
          score += 10;
        } else if (cleanQuery.includes(kw)) {
          score += 3;
        } else if (queryTokens.includes(kw)) {
          score += 2;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        text: bestMatch.answer,
        targetSection: bestMatch.targetSection
      };
    }

    // Default intelligent fallback
    return {
      text: `Tipan is a Computer Engineering student specializing in **Artificial Intelligence, Machine Learning, Deep Learning, and RAG systems**.\n\nHis primary engineered systems include:\n• **GovSathi**: Nepali AI Voice Assistant with RAG retrieval.\n• **Diabetic Retinopathy Detection**: Deep learning ocular classifier (ResNet101 + OpenCV).\n\nFeel free to ask about his specific projects, skills, education, or download his resume!`,
      targetSection: 'projects'
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const { text: fullAnswer, targetSection } = findAnswer(text);
    const aiMsgId = `ai-${Date.now()}`;

    // Fast responsive streaming token-by-token effect (~14ms per word)
    const words = fullAnswer.split(' ');
    let currentWordIndex = 0;

    setTimeout(() => {
      // First token arrival
      setMessages((prev) => [
        ...prev,
        {
          id: aiMsgId,
          sender: 'ai',
          text: words[0] || '',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          targetSection: null,
          isStreaming: true
        }
      ]);

      streamingTimerRef.current = setInterval(() => {
        currentWordIndex++;
        if (currentWordIndex < words.length) {
          const currentText = words.slice(0, currentWordIndex + 1).join(' ');
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMsgId ? { ...msg, text: currentText } : msg
            )
          );
          scrollToBottom();
        } else {
          clearInterval(streamingTimerRef.current);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMsgId
                ? { ...msg, text: fullAnswer, targetSection, isStreaming: false }
                : msg
            )
          );
          setIsTyping(false);
          scrollToBottom();
        }
      }, 14);
    }, 120);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    if (streamingTimerRef.current) clearInterval(streamingTimerRef.current);
    setIsTyping(false);
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: "Conversation reset. What else would you like to explore regarding Tipan's work?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        targetSection: null
      }
    ]);
  };

  const handleActionClick = (target) => {
    onClose();
    if (target === 'resume' && onOpenResume) {
      setTimeout(() => onOpenResume(), 100);
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-assistant-title"
    >
      <div
        className={`w-full ${
          isFullScreen 
            ? 'h-[100dvh] sm:h-[95vh] sm:max-w-4xl rounded-none sm:rounded-2xl' 
            : 'h-[88dvh] sm:h-[620px] sm:max-w-xl rounded-t-2xl sm:rounded-2xl'
        } bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100 transition-all duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="sm:hidden w-full flex items-center justify-center pt-2 pb-1 bg-slate-100 dark:bg-slate-950">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Assistant Header */}
        <div className="px-4 py-3 sm:py-3.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-glow-sm">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 id="ai-assistant-title" className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Ask Tipan AI
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                Ground Truth Knowledge Base • Real Portfolio Context
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Toggle Expand / Fullscreen */}
            <button
              type="button"
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="hidden sm:inline-flex p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title={isFullScreen ? "Restore size" : "Expand window"}
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Clear Chat */}
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-3.5 sm:p-5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/60 overscroll-contain">
          {messages.map((msg) => {
            const isAI = msg.sender === 'ai';

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 sm:gap-3 ${isAI ? 'items-start' : 'items-start justify-end'}`}
              >
                {isAI && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950/90 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`relative max-w-[88%] sm:max-w-[85%] rounded-2xl p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                    isAI
                      ? 'bg-white dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800/80 shadow-sm'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-line font-sans">
                    {msg.text}
                    {msg.isStreaming && (
                      <span className="inline-block w-1.5 h-3.5 bg-cyan-500 dark:bg-cyan-400 ml-1 animate-pulse" />
                    )}
                  </div>

                  {/* Contextual Action Button */}
                  {isAI && msg.targetSection && !msg.isStreaming && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleActionClick(msg.targetSection)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/70 hover:bg-cyan-100 dark:hover:bg-cyan-900/90 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono font-semibold transition-colors"
                      >
                        {msg.targetSection === 'resume' ? (
                          <>
                            <Download className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                            <span>Download / Upload Resume PDF</span>
                          </>
                        ) : (
                          <>
                            <span>Navigate to #{msg.targetSection}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="p-1 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded transition-colors"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Message Meta & Copy fallback */}
                  {(!msg.targetSection || msg.isStreaming) && (
                    <div
                      className={`mt-2 flex items-center justify-between text-[10px] font-mono ${
                        isAI ? 'text-slate-400 dark:text-slate-500' : 'text-cyan-100'
                      }`}
                    >
                      <span>{msg.timestamp}</span>
                      {isAI && !msg.isStreaming && (
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="hover:text-cyan-600 dark:hover:text-cyan-400 p-0.5 rounded transition-colors flex items-center gap-1"
                          title="Copy answer"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3 h-3 text-emerald-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {!isAI && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/80 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce [animation-delay:0.3s]"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills Bar */}
        <div className="p-2 sm:p-2.5 bg-slate-100 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x">
          <span className="text-[10px] font-mono text-slate-500 shrink-0 uppercase pl-1 font-semibold">Prompt:</span>
          {SUGGESTED_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(prompt)}
              disabled={isTyping}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-800 dark:hover:text-cyan-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 border border-slate-300 dark:border-slate-700/60 whitespace-nowrap transition-colors disabled:opacity-50 shrink-0 shadow-xs font-medium"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Interactive Chat Input Bar */}
        <div className="p-2.5 sm:p-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Tipan's projects, stack, or download resume..."
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {inputValue && (
              <button
                type="button"
                onClick={() => setInputValue('')}
                className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                aria-label="Clear input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white disabled:opacity-40 disabled:pointer-events-none transition-all shadow-glow-sm flex items-center justify-center shrink-0"
            aria-label="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
