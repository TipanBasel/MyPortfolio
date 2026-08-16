import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function NeuralCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 24 : 52;
    const connectionDistance = isMobile ? 85 : 120;
    const mouseRadius = 140;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
    };

    // Node class representing neural weights/activations
    class NeuralNode {
      constructor(x, y) {
        this.x = x ?? Math.random() * width;
        this.y = y ?? Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2.2 + 1.2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.isHub = Math.random() > 0.85; // Hub node with special glow
      }

      update() {
        this.pulsePhase += this.pulseSpeed;

        // Base Brownian drift
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from boundaries
        if (this.x < 10 || this.x > width - 10) this.vx *= -1;
        if (this.y < 10 || this.y > height - 10) this.vy *= -1;

        // Mouse interaction: subtle gravitational attraction / soft repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRadius && mouse.isHovering) {
          const force = (1 - dist / mouseRadius) * 1.5;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.2;
          this.y -= Math.sin(angle) * force * 1.2;
        }
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const isDark = theme === 'dark';

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (this.isHub ? 1.4 : 1), 0, Math.PI * 2);

        if (this.isHub) {
          ctx.fillStyle = isDark
            ? `rgba(6, 182, 212, ${0.9 * pulse})`
            : `rgba(14, 116, 144, ${0.85 * pulse})`;
          ctx.shadowColor = isDark ? '#00f2fe' : '#0891b2';
          ctx.shadowBlur = isDark ? 10 : 4;
        } else {
          ctx.fillStyle = isDark
            ? `rgba(56, 189, 248, ${0.65 * pulse})`
            : `rgba(2, 132, 199, ${0.6 * pulse})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const nodes = Array.from({ length: nodeCount }, () => new NeuralNode());

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const isDark = theme === 'dark';

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(14, 116, 144, ${alpha})`;
            ctx.lineWidth = distance < connectionDistance * 0.5 ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw cursor connection rays if hovering
      if (mouse.isHovering && mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouseRadius) {
            const alpha = (1 - distance / mouseRadius) * (isDark ? 0.5 : 0.35);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(nodes[i].x, nodes[i].y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 242, 254, ${alpha})`
              : `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update & draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800/60 shadow-2xl flex items-center justify-center group">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />

      {/* Floating Center AI Node Emblem */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-400 dark:border-cyan-500/40 shadow-glow-md flex items-center justify-center backdrop-blur-md mb-3 transform group-hover:scale-105 transition-transform duration-300">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-30"></span>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-inner">
              AI
            </div>
          </div>
        </div>

        <div className="bg-slate-900/90 dark:bg-slate-950/75 text-slate-100 dark:text-slate-200 border border-slate-700 dark:border-slate-800 px-3.5 py-1 rounded-full text-xs font-mono backdrop-blur-md flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Neural Topology • 52 Nodes Active</span>
        </div>

        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-mono hidden sm:block font-medium">
          Interactive Node Space • Move cursor to modulate weights
        </p>
      </div>

      {/* Subtle corner tech accents */}
      <div className="absolute top-3 left-3 font-mono text-[10px] text-slate-500 dark:text-slate-500 pointer-events-none flex items-center gap-1.5 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
        <span>LATENCY: &lt;1ms</span>
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-slate-500 dark:text-slate-500 pointer-events-none font-medium">
        MODELS: RESNET101 // RAG // WHISPER
      </div>
    </div>
  );
}
