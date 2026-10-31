import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import { ParallaxMedia } from '@/components/premium'
import { Reveal, SiteShell } from '@/components/site-shell'
import { projects, site } from '@/lib/site-content'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) notFound()
  const i = projects.indexOf(p)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]

  return (
    <SiteShell
      left={{
        eyebrow: `${p.category} · ${p.year}`,
        title: <>{p.title}</>,
        description: p.summary,
        showClients: false,
        actions: (
          <>
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-sidebar-border/70 px-5 py-3 text-sm font-medium text-sidebar-foreground transition-all hover:-translate-y-0.5 hover:border-sidebar-primary/60 hover:text-sidebar-primary"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Back to work
            </Link>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sidebar-primary px-5 py-3 text-sm font-medium text-sidebar-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-14px_rgba(245,182,66,0.7)] active:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Visit live
                <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </>
        ),
      }}
    >
      <Reveal>
        <ParallaxMedia accent={p.accent} className="aspect-[16/10] w-full rounded-2xl border border-border/70">
          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/75">
                {p.category} · {p.year}
              </p>
              <h1 className="mt-1 font-sans text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {p.title}
              </h1>
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 flex-none items-center justify-center rounded-full bg-white/15 backdrop-blur-md hover:bg-sidebar-primary"
              >
                <ExternalLink className="size-4 text-white" />
              </a>
            )}
          </div>
        </ParallaxMedia>
      </Reveal>

      <div className="mt-16 sm:mt-20 grid gap-10 md:grid-cols-3 sm:mt-24">
        {[
          ['The challenge', p.challenge],
          ['The approach', p.approach],
          ['The outcome', p.outcome],
        ].map(([h, t]) => (
          <Reveal key={h}>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">{h}</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{t}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <ParallaxMedia accent={p.accent} label="Identity" className="aspect-[4/3] rounded-2xl border border-border/70" />
            <ParallaxMedia accent={p.accent} label="Product" className="aspect-[4/3] rounded-2xl border border-border/70" />
            <ParallaxMedia accent={p.accent} label="Campaign" className="aspect-[4/3] rounded-2xl border border-border/70 sm:col-span-2" />
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/70 p-6 sm:p-7">
            <span className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Results</span>
            <ul className="flex flex-wrap gap-3 text-sm">
              {(p.metrics ?? site.trustMetrics).map((m) => (
                <li
                  key={m.label}
                  className="flex items-center gap-2 rounded-full border border-border/60 px-4 py-2"
                >
                  <span className="font-sans text-lg font-semibold text-primary">{m.label}</span>
                  <span className="text-xs uppercase tracking-[.14em] text-muted-foreground">{m.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">Keep going</p>
            <div className="h-px flex-1 bg-gradient-to-r from-border via-border/50 to-transparent" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href={`/work/${prev.slug}`}
              className="group rounded-2xl border border-border/70 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">Previous</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex size-10 flex-none items-center justify-center rounded-full border border-border/60 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[12deg]">
                  <ArrowLeft className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-sans text-xl font-semibold tracking-tight">{prev.title}</h3>
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {prev.category} · {prev.year}
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-primary">Next</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex size-10 flex-none items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-12deg]">
                  <ArrowRight className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-sans text-xl font-semibold tracking-tight">{next.title}</h3>
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {next.category} · {next.year}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/20 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">Have a project like this?</p>
            <h2 className="mt-4 max-w-lg font-sans text-3xl font-semibold leading-none tracking-[-.03em] sm:text-4xl">
              Let&apos;s build something worth scrolling for.
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
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                {site.email} <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </SiteShell>
  )
}
