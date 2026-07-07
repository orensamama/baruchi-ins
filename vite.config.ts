// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // This project deploys to Vercel. Nitro's own zero-config auto-detection
  // already picks the "vercel" preset there, but we pin it explicitly to
  // remove any doubt, plus set the function runtime (`vercel.functions.runtime`
  // isn't part of this wrapper's narrow public type, hence the cast — Nitro
  // itself accepts it fine). Without this, Nitro derives the runtime from
  // whichever Node.js version happens to be on the machine running the build,
  // which is fragile — pin to a stable, definitely-supported Vercel LTS runtime.
  nitro: {
    preset: "vercel",
    vercel: {
      functions: { runtime: "nodejs22.x" },
    },
  } as { preset: string },
});
