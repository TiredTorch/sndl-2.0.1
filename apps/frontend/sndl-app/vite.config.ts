/// <reference types='vitest' />
import { defineConfig } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
	root: __dirname,
	cacheDir: "../../../node_modules/.vite/apps/frontend/sndl-app",

	server: {
		port: 4200,
		host: "localhost",
	},

	preview: {
		port: 4300,
		host: "localhost",
	},

	plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

	build: {
		outDir: "../../../dist/apps/frontend/sndl-app",
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},

	define: {
		"import.meta.vitest": undefined,
	},
	test: {
		globals: true,
		cache: {
			dir: "../../../node_modules/.vitest",
		},
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		includeSource: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: "../../../coverage/apps/frontend/sndl-app",
			provider: "v8",
		},
	},
});
