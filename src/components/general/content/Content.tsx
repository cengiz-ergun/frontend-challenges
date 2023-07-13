import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content = (props: Props) => {
  return (
    <div className="bg-slate-900 text-white rounded-lg p-3 grow">
      {props.children}
    </div>
  )
}

export default Content
