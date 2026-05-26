"use client";

import React, { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+{}[]";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    // Track the y position of each column with random initial delay offsets
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationFrameId: number;

    const draw = () => {
      // Create a fading trail effect
      ctx.fillStyle = "rgba(3, 7, 18, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle cyan text color
      ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Periodically highlight leading drops for digital spark effect
        if (Math.random() > 0.98) {
          ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
          ctx.fillText(text, x, y);
          ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
