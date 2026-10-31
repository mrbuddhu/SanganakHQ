'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal, springSoft } from '@/components/site-shell'
import { SiteShell } from '@/components/site-shell'
import { faqs, site, testimonials } from '@/lib/site-content'
import { cn } from '@/lib/utils'

export default function Reviews() {
  return (
    <SiteShell
      left={{
        eyebrow: 'Reviews',
        title: (
          <>
            5.00 across <i className="text-sidebar-primary">every review.</i>
          </>
        ),
        description:
          "31 verified client reviews on Contra — and more arriving from Clutch. Quality, communication, professionalism: straight fives across the board.",
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
              Become the next story
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sidebar-border/70 px-5 py-3 text-sm font-medium text-sidebar-foreground transition-all hover:-translate-y-0.5 hover:border-sidebar-primary/60 hover:text-sidebar-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              Write us <ArrowUpRight className="size-4" />
            </a>
          </>
        ),
      }}
    >
      <Reveal>
        <SectionLabel>What teams say after we work together</SectionLabel>
        <div className="mt-8 flex flex-col gap-5">
          {testimonials.slice(0, 4).map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...springSoft, delay: i * 0.06 }}
              className="rounded-2xl border border-border/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 sm:p-7"
            >
              <p className="text-lg leading-8 sm:text-xl sm:leading-9">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4 text-xs uppercase tracking-[.14em] text-muted-foreground">
                <div className="flex size-10 flex-none items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-foreground/85">{t.name}</p>
                  <p className="mt-0.5 text-[10px]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Reveal>

      {/* Video reviews — wire in when the recordings are ready */}
      <div className="mt-20 hidden sm:mt-28">
        <SectionLabel>On camera</SectionLabel>
        <p className="mt-6 text-sm text-muted-foreground">Video reviews coming soon.</p>
      </div>

      <div className="mt-20 sm:mt-28">
        <SectionLabel>Questions, answered</SectionLabel>
        <div className="mt-8 flex flex-col">
          {faqs.map(([q, a], i) => (
            <FaqItem key={q} question={q} answer={a} index={i} />
          ))}
        </div>
      </div>
    </SiteShell>
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

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const panelId = `reviews-faq-panel-${index}`
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
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
