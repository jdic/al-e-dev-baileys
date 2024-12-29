// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
	site: 'https://jdic.github.io/',
	base: '/al-e-dev-baileys',
	integrations:
	[
		starlight({
			title: '@al-e-dev/Baileys',
			social:
			{
				github: 'https://github.com/al-e-dev/Baileys',
			},
			sidebar:
			[
				{
					label: 'Guides',
					items:
					[
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
})
