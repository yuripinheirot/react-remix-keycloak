import React from 'react'
import { Link } from '@remix-run/react'

export const Header = () => {
  const routes: string[] = ['/', 'users/1', 'users']

  return (
    <div
      style={{
        height: '46px',
        backgroundColor: '#0e0e0e',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ columnGap: 6, display: 'flex' }}>
        {routes.map((r) => (
          <Link
            style={{
              padding: 10,
              backgroundColor: '#000',
              color: '#f2f2f2',
            }}
            key={r}
            to={r}
          >
            {r}
          </Link>
        ))}
      </div>
    </div>
  )
}
