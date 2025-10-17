import { NextResponse } from 'next/server';
import { articles } from '@/app/articles';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const siteUrl = 'https://sanganak.org';
  const feedUrl = `${siteUrl}/rss.xml`;
  const now = new Date().toUTCString();

  const items = (articles || []).map((a: any) => {
    const link = `${siteUrl}/blog/${a.id}`;
    const pubDate = a.date ? new Date(a.date).toUTCString() : now;
    const title = escapeXml(a.title || '');
    const description = escapeXml(a.excerpt || a.content || '');
    return `
      <item>
        <title>${title}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${description}</description>
      </item>
    `;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>SANGANAK HQ Blog</title>
      <link>${siteUrl}</link>
      <description>SANGANAK HQ — Insights on Branding, Design, AI, Blockchain, and Growth.</description>
      <lastBuildDate>${now}</lastBuildDate>
      <language>en-us</language>
      <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${feedUrl}" rel="self" type="application/rss+xml" />
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}


