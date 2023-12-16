import React from 'react'
import { RouterButton } from './RouterButton'

export const Header = () => {
  return (
    <div
      style={{
        height: '46px',
        backgroundColor: '#2e2e2e',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <RouterButton />
    </div>
  )
}
