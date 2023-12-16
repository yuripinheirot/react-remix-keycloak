import React from 'react'
import { Link, useLocation } from '@remix-run/react'

export const RouterButton = () => {
  const location = useLocation()
  const routes: string[] = ['/', 'users/1', 'users']

  return (
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
  )
}
