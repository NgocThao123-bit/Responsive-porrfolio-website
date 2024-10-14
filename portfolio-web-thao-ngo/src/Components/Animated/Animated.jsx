import React, { useEffect, useRef, useState } from 'react'
import AnimatedCSS from '../Animated/Animated.module.css'


export default function Animated() {

      const canvasRef = useRef(null);

      useEffect(() => {
        const canvas = canvasRef.current;
        
        if (!canvas) return; // Ensure canvas exists
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Ensure getContext works
    
        let mouseMoved = false;
        const pointer = {
          x: 0.5 * window.innerWidth,
          y: 0.5 * window.innerHeight,
        };
    
        const params = {
          pointsNumber: 30,
          widthFactor: 10,
          mouseThreshold: 0.5,
          spring: 0.25,
          friction: 0.5,
        };
    
        const trail = new Array(params.pointsNumber).fill(0).map(() => ({
          x: pointer.x,
          y: pointer.y,
          dx: 0,
          dy: 0,
        }));
    
        function updateMousePosition(eX, eY) {
          pointer.x = eX;
          pointer.y = eY;
        }
    
        function update(t) {
          if (!mouseMoved) {
            pointer.x =
              (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
              window.innerWidth;
            pointer.y =
              (0.5 + 0.2 * Math.cos(0.005 * t) * Math.sin(0.01 * t)) *
              window.innerHeight;
          }
    
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    
          trail.forEach((p, pIdx) => {
            const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
            const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
            p.dx += (prev.x - p.x) * spring;
            p.dy += (prev.y - p.y) * spring;
            p.dx *= params.friction;
            p.dy *= params.friction;
            p.x += p.dx;
            p.y += p.dy;
          });
    
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, 'rgb(110, 78, 242, 0.5)');
          gradient.addColorStop(1, 'rgb(86,44,255, 0.5)');
    
          ctx.strokeStyle = gradient;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(trail[0].x, trail[0].y);
    
          for (let i = 1; i < trail.length - 1; i++) {
            const xc = 0.5 * (trail[i].x + trail[i + 1].x);
            const yc = 0.5 * (trail[i].y + trail[i + 1].y);
            ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
            ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
            ctx.stroke();
          }
    
          ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
          ctx.stroke();
    
          window.requestAnimationFrame(update);
        }
    
        function setupCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
    
        // Event listeners
        window.addEventListener('mousemove', (e) => {
          mouseMoved = true;
          updateMousePosition(e.pageX, e.pageY);
        });
    
        window.addEventListener('touchmove', (e) => {
          mouseMoved = true;
          updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        });
    
        window.addEventListener('resize', setupCanvas);
    
        // Initialize canvas and start animation
        setupCanvas();
        update(0);
    
        return () => {
          // Cleanup listeners
          window.removeEventListener('mousemove', updateMousePosition);
          window.removeEventListener('resize', setupCanvas);
        };
      }, []);

      return (
            <>
                  <div className={AnimatedCSS.container}
                  >
                        <div className={AnimatedCSS.header}>
                              <h1>Lorem ipsum dolor sit amet.</h1>
                              <button>Get Pro</button>
                        </div>
                  </div>
                  <div className={AnimatedCSS.glassy_overlay}>
                        <canvas ref={canvasRef}>
                          
                        </canvas>
                  </div>
            </>

      )
}
