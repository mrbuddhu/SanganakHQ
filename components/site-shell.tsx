'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ScrollProvider } from '@/components/premium'
import { projects, site } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const pageNav = ['Home', 'Services', 'Work', 'Reviews', 'About']

/* Spring presets shared across the site for one motion voice */
export const springSoft = { type: 'spring', stiffness: 70, damping: 16, mass: 0.9 } as const
export const springSnappy = { type: 'spring', stiffness: 220, damping: 24, mass: 0.6 } as const

export function SiteShell({
  left,
  children,
}: {
  left: {
    eyebrow?: string
    title: ReactNode
    description?: ReactNode
    actions?: ReactNode
    showClients?: boolean
  }
  children: ReactNode
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const listenersRef = useRef(new Map<Element, Set<() => void>>())

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      wrapper: el,
      content: el.firstElementChild as HTMLElement,
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    })
    lenisRef.current = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const subscribe = useCallback((node: Element, cb: () => void) => {
    const set = listenersRef.current.get(node) ?? new Set()
    set.add(cb)
    listenersRef.current.set(node, set)
    return () => {
      set.delete(cb)
      if (set.size === 0) listenersRef.current.delete(node)
    }
  }, [])

  const scrollApi = useMemo(
    () => ({ container: scrollRef, subscribe, progress: null }),
    [subscribe],
  )

  return (
    <ScrollProvider value={scrollApi}>
      <div className="flex h-dvh w-full flex-col overflow-hidden bg-background text-foreground">
        {/* === TOP NAVBAR (full width, every page) === */}
        <header className="relative z-50 flex w-full flex-none items-center justify-between border-b border-sidebar-border/70 bg-sidebar/95 px-5 py-3.5 text-sidebar-foreground backdrop-blur-md sm:px-7 md:px-10 lg:px-12 xl:px-14">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="SanganakHQ home" className="block flex-none">
              <img src="/sanganakhq-logo.png" alt="SanganakHQ" className="h-10 w-auto object-contain object-left sm:h-11" />
            </Link>
            <span className="ml-1 hidden h-4 w-px bg-sidebar-border/70 sm:block" />
            <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[.2em] text-sidebar-foreground/45 lg:block">
              {site.tagline}
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {pageNav.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
              const active = pathname === href || (item === 'Work' && pathname.startsWith('/work'))
              return (
                <Link
                  key={item}
                  href={href}
                  className={cn(
                    'inline-flex items-center rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-[.14em] transition-colors',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary',
                    active ? 'text-sidebar-primary' : 'text-sidebar-foreground/70 hover:text-sidebar-primary',
                  )}
                >
                  {item}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative hidden whitespace-nowrap sm:inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-sidebar-primary px-4 py-2 text-[11px] font-medium uppercase tracking-[.18em] text-sidebar-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(245,182,66,0.55)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Book a call
              <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-full border border-sidebar-border/60 text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary md:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </header>

        {/* === Mobile dropdown nav === */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="z-40 w-full flex-none border-b border-sidebar-border/60 bg-sidebar px-5 py-4 text-sidebar-foreground md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {pageNav.map((item) => {
                  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
                  const active = pathname === href || (item === 'Work' && pathname.startsWith('/work'))
                  return (
                    <Link
                      key={item}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded-lg px-2 py-2.5 text-sm font-medium transition-colors',
                        active
                          ? 'text-sidebar-primary'
                          : 'text-sidebar-foreground/85 hover:bg-sidebar-accent/50 hover:text-sidebar-primary',
                      )}
                    >
                      {item}
                    </Link>
                  )
                })}
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-sidebar-primary px-4 py-2.5 text-sm font-medium text-sidebar-primary-foreground"
                >
                  Book a call <ArrowUpRight className="size-4" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* === SPLIT BODY === */}
        <div className="relative flex min-h-0 flex-1 w-full overflow-hidden md:flex-row">
          {/* LEFT — hero (mobile: stacked above scroll, desktop: fixed pane) */}
          <aside className="relative flex flex-none flex-col border-b border-sidebar-border/60 bg-sidebar px-6 pb-6 pt-6 text-sidebar-foreground sm:px-8 sm:pb-8 sm:pt-7 md:h-full md:w-[36%] md:min-h-0 md:border-b-0 md:border-r md:px-8 md:pb-8 lg:w-[34%] lg:px-9 xl:w-[32%] xl:px-10 md:flex-col md:justify-between">
            <div className="hero-glow" aria-hidden />

            {/* Hero copy — on desktop it shrinks gracefully instead of pushing CTAs out */}
            <div className="relative z-10 min-h-0 flex-none md:flex-1 md:overflow-y-auto md:pr-2 no-scrollbar md:mt-14 xl:mt-16 md:pb-6">
              {left.eyebrow && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="font-mono text-[10px] uppercase tracking-[.25em] text-sidebar-primary sm:text-[11px]"
                >
                  {left.eyebrow}
                </motion.p>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 26, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-sans text-[36px] font-semibold leading-[0.95] tracking-[-.05em] text-balance sm:text-4xl md:text-[44px] lg:text-[52px] xl:text-[58px]"
              >
                {left.title}
              </motion.h1>

              {left.description && (
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
                  className="mt-6 max-w-md text-sm leading-7 text-sidebar-foreground/60 sm:text-base md:leading-7"
                >
                  {left.description}
                </motion.p>
              )}
            </div>

            {/* BOTTOM BLOCK — marquee + CTA buttons pinned to the bottom of the left pane */}
            <div className="relative z-10 flex flex-none flex-col md:pt-4">
              {left.showClients && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.26, ease: 'easeOut' }}
                  className="mt-10 md:mt-0 md:mb-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[.2em] text-sidebar-foreground/40">
                    Trusted by market leaders
                  </p>
                  <div className="mt-4 overflow-hidden mask-both-sides">
                    <div className="marquee">
                      <div className="marquee-track">
                        {[...site.clients, ...site.clients, ...site.clients].map((c, i) => (
                          <span
                            key={i}
                            className="mx-6 flex-none font-sans text-lg font-semibold tracking-tight text-sidebar-foreground/35 sm:text-xl xl:text-2xl"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {left.actions && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.34, ease: 'easeOut' }}
                  className="mt-10 flex flex-wrap items-center gap-3 md:mt-0"
                >
                  {left.actions}
                </motion.div>
              )}
            </div>
          </aside>

          {/* RIGHT — Lenis-smoothed scroll column with page content + footer at bottom */}
          <main className="relative min-h-0 flex-1 overflow-hidden border-t border-border/60 md:border-t-0 md:border-l">
            <div
              ref={scrollRef}
              className="h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scroll"
            >
              <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-7 sm:py-14 md:max-w-6xl md:px-10 md:py-16 lg:px-14 xl:px-16">
                {children}

                {/* === FOOTER (inside right column bottom — mobile & desktop) === */}
                <SiteFooter />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ScrollProvider>
  )
}

/* ------------------------------------------------------------------ */
/* Shared components                                                    */
/* ------------------------------------------------------------------ */

export { Reveal } from '@/components/premium'

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border pt-10 sm:mt-28 sm:pt-14">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <Link href="/" aria-label="SanganakHQ home" className="block">
            <img src="/sanganakhq-logo.png" alt="SanganakHQ" className="h-12 w-auto object-contain object-left" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
            {site.tagline} We position your brand to match your ambition.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[.16em] transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              Start a project
              <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[.16em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-12px_rgba(245,182,66,0.55)]"
            >
              Book a call
              <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {pageNav.map((item) => {
                const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
                return (
                  <Link key={item} href={href} className="text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Selected work</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {projects.slice(0, 4).map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Contact</p>
            <div className="mt-4 flex flex-col gap-2.5 text-muted-foreground">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="transition-colors hover:text-primary">
                {site.phone}
              </a>
              <p>{site.location}</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Social</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {Object.entries(site.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.brand} · Founded by Aryabhatta & Shabi Kaushal · Bengaluru
        </p>
        <p className="max-w-sm leading-6 sm:text-right">
          Product, AI & growth — designed, built, and shipped by the founders themselves.
        </p>
      </div>
    </footer>
  )
}
