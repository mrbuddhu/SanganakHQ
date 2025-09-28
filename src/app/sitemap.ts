import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://sanganak.org'
	const lastModified = new Date()

	const routes: string[] = [
		'/',
		'/about',
		'/contact',
		'/portfolio',
		'/services',
		'/services/luxury-branding',
		'/services/elite-design',
		'/services/bespoke-applications',
		'/services/blockchain-innovation',
		'/services/ai-powered-intelligence',
		'/services/marketing-hq'
	]

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified,
		changeFrequency: 'weekly',
		priority: route === '/' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
	}))
}
