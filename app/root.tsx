/** @format */
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "~/styles/global.scss";
import { Footer, Header } from "~/component";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className='main'>{children}</main>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className='main'>
          <h2>An error occured</h2>\<p>{error.message}</p>
          <p>
            Back to <Link to='/'>saftey</Link>
          </p>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const CatchBoundary = () => {
  const error = useRouteError();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className='main'>
          <h2>The page could not be found or access</h2>\
          {isRouteErrorResponse(error) ? (
            <>
              <p>Status: {error.status}</p>
              <p>{error.statusText}</p>
            </>
          ) : (
            <p>Unknown error. Please try again later.</p>
          )}
          <p>
            Back to <Link to='/'>saftey</Link>
          </p>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return <Outlet />;
}
