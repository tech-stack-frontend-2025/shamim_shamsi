"use client"

import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react'
import confetti from 'canvas-confetti'

const Confetti = forwardRef((props, ref) => {
  const containerRef = useRef(null)

  useImperativeHandle(ref, () => ({
    fire: (options = {}) => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        ...options
      })
    }
  }))

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10" />
  )
})

Confetti.displayName = 'Confetti'

export default Confetti