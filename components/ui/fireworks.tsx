'use client';

import React, { useEffect, useRef } from 'react';

export function Fireworks({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            color: string;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 4 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.alpha = 1;
                this.color = color;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.05; // gravity
                this.alpha -= 0.01;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const createFirework = () => {
            const x = Math.random() * width;
            const y = Math.random() * (height / 2);
            const colors = ['#ff0', '#f0f', '#0ff', '#ff4', '#4ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y, color));
            }
        };

        const loop = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // trails
            ctx.fillRect(0, 0, width, height);

            if (Math.random() < 0.05) {
                createFirework();
            }

            particles = particles.filter(p => p.alpha > 0);
            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} />;
}
