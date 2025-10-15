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
		'/services/growth-engine',
		'/industries',
		'/industries/ecommerce',
		'/industries/saas',
		'/industries/healthcare',
		'/pricing',
		'/careers',
		'/blog',
		'/case-studies',
		'/team',
		'/process',
		'/products',
		'/support',
		'/tutorials',
		'/docs',
		'/privacy',
		'/terms',
		'/cookies',
		'/security'
	]

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified,
		changeFrequency: 'weekly',
		priority: route === '/' ? 1 : 
			route.startsWith('/services') ? 0.9 : 
			route === '/careers' ? 0.8 :
			route === '/blog' ? 0.8 :
			route === '/case-studies' ? 0.8 :
			route === '/portfolio' ? 0.8 :
			0.7,
	}))
}
