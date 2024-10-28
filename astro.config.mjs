import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://siemlasseel.be',
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false
	}
});
