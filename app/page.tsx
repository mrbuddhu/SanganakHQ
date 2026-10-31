'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Magnetic, ParallaxMedia, Reveal, useInViewOnce } from '@/components/premium'
import { springSoft } from '@/components/site-shell'
import { SiteShell } from '@/components/site-shell'
import { faqs, projects, site, testimonials } from '@/lib/site-content'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <SiteShell
      left={{
        eyebrow: `${site.brand} / Product, AI & growth studio`,
        title: (
          <>
            We make brands people <i className="text-sidebar-primary">remember.</i>
          </>
        ),
        description:
          'SanganakHQ designs, builds, and grows digital products — 50+ shipped, top-rated on Contra. An idea to the App Store in a week. A legacy site reborn in 24 hours. What do you need shipped?',
        showClients: true,
        actions: (
          <>
            <Magnetic strength={0.2}>
              <a
                href={`mailto:${site.email}`}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sidebar-primary px-5 py-3 text-sm font-medium text-sidebar-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-14px_rgba(245,182,66,0.7)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Start a project
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sidebar-border/70 px-5 py-3 text-sm font-medium text-sidebar-foreground transition-all hover:-translate-y-0.5 hover:border-sidebar-primary/60 hover:text-sidebar-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              Book a call
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </>
        ),
      }}
    >
      <SectionTrack id="work" label="01 · Selected work">
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((p, idx) => (
            <WorkCard key={p.slug} p={p} idx={idx} />
          ))}
          <Link
            href="/work"
            className="group mt-2 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View full archive
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </SectionTrack>

      <SectionTrack id="studio" label="02 · Studio">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 p-6 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">What we do</p>
              <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                Product, brand, and AI under one roof — run directly by the founders who ship it.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                SanganakHQ is built for teams at an inflection point: launch-ready products, identities that earn
                premium prices, and growth systems that compound. Senior enough to move the whole business forward,
                small enough that the founders touch every project.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                About the studio <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {site.trustMetrics.map((m, i) => (
                <MetricCard key={m.label} m={m} idx={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </SectionTrack>

      <SectionTrack id="reviews" label="03 · Reviews">
        <div className="flex flex-col gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} idx={i} />
          ))}
          <Link
            href="/reviews"
            className="mt-2 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            All reviews <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </SectionTrack>

      <SectionTrack id="faq" label="04 · FAQ">
        <div className="flex flex-col">
          {faqs.slice(0, 4).map(([q, a], i) => (
            <FaqItem key={i} question={q} answer={a} index={i} />
          ))}
        </div>
      </SectionTrack>

      <SectionTrack id="contact" label="05 · Contact" last>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-7 sm:p-9 md:p-11">
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">Have a good problem?</p>
            <h2 className="mt-4 max-w-lg font-sans text-4xl font-semibold leading-none tracking-[-.04em] md:text-5xl lg:text-6xl">
              Let&apos;s make it impossible to ignore.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Not ready for a call? Send a quick note and we&apos;ll reply within one business day with honest next
              steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.18}>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(245,182,66,0.75)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Book a call
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {site.email}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </SectionTrack>
    </SiteShell>
  )
}

/* ---------------- Work cards (parallax media, spring entrance) ---------------- */

function WorkCard({ p, idx }: { p: (typeof projects)[number]; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('-80px')
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ ...springSoft, delay: idx * 0.07 }}
    >
      <Link href={`/work/${p.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_-28px_rgba(245,182,66,0.45)]">
          <ParallaxMedia accent={p.accent} className="aspect-[16/10] w-full">
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/70">
                {p.category} · {p.year}
              </p>
              <h3 className="mt-1 font-sans text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                {p.title}
              </h3>
            </div>
            <div className="absolute bottom-4 right-5 flex size-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:rotate-[-12deg] group-hover:bg-sidebar-primary">
              <ArrowUpRight className="size-4 text-white transition-transform group-hover:scale-110" />
            </div>
          </ParallaxMedia>
          <div className="border-t border-border/50 px-5 py-4">
            <p className="text-sm leading-6 text-muted-foreground">{p.summary}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ---------------- Metric cards ---------------- */

function MetricCard({ m, idx }: { m: { label: string; value: string }; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('-60px')
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ ...springSoft, delay: idx * 0.1 }}
      className="rounded-2xl border border-border/70 p-6 transition-colors duration-300 hover:border-primary/40 sm:p-7"
    >
      <p className="font-sans text-5xl font-semibold tracking-tight text-primary">{m.label}</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">{m.value}</p>
    </motion.div>
  )
}

/* ---------------- Testimonials ---------------- */

function TestimonialCard({ t, idx }: { t: (typeof testimonials)[number]; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLQuoteElement>('-60px')
  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ ...springSoft, delay: idx * 0.06 }}
      className="rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:p-7"
    >
      <p className="text-base leading-8 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4 text-xs uppercase tracking-[.14em] text-muted-foreground">
        <div className="flex size-9 flex-none items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] text-primary">
          {t.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="text-foreground/80">{t.name}</p>
          <p className="mt-0.5 text-[10px]">
            {t.role} · {t.company}
          </p>
        </div>
      </footer>
    </motion.blockquote>
  )
}

/* ---------------- Section chrome ---------------- */

function SectionTrack({
  id,
  label,
  children,
  last = false,
}: {
  id: string
  label: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-6 ${last ? '' : 'mb-16 sm:mb-[72px] md:mb-20'}`}>
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">{label}</p>
        <div className="rule-fade h-px flex-1" />
      </div>
      {children}
    </section>
  )
}

/* ---------------- FAQ (a11y + spring morph) ---------------- */

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('-60px')
  const [open, setOpen] = useState(index === 0)
  const panelId = `faq-panel-${index}`
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ ...springSoft, delay: index * 0.05 }}
      className="border-b border-border/60 first:border-t"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary/60"
      >
        <span className="font-sans text-base font-medium leading-7 sm:text-lg">{question}</span>
        <span
          className={cn(
            'flex size-8 flex-none items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300',
            open && 'rotate-45 border-primary/60 bg-primary/10 text-primary',
          )}
        >
          <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 1v10M1 6h10" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 210, damping: 26, mass: 0.7 }}
        className="overflow-hidden"
      >
        <p className="pb-6 pr-14 text-sm leading-7 text-muted-foreground sm:text-base">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
