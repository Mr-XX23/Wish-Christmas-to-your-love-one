"use client"

import { useEffect, useRef, useState } from 'react'

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const snowflakes: { x: number; y: number; radius: number; speed: number; opacity: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createSnowflakes = () => {
      const count = 100
      // Use deterministic positions based on index for SSR compatibility
      for (let i = 0; i < count; i++) {
        const seed = i / count
        snowflakes.push({
          x: (seed * 0.9 + 0.05) * canvas.width,
          y: ((i * 137.5) % canvas.height), // Golden angle distribution
          radius: 1 + (i % 3),
          speed: 0.5 + (i % 3) * 0.3,
          opacity: 0.3 + (i % 5) * 0.1
        })
      }
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      snowflakes.forEach(flake => {
        flake.y += flake.speed
        flake.x += Math.sin(flake.y * 0.01) * 0.5 // Gentle sway

        // Reset if out of view
        if (flake.y > canvas.height) {
          flake.y = -10
          // Use deterministic reset position based on current x
          flake.x = ((flake.x + canvas.width * 0.618) % canvas.width)
        }

        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(update)
    }

    window.addEventListener('resize', resize)
    resize()
    createSnowflakes()
    update()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
