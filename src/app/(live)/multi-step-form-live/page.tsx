'use client'

import ButtonSet from '@/components/multiStepForm/buttonSet/ButtonSet'
import FinishedItem from '@/components/multiStepForm/flowItems/FinishedItem'
import FlowItemsRoot from '@/components/multiStepForm/flowItemsRoot/FlowItemsRoot'
import StepHeader from '@/components/multiStepForm/stepHeader/StepHeader'
import StepNumber from '@/components/multiStepForm/stepNumber/StepNumber'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { store } from '@/store/store'
import { Metadata } from 'next'
import { Provider } from 'react-redux'

// export const metadata: Metadata = {
//   title: 'Frontend Challenges - Multi Step Form',
// }

export default function Page() {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  )
}

function Inner() {
  // const currentStep = useAppSelector((state) => state.step.value)
  const isFinished = useAppSelector((state) => state.step.finished)
  return (
    <div className="font-ubuntu flex flex-col h-screen">
      <div className="bg-sidebar-mobile bg-no-repeat bg-[length:100vw_auto] pb-10 lg:pb-0 lg:bg-none lg:h-screen bg-light-blue flex flex-col lg:flex-row items-center">
        <div className="flex lg:hidden w-full">
          <div className="w-full flex flex-row items-center justify-center gap-8 py-8">
            <StepNumber stepNumber={1} />
            <StepNumber stepNumber={2} />
            <StepNumber stepNumber={3} />
            <StepNumber stepNumber={4} />
          </div>
        </div>
        <div className="bg-white rounded-lg w-[90%] lg:w-4/5 h-fit mx-auto flex p-3 max-w-[1000px]">
          {/* <div className="hidden lg:flex w-[274px] h-[568px]"> */}
          <div className="hidden lg:flex min-w-[240px] h-[568px]">
            <div className="flex flex-col bg-sidebar-desktop bg-cover rounded-lg items-start gap-8 p-8 w-full">
              <StepHeader stepNumber={1} stepTitle="YOUR INFO" />
              <StepHeader stepNumber={2} stepTitle="SELECT PLAN" />
              <StepHeader stepNumber={3} stepTitle="ADD-ONS" />
              <StepHeader stepNumber={4} stepTitle="SUMMARY" />
            </div>
          </div>
          {isFinished ? <FinishedItem /> : <FlowItemsRoot />}
        </div>
      </div>
      {!isFinished && <ButtonSet visible="mobile" />}
    </div>
  )
}
