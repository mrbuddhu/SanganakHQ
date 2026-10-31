import { ArrowUpRight, BarChart3, Bot, Monitor, Rocket, TrendingUp } from 'lucide-react'
import { Reveal, SiteShell } from '@/components/site-shell'
import { site } from '@/lib/site-content'

const services = [
  {
    n: '01',
    title: 'The Audit',
    icon: BarChart3,
    tagline: 'Find what’s broken',
    desc: 'A ruthless teardown of your brand, funnel, and product experience — what’s leaking attention, trust, and revenue. You leave with a prioritized fix list, whether or not you hire us for the rest.',
  },
  {
    n: '02',
    title: 'Design',
    icon: Rocket,
    tagline: 'Brand, UI/UX & motion',
    desc: 'Identities and product design with enough character to be remembered and enough system to last. Logos, type, color, motion, design systems, pitch-ready product surfaces.',
  },
  {
    n: '03',
    title: 'Build',
    icon: Monitor,
    tagline: 'Web, app & development',
    desc: 'Websites, iOS apps, and full products — designed and shipped by the same team. React, Flutter, Shopify, App Store submission handled. Measured in days, not quarters.',
  },
  {
    n: '04',
    title: 'AI Automation',
    icon: Bot,
    tagline: 'AI agents & pipelines',
    desc: 'Custom AI agents, email and CRM automation, and data pipelines that run while you sleep. Built on the same stack our clients renew for: measurable lifts in engagement and conversions.',
  },
  {
    n: '05',
    title: 'Growth Engine',
    icon: TrendingUp,
    tagline: 'SEO, ads, CRO & email — as one system',
    desc: 'Our signature retainer. Growth run as a compounding system, not scattered tactics. Clients renew it because the ROI shows up in the dashboard, not the deck.',
  },
]

const proof = [
  ['48h', 'A full construction site, live — enquiry forms, WhatsApp integration, SEO included'],
  ['24h', 'Legacy PHP rebuilt into a modern React site'],
  ['1 week', 'Idea to App Store — design, build, and release handled end to end'],
  ['4×', 'Growth Engine renewals from a single client'],
]

export default function Services() {
  return (
    <SiteShell
      left={{
        eyebrow: 'What we do',
        title: (
          <>
            We <i className="text-sidebar-primary">audit, design, build,</i> and grow.
          </>
        ),
        description:
          'Five ways in, one standard of delivery. Every engagement is senior-led and run directly by the founders — start where it hurts most.',
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
              Talk about your project
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sidebar-border/70 px-5 py-3 text-sm font-medium text-sidebar-foreground transition-all hover:-translate-y-0.5 hover:border-sidebar-primary/60 hover:text-sidebar-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              {site.email} <ArrowUpRight className="size-4" />
            </a>
          </>
        ),
      }}
    >
      <Reveal>
        <SectionLabel>Five ways in</SectionLabel>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.n}
                className="group relative overflow-hidden rounded-2xl border border-border/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[.2em] text-primary">{s.n}</span>
                  <div className="flex size-10 flex-none items-center justify-center rounded-full border border-border/70 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" />
                  </div>
                </div>
                <h2 className="mt-6 font-sans text-3xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[.18em] text-primary/80">{s.tagline}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{s.desc}</p>
              </article>
            )
          })}
        </div>
      </Reveal>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>Speed, with receipts</SectionLabel>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map(([n, d]) => (
              <div key={n} className="rounded-2xl border border-border/70 p-6">
                <p className="font-sans text-4xl font-semibold tracking-tight text-primary">{n}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>How an engagement runs</SectionLabel>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Day 01', 'Audit & scope', 'We find what’s broken and what matters most. You get a plan, not a pitch.'],
              ['Weeks 01–02', 'Design & build', 'Senior hands on the work directly. You see progress in days, not decks.'],
              ['Ongoing', 'Launch & compound', 'Ship, measure, and either hand over or switch the Growth Engine on.'],
            ].map(([w, t, d], i) => (
              <li key={t} className="relative rounded-2xl border border-border/70 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">{w}</span>
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 font-sans text-2xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>Engagement types</SectionLabel>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 p-7">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Project</p>
              <h3 className="mt-4 font-sans text-3xl font-semibold tracking-tight">Fixed scope, fixed deadline</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A focused engagement for a specific need: brand system, website, app, or AI automation. Delivered fast —
                ask the clients who got sites in 48 hours.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/20 blur-3xl" />
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Retainer · Renewed 4× and counting</p>
              <h3 className="mt-4 font-sans text-3xl font-semibold tracking-tight">Growth Engine</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                SEO, ads, CRO, email, and AI automation run as one compounding system. Brand custodians, not vendors —
                the work gets sharper every sprint.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            className="group relative block overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-7 sm:p-9 hover:border-primary/50"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-110" />
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">Have a project in mind?</p>
            <h2 className="mt-4 max-w-lg font-sans text-3xl font-semibold leading-none tracking-[-.03em] sm:text-4xl">
              Start with the audit. It finds what’s broken — fast.
            </h2>
            <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium text-primary">
              {site.email}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        </Reveal>
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
