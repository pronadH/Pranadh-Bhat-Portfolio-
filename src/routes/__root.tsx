import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pranadh Bhat — Tech Enthusiast | Gamer | Science Lover" },
      { name: "description", content: "Personal portfolio of Pranadh Bhat — 8th grade student from Udupi passionate about tech, science, gaming, and racing cars." },
      { name: "author", content: "Pranadh Bhat" },
      { property: "og:title", content: "Pranadh Bhat — Tech Enthusiast | Gamer | Science Lover" },
      { property: "og:description", content: "Personal portfolio of Pranadh Bhat — 8th grade student from Udupi passionate about tech, science, gaming, and racing cars." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Pranadh Bhat — Tech Enthusiast | Gamer | Science Lover" },
      { name: "twitter:description", content: "Personal portfolio of Pranadh Bhat — 8th grade student from Udupi passionate about tech, science, gaming, and racing cars." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5168ca8a-436b-4edb-9871-b1a09002ab7b/id-preview-9b4584d5--77edf45c-ebea-4646-9d99-5d7d9bef1466.lovable.app-1776833092521.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5168ca8a-436b-4edb-9871-b1a09002ab7b/id-preview-9b4584d5--77edf45c-ebea-4646-9d99-5d7d9bef1466.lovable.app-1776833092521.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
