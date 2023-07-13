import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode[]
}

const SplitScreen = (props: Props) => {
  const [left, right] = props.children
  return (
    <div className="flex flex-row gap-4 h-screen p-3 w-full">
      {left}
      {right}
    </div>
  )
}

export default SplitScreen
