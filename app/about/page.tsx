import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SiteShell, Reveal } from '@/components/site-shell'
import { site } from '@/lib/site-content'

export default function About() {
  return (
    <SiteShell
      left={{
        eyebrow: `About ${site.brand}`,
        title: (
          <>
            Founder-led. <i className="text-sidebar-primary">Receipts included.</i>
          </>
        ),
        description:
          'A compact, Bengaluru-based team of engineers, designers, and growth operators led by two founders who show up in every thread — the same names clients mention in every review.',
        showClients: true,
        actions: (
          <>
            <a
              href={`mailto:${site.email}`}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sidebar-primary px-5 py-3 text-sm font-medium text-sidebar-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-14px_rgba(245,182,66,0.7)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-primary"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Say hello
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
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
      <Reveal>
        <SectionLabel>The founders</SectionLabel>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {site.founders.map((f) => (
            <Card key={f.name}>
              <div className="flex items-center gap-4">
                <div className="flex size-12 flex-none items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {f.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-sans text-xl font-semibold tracking-tight">{f.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {f.role} · {f.focus}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{f.bio}</p>
            </Card>
          ))}
        </div>
      </Reveal>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>Proof, not promises</SectionLabel>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Top 1%', 'Rated talent on Contra — a marketplace that measures delivery'],
              ['5.00 ★', 'Across 31 verified client reviews, with more on Clutch'],
              ['50+', 'Products branded, designed, built, and shipped'],
            ].map(([n, d]) => (
              <div key={n} className="rounded-2xl border border-border/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <h2 className="font-sans text-3xl font-semibold tracking-tight text-primary">{n}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <SectionLabel>What working with us feels like</SectionLabel>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'The founders on the work from kickoff to launch — no junior handoffs',
              'Speed with receipts: 48-hour sites, 24-hour rebuilds, week-one app launches',
              'A weekly shared note — no scrambling for status calls',
              'Clear scope, fixed milestones, honest when plans need to shift',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 p-5">
                <CheckCircle2 className="mt-0.5 size-5 flex-none text-primary" />
                <span className="text-sm leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">Want to go deeper?</p>
            <h2 className="mt-4 max-w-lg font-sans text-3xl font-semibold leading-none tracking-[-.03em] sm:text-4xl">
              Let&apos;s talk about what you&apos;re really building.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(245,182,66,0.75)]"
              >
                Book a call <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                See the work <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
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

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-border/70 p-6 sm:p-7">{children}</div>
}
