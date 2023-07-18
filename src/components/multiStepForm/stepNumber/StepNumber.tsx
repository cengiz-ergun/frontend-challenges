import { useAppSelector } from '@/hooks/hooks'
import React from 'react'

type Props = {
  stepNumber: number
}

const StepNumber = (props: Props) => {
  const currentStep = useAppSelector((state) => state.step.value)
  return (
    <div
      className={`border border-solid border-1 rounded-full ${
        currentStep == props.stepNumber
          ? 'bg-light-blue border-light-blue text-marine-blue'
          : 'border-white text-white'
      } w-7 h-7 flex justify-center items-center`}
    >
      {props.stepNumber}
    </div>
  )
}

export default StepNumber
