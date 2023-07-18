'use client'

import React, { useState } from 'react'
import ControlledOnboardingFlow from '../controlledOnboardingFlow/ControlledOnboardingFlow'
import FirstFlowItem from '../flowItems/FirstFlowItem'
import SecondFlowItem from '../flowItems/SecondFlowItem'
import ThirdFlowItem from '../flowItems/ThirdFlowItem'
import FourthFlowItem from '../flowItems/FourthFlowItem'
import { useAppSelector } from '@/hooks/hooks'

type Props = {}

const FlowItemsRoot = (props: Props) => {
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const onNext = (stepData: { [key: string]: any }) => {
  //   setOnboardingData({ ...onboardingData, ...stepData })
  //   setCurrentIndex(currentIndex + 1)
  // }
  // const onPrevious = (stepData: { [key: string]: any }) => {
  //   setOnboardingData({ ...onboardingData, ...stepData })
  //   setCurrentIndex(currentIndex - 1)
  // }
  return (
    // <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onPrevious={onPrevious}>
    <ControlledOnboardingFlow>
      <FirstFlowItem />
      <SecondFlowItem />
      <ThirdFlowItem />
      <FourthFlowItem />
    </ControlledOnboardingFlow>
  )
}

export default FlowItemsRoot
