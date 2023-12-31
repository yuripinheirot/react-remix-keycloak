import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Header } from './components/Header'
import { SSRKeycloakProvider } from '@react-keycloak/ssr'
import { keycloakProviderConfig } from './providers/keycloak'

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          padding: 0,
          margin: 0,
          backgroundColor: '#2e2e2e',
          color: '#f2f2f2',
        }}
      >
        <SSRKeycloakProvider
          keycloakConfig={{
            url: 'http://localhost:8080/auth',
            realm: 'ineo',
            clientId: 'ineo-front',
          }}
        >
          <Header />
          <Outlet />
        </SSRKeycloakProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
