import Link from 'next/link'
import React from 'react'

export interface Route {
  linkText: string
  path: string
}

type Props = {
  routeDefinitions: Route[]
}

const Sidebar = (props: Props) => {
  return (
    <nav className="grow-0 bg-slate-900 text-white rounded-lg p-3 w-fit overflow-auto">
      <ul>
        {props.routeDefinitions.map((route) => (
          <li key={route.linkText} className="pb-2.5">
            <Link href={route.path}>{route.linkText}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
