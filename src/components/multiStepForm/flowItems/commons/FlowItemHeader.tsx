import React from 'react'

type Props = {
  flowItemTitle: string
  flowItemInfo: string
}

const FlowItemHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start my-6">
      <p className="text-marine-blue text-4xl font-bold">
        {props.flowItemTitle}
      </p>
      <p className="text-cool-gray">{props.flowItemInfo}</p>
    </div>
  )
}

export default FlowItemHeader
