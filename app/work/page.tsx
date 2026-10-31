'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/site-shell'
import { SiteShell } from '@/components/site-shell'
import { projects, site } from '@/lib/site-content'

export default function Work() {
  const [active, setActive] = useState(0)
  const [stride, setStride] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const total = projects.length
  const move = (direction: number) => setActive((current) => (current + direction + total) % total)

  /* Measure the true slide stride (first slide width + gap) so the track slides exactly one card */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const first = track.firstElementChild as HTMLElement | null
      if (!first) return
      const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0
      setStride(first.getBoundingClientRect().width + gap)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  return (
    <SiteShell
      left={{
        eyebrow: 'Selected work',
        title: (
          <>
            The <i className="text-sidebar-primary">good</i> stuff.
          </>
        ),
        description:
          'A small, rotating sample of recent engagements. Every project here materially changed how the company is perceived — or priced.',
        showClients: true,
        actions: (
          <>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sidebar-primary px-5 py-3 text-sm font-medium text-sidebar-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-14px_rgba(245,182,66,0.7)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              See yours here
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sidebar-border/70 px-5 py-3 text-sm font-medium text-sidebar-foreground transition-all hover:-translate-y-0.5 hover:border-sidebar-primary/60 hover:text-sidebar-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              Start a project <ArrowUpRight className="size-4" />
            </a>
          </>
        ),
      }}
    >
      <Reveal>
        <SectionLabel>Featured · drag or flip through</SectionLabel>

        <div className="mt-8 flex items-end justify-between gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-muted-foreground">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} projects
          </span>
          <div className="hidden items-center gap-2 md:flex">
            <CarouselButton label="Previous case study" onClick={() => move(-1)}>
              <ArrowLeft className="size-4" />
            </CarouselButton>
            <CarouselButton label="Next case study" onClick={() => move(1)}>
              <ArrowRight className="size-4" />
            </CarouselButton>
          </div>
        </div>

        {/* Sliding viewport: outer layer owns position, inner layer owns drag */}
        <div className="mt-6 overflow-hidden" aria-label="Case studies carousel">
          <motion.div animate={{ x: -active * stride }} transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.8 }}>
            <motion.div
              ref={trackRef}
              className="flex cursor-grab gap-5 active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) move(1)
                else if (info.offset.x > 60) move(-1)
              }}
            >
              {projects.map((p, i) => (
                <CarouselSlide key={p.slug} p={p} dimmed={i !== active} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Progress hairline */}
        <div className="mt-8 h-px w-full bg-border/60">
          <motion.div
            className="h-px bg-primary"
            animate={{ width: `${((active + 1) / total) * 100}%` }}
            transition={{ type: 'spring', stiffness: 140, damping: 24 }}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">
            endlessly exploring
          </span>
          <div className="flex gap-2 md:hidden">
            <CarouselButton label="Previous case study" onClick={() => move(-1)}>
              <ArrowLeft className="size-4" />
            </CarouselButton>
            <CarouselButton label="Next case study" onClick={() => move(1)}>
              <ArrowRight className="size-4" />
            </CarouselButton>
          </div>
        </div>
      </Reveal>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>Full archive</SectionLabel>
          <div className="mt-8 flex flex-col gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: 'easeOut' }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid grid-cols-[80px_1fr_auto] items-center gap-4 rounded-2xl border border-border/70 px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:grid-cols-[120px_1fr_auto] sm:gap-6 sm:px-7 sm:py-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[.2em] text-primary sm:text-xs">
                    {String(i + 1).padStart(2, '0')} · {p.year}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-sans text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</p>
                    <p className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">
                      {p.category} · {p.summary}
                    </p>
                  </div>
                  <div className="flex size-9 flex-none items-center justify-center rounded-full border border-border/60 transition-all group-hover:rotate-[-12deg] group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4 transition-transform group-hover:scale-110" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </SiteShell>
  )
}

function CarouselSlide({ p, dimmed }: { p: (typeof projects)[number]; dimmed: boolean }) {
  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.45 : 1, scale: dimmed ? 0.97 : 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 24 }}
      className="min-w-[88%] md:min-w-[calc(33.333%-0.833rem)]"
    >
      <Link href={`/work/${p.slug}`} className="group block">
        <div
          className={`relative aspect-[1.15] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} transition-transform duration-500 group-hover:scale-[1.02]`}
        >
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_45%,rgba(255,255,255,.5)_46%,transparent_48%)] bg-[length:22px_22px]" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/70">
              {p.category} · {p.year}
            </p>
            <h3 className="mt-1 font-sans text-xl font-semibold leading-tight text-white">{p.title}</h3>
          </div>
        </div>
        <div className="mt-4 flex justify-between border-b border-border pb-4 text-sm">
          <span className="font-medium">{p.title}</span>
          <span className="text-muted-foreground">
            {p.category} · {p.year}
          </span>
        </div>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{p.summary}</p>
      </Link>
    </motion.div>
  )
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
    </button>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">{children}</p>
      <div className="rule-fade h-px flex-1" />
    </div>
  )
}
