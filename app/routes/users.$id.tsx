import { LoaderFunctionArgs } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import React from 'react'

export default function Users() {
  const params = useParams()
  console.log(params)
  return <div>UsersId: {params.id}</div>
}
