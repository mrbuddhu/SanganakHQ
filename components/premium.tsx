'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'

/* ------------------------------------------------------------------ */
/* ScrollContext — the shell exposes its Lenis instance so pages can   */
/* wire scroll-into-view animations against the real scroll container. */
/* ------------------------------------------------------------------ */

type ScrollApi = {
  container: RefObject<HTMLElement | null>
  subscribe: (el: Element, cb: () => void) => () => void
  progress: MotionValue<number> | null
}

const ScrollContext = createContext<ScrollApi | null>(null)

export function ScrollProvider({ value, children }: { value: ScrollApi; children: ReactNode }) {
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export function useScrollApi(): ScrollApi | null {
  return useContext(ScrollContext)
}

/* ------------------------------------------------------------------ */
/* useInViewOnce — intersection observer against the shell's scroller  */
/* (framer's useInView only tracks the window viewport).               */
/* ------------------------------------------------------------------ */

export function useInViewOnce<T extends HTMLElement>(margin = '-60px') {
  const ref = useRef<T>(null)
  const api = useScrollApi()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const root = api?.container.current ?? null
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { root, rootMargin: margin, threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}

/* ------------------------------------------------------------------ */
/* Reveal — spring entrance driven by the shell scroller               */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.9, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Magnetic — element leans toward the cursor with a spring return     */
/* ------------------------------------------------------------------ */

export function Magnetic({ children, strength = 0.28, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.4 }}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        setPos({
          x: (e.clientX - (rect.left + rect.width / 2)) * strength,
          y: (e.clientY - (rect.top + rect.height / 2)) * strength,
        })
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* ParallaxMedia — gradient placeholder whose inner layer drifts on    */
/* scroll (works against the shell scroller via useScroll container).  */
/* ------------------------------------------------------------------ */

export function ParallaxMedia({
  accent,
  className = '',
  children,
  label,
}: {
  accent: string
  className?: string
  children?: ReactNode
  label?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const api = useScrollApi()
  const container = api?.container ?? undefined
  const { scrollYProgress } = useScroll({
    container: container as RefObject<HTMLElement>,
    target: wrapRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const scale = 1.18

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        className={`absolute -inset-y-[10%] inset-x-0 bg-gradient-to-br ${accent}`}
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_45%,rgba(255,255,255,.5)_46%,transparent_48%)] bg-[length:22px_22px]" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      {children}
      {label && (
        <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/75">
          {label}
        </span>
      )}
    </div>
  )
}
