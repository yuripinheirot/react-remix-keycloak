import type { MetaFunction } from '@remix-run/node'
import { Header } from '~/components/Header'
import { RouterButton } from '~/components/RouterButton'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <Header />
      <h1>Welcome to Remix</h1>
    </div>
  )
}
