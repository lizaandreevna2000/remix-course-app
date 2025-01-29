import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/*", "routes/marketing/layout.tsx", () => {
            route("", "routes/marketing/index.tsx", { index: true });
            route("pricing", "routes/marketing/pricing.tsx");
            route("auth", "routes/marketing/auth.tsx");
          });
          route("expenses", "routes/expenses/layout.tsx", () => { 
            route("", "routes/expenses/index.tsx", { index: true });
            route("add", "routes/expenses/add.tsx");
            route("raw", "routes/expenses/raw.tsx");
            route("analysis", "routes/expenses/analysis.tsx");
            route(":id", "routes/expenses/$id.tsx");
          });
        }); 
      }, 
    }),
    tsconfigPaths(),
  ],
});
