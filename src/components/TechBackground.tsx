import React, { useEffect, useRef } from 'react';

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Structure of circuit nodes and lines
    interface Node {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      color: string;
      radius: number;
    }

    interface Segment {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    }

    interface Particle {
      segmentIndex: number;
      progress: number; // 0 to 1
      speed: number;
      color: string;
      size: number;
    }

    let nodes: Node[] = [];
    let segments: Segment[] = [];
    let particles: Particle[] = [];

    const initCircuit = (w: number, h: number) => {
      nodes = [];
      segments = [];
      particles = [];

      // Create deterministic positions representing neural nets / circuits mostly on the right side
      const rightAreaWidth = Math.min(w * 0.5, 600);
      const rightOffset = w - rightAreaWidth;

      // Define standard nodes
      const nodeConfigs = [
        { x: rightOffset + rightAreaWidth * 0.2, y: h * 0.15, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.5, y: h * 0.1, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.8, y: h * 0.25, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.3, y: h * 0.4, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.7, y: h * 0.45, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.1, y: h * 0.6, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.5, y: h * 0.7, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.9, y: h * 0.65, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.4, y: h * 0.85, color: '#1a1a1a' },
        { x: rightOffset + rightAreaWidth * 0.8, y: h * 0.9, color: '#1a1a1a' },
      ];

      nodeConfigs.forEach(config => {
        nodes.push({
          x: config.x,
          y: config.y,
          targetX: config.x + (Math.random() - 0.5) * 15,
          targetY: config.y + (Math.random() - 0.5) * 15,
          color: config.color,
          radius: Math.random() * 1.5 + 1.2
        });
      });

      // Connect some of them to form segments (PCB traces style: right-angles or 45-degree diagonals)
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        // Connect to 1 or 2 closest subsequent nodes
        const sortedIndices = Array.from({ length: nodes.length }, (_, idx) => idx)
          .filter(idx => idx !== i)
          .sort((a, b) => {
            const distA = Math.hypot(nodes[a].x - n1.x, nodes[a].y - n1.y);
            const distB = Math.hypot(nodes[b].x - n1.x, nodes[b].y - n1.y);
            return distA - distB;
          });

        // Take top 2 closest
        const connections = sortedIndices.slice(0, 2);
        connections.forEach(idx => {
          const n2 = nodes[idx];
          const midX = n1.x + (n2.x - n1.x) * 0.5;
          
          segments.push({
            startX: n1.x,
            startY: n1.y,
            endX: midX,
            endY: n1.y
          });

          segments.push({
            startX: midX,
            startY: n1.y,
            endX: n2.x,
            endY: n2.y
          });
        });
      }

      // Spawn initial particles
      for (let i = 0; i < 20; i++) {
        if (segments.length > 0) {
          particles.push({
            segmentIndex: Math.floor(Math.random() * segments.length),
            progress: Math.random(),
            speed: 0.001 + Math.random() * 0.002,
            color: '#1a1a1a',
            size: Math.random() * 1.2 + 0.8
          });
        }
      }
    };

    // Resize Observer following guidelines
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = entryWidth;
        height = entryHeight;
        canvas.width = entryWidth;
        canvas.height = entryHeight;
        initCircuit(entryWidth, entryHeight);
      }
    });

    resizeObserver.observe(container);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections/traces (soft dark grey lines)
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.04)';
      ctx.beginPath();
      segments.forEach(seg => {
        ctx.moveTo(seg.startX, seg.startY);
        ctx.lineTo(seg.endX, seg.endY);
      });
      ctx.stroke();

      // Draw nodes (soft outline, no glowing neon effects)
      nodes.forEach(node => {
        node.x += (node.targetX - node.x) * 0.01;
        node.y += (node.targetY - node.y) * 0.01;
        if (Math.hypot(node.targetX - node.x, node.targetY - node.y) < 1) {
          node.targetX = node.x + (Math.random() - 0.5) * 15;
          node.targetY = node.y + (Math.random() - 0.5) * 15;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(26, 26, 26, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Update and draw particles (subtle data points flowing)
      particles.forEach(p => {
        p.progress += p.speed;
        if (p.progress >= 1.0) {
          p.progress = 0;
          p.segmentIndex = Math.floor(Math.random() * segments.length);
          p.speed = 0.001 + Math.random() * 0.002;
        }

        const seg = segments[p.segmentIndex];
        if (!seg) return;

        const currentX = seg.startX + (seg.endX - seg.startX) * p.progress;
        const currentY = seg.startY + (seg.endY - seg.startY) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(26, 26, 26, 0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
