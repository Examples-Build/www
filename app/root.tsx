import type { MetaFunction, LinksFunction, LoaderArgs } from '@remix-run/node';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import NavigationSwitcher from '~/nav';

import styles from '~/styles/main.css';

export function loader({ request }: LoaderArgs) {
  return {
    host: request.headers.get('x-forwarded-host'),
  };
}

export const meta: MetaFunction<typeof loader> = ({ data: { host } }) => ({
  charset: 'utf-8',
  title: 'Weekship - Free Boilerplates',
  description: 'Week Shippers United',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@weekship',
  'twitter:creator': '@weekship',
  'twitter:title': 'Ship in a Week',
  'twitter:description': 'Week Shippers United',
  'twitter:image': `https://${host}/og-card.png`,
  'twitter:image:alt': 'Weekship',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavigationSwitcher />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
