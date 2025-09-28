import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://sanganak.org'
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	}
}
