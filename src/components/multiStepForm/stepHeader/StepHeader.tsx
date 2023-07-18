import React from 'react'
import StepNumber from '../stepNumber/StepNumber'

type Props = {
  stepNumber: number
  stepTitle: string
}

const StepHeader = (props: Props) => {
  return (
    <div className="flex flex-row flex-start gap-3">
      <StepNumber stepNumber={props.stepNumber} />
      <div className="flex flex-col text-white text-xs">
        <div className="block text-light-blue">STEP {props.stepNumber}</div>
        <div>{props.stepTitle}</div>
      </div>
    </div>
  )
}

export default StepHeader
