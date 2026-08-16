import React, { useState } from 'react';
import { Terminal, Copy, Check, CornerDownLeft } from 'lucide-react';

const INITIAL_OUTPUT = [
  { type: 'input', text: 'whoami' },
  { 
    type: 'output', 
    text: [
      '• Computer Engineering Student @ ACEM (Kathmandu)',
      '• AI / ML Enthusiast & Practical Systems Builder',
      '• Specialization: Deep Learning, RAG, Computer Vision',
      '• Status: Available for Opportunities'
    ] 
  }
];

const COMMAND_RESPONSES = {
  whoami: [
    '• Computer Engineering Student @ ACEM (Kathmandu)',
    '• AI / ML Enthusiast & Practical Systems Builder',
    '• Specialization: Deep Learning, RAG, Computer Vision',
    '• Status: Available for Opportunities'
  ],
  'cat skills.txt': [
    'AI/ML: Machine Learning, Deep Learning, RAG, OpenCV, Whisper',
    'Languages: Python, C, C++, JavaScript, PHP',
    'Frameworks: React, Next.js, FastAPI, TensorFlow',
    'Databases: MySQL, MongoDB',
    'Soft Skills: Adaptability, Critical Thinking, Problem Solving'
  ],
  'run govsathi.sh': [
    '[INIT] Initializing GovSathi AI Assistant Engine...',
    '[STT] Loading Whisper Nepali speech recognition model... [READY]',
    '[RAG] Indexing government service vector knowledge base... [SYNCED]',
    '[TTS] Attaching GTSS voice synthesis pipeline... [ONLINE]',
    '✓ GovSathi Ready to assist citizens in Nepali!'
  ],
  'cat education.log': [
    'Institution: Advanced College of Engineering and Management (ACEM)',
    'Location: Kathmandu, Nepal',
    'Degree: Bachelor in Computer Engineering',
    'Core Focus: AI, Algorithms, Data Structures, Database Systems'
  ],
  goals: [
    '1. Architect dependable, scalable production AI systems.',
    '2. Bridge cutting-edge research in RAG & vision into real apps.',
    '3. Collaborate with top engineering teams and research labs.'
  ],
  help: [
    'Available commands:',
    '  whoami            - Display developer profile summary',
    '  cat skills.txt    - List technical toolbelt',
    '  run govsathi.sh   - Simulate GovSathi AI runtime pipeline',
    '  cat education.log - Show academic background',
    '  goals             - View career vision',
    '  clear             - Clear terminal display'
  ]
};

export default function TerminalCard() {
  const [history, setHistory] = useState(INITIAL_OUTPUT);
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputValue('');
      return;
    }

    const response = COMMAND_RESPONSES[trimmed] || [
      `bash: command not found: ${trimmed}. Type "help" for a list of valid commands.`
    ];

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: response }
    ]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  const copyTerminalText = () => {
    const text = history
      .map((item) =>
        item.type === 'input'
          ? `tipan@portfolio:~$ ${item.text}`
          : Array.isArray(item.text)
          ? item.text.join('\n')
          : item.text
      )
      .join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-slate-300 dark:border-slate-800 shadow-xl flex flex-col font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-slate-100 dark:bg-slate-900/90 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-slate-600 dark:text-slate-400 text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>tipan@engineer-workstation: ~</span>
          </div>
        </div>

        <button
          type="button"
          onClick={copyTerminalText}
          className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800/40"
          title="Copy terminal session"
          aria-label="Copy terminal text"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 sm:p-5 bg-slate-950 dark:bg-slate-950 text-slate-200 min-h-[260px] max-h-[340px] overflow-y-auto flex flex-col gap-2.5">
        {history.map((entry, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            {entry.type === 'input' ? (
              <div className="flex items-center gap-1.5 text-cyan-300">
                <span className="text-emerald-400">tipan@portfolio</span>
                <span className="text-slate-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$</span>
                <span className="font-semibold text-slate-100">{entry.text}</span>
              </div>
            ) : (
              <div className="text-slate-300 pl-3 border-l border-slate-800 space-y-0.5 leading-relaxed">
                {Array.isArray(entry.text) ? (
                  entry.text.map((line, lIdx) => (
                    <div key={lIdx} className={line.startsWith('✓') ? 'text-emerald-400 font-semibold' : line.startsWith('[') ? 'text-sky-300' : ''}>
                      {line}
                    </div>
                  ))
                ) : (
                  <div>{entry.text}</div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-1.5 text-cyan-300 mt-1">
          <span className="text-emerald-400">tipan@portfolio</span>
          <span className="text-slate-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-400">$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-slate-100 outline-none border-none p-0 focus:ring-0 placeholder:text-slate-600 font-mono text-xs"
            aria-label="Terminal command prompt"
          />
          <button
            type="button"
            onClick={() => handleCommand(inputValue)}
            className="p-1 text-slate-400 hover:text-cyan-300"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Suggested Quick Commands for Fast Tap */}
      <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 flex-wrap">
        <span className="text-[10px] text-slate-600 dark:text-slate-400 mr-1 font-mono uppercase font-semibold">Quick Run:</span>
        {['whoami', 'cat skills.txt', 'run govsathi.sh', 'goals', 'help'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800/70 hover:bg-cyan-100 dark:hover:bg-cyan-950/80 text-slate-700 dark:text-slate-300 hover:text-cyan-800 dark:hover:text-cyan-300 border border-slate-300 dark:border-slate-700/50 text-[10px] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
