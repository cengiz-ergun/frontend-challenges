import React from 'react'
import FlowItemHeader from './commons/FlowItemHeader'
import FlowItemInput from './commons/FlowItemInput'
import ButtonSet from '../buttonSet/ButtonSet'

type Props = {}

const FirstFlowItem = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <FlowItemHeader
        flowItemTitle="Personal info"
        flowItemInfo="Please provide your name, email address, and phone number."
      />
      <FlowItemInput
        miniTitle="Name"
        placeHolder="e.g. Stephen King"
        inputType="name"
      />
      <FlowItemInput
        miniTitle="Email Address"
        placeHolder="e.g. stephenking@lorem.com"
        inputType="email"
      />
      <FlowItemInput
        miniTitle="Phone Number"
        placeHolder="e.g. +1 234 567 890"
        inputType="tel"
      />
      <ButtonSet visible="desktop" />
    </div>
  )
}

export default FirstFlowItem
