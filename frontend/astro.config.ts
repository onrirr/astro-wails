import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import tailwindIntegration from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwindIntegration()],
});
