import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import styles from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lawn Care in Patterson, CA | Muniz Lawn Care" },
      {
        name: "description",
        content:
          "Lawn care in Patterson, CA, from mowing and sprinkler repair to seasonal leaf cleanups, flower bed rotations and weed control. Request a Muniz Lawn Care estimate.",
      },
      { name: "theme-color", content: "#203a2b" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { rel: "icon", href: "/images/logo.webp", type: "image/webp" },
    ],
  }),
  component: () => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <main className="not-found">
      <h1>A little off the path.</h1>
      <p>We couldn’t find that page.</p>
      <a className="button" href="/">
        Back to the lawn <span aria-hidden="true">↗</span>
      </a>
    </main>
  ),
});
