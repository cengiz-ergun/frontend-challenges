import { useAppSelector } from '@/hooks/hooks'
import React from 'react'

type Props = {
  children: any
  // currentIndex: any,
  // onNext: any,
  // onPrevious: any,
}

const ControlledOnboardingFlow = (props: Props) => {
  const currentStep = useAppSelector((state) => state.step.value)
  // const goToNext = (stepData: any) => {
  // 	props.onNext(stepData);
  // }
  // const backToPrevious = (stepData: any) => {
  // 	props.onPrevious(stepData);
  // }

  const currentChild = React.Children.toArray(props.children)[currentStep - 1]

  if (React.isValidElement(currentChild)) {
    return (
      <div className="my-2 mx-3 lg:px-20 flex flex-col justify-between h-[520px] lg:h-auto w-full">
        {/* {React.cloneElement(currentChild as any, { goToNext, backToPrevious })} */}
        {React.cloneElement(currentChild)}
      </div>
    )
  }

  return currentChild
}

export default ControlledOnboardingFlow
