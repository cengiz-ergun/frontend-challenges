import Image from 'next/image'
import React from 'react'
import FlowItemHeader from './commons/FlowItemHeader'

type Props = {}

const FinishedItem = (props: Props) => {
  return (
    <div className="my-2 mx-3 lg:px-20 flex flex-col justify-between h-[520px] lg:h-auto w-full">
      <div className="flex flex-col justify-center items-center h-full w-full text-center">
        <Image
          src={'/multi-step-form/images/icon-thank-you.svg'}
          width={70}
          height={70}
          alt="alt"
        />
        <div className="flex flex-col gap-4 items-center justify-center my-6">
          <p className="text-marine-blue text-4xl font-bold">Thank you!</p>
          <p className="text-cool-gray">
            {' '}
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinishedItem
