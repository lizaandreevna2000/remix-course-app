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
          route("expenses", "expenses/layout.tsx", () => { 
            route("", "expenses/index.tsx", { index: true });
            route("add", "expenses/add.tsx");
            route("raw", "expenses/raw.tsx");
            route("analysis", "expenses/analysis.tsx");
            route(":id", "expenses/$id.tsx");
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
