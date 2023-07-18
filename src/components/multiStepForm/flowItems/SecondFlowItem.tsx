import React from 'react'
import FlowItemHeader from './commons/FlowItemHeader'
import ButtonSet from '../buttonSet/ButtonSet'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  dateTypeChanged,
  multiStepPlanData,
  planTypeChanged,
} from '@/features/multiStepForm/StepSlice'

type Props = {}
const SecondFlowItem = (props: Props) => {
  const dateType = useAppSelector((state) => state.step.dateType)
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col h-full w-full">
      <FlowItemHeader
        flowItemTitle="Select your plan"
        flowItemInfo="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 my-1 mb-4 lg:my-5 lg:justify-between lg:h-full">
        <Plan
          imgSource="/multi-step-form/images/icon-arcade.svg"
          planType="Arcade"
        />
        <Plan
          imgSource="/multi-step-form/images/icon-advanced.svg"
          planType="Advanced"
        />
        <Plan imgSource="/multi-step-form/images/icon-pro.svg" planType="Pro" />
      </div>
      <div className="flex flex-row justify-center gap-5 lg:mb-10 py-4 mt-auto bg-light-blue bg-opacity-50 rounded-lg">
        <label>Monthly</label>
        <div className="flex flex-row bg-marine-blue rounded-xl gap-1 items-center justify-center px-1">
          <div
            className={`cursor-pointer w-4 h-4 rounded-full ${
              dateType == 'mo' ? 'bg-white' : ''
            }`}
            onClick={() => dispatch(dateTypeChanged('mo'))}
          ></div>
          <div
            className={`cursor-pointer w-4 h-4 rounded-full ${
              dateType == 'yr' ? 'bg-white' : ''
            }`}
            onClick={() => dispatch(dateTypeChanged('yr'))}
          ></div>
        </div>
        <label>Yearly</label>
      </div>
      <ButtonSet visible="desktop" />
    </div>
  )
}

type PlanProps = {
  imgSource: string
  planType: 'Arcade' | 'Advanced' | 'Pro'
}
const Plan = (props: PlanProps) => {
  const dispatch = useAppDispatch()
  const dateType = useAppSelector((state) => state.step.dateType)
  const planType = useAppSelector((state) => state.step.planType)
  const selectedType = planType == props.planType
  return (
    <div
      className={`border border-solid border-cool-gray rounded-lg flex flex-row justify-start items-start gap-2 lg:flex-col lg:justify-between lg:w-[30%] p-2 lg:p-3 lg:gap-8 lg:h-fit ${
        selectedType && 'bg-light-blue bg-opacity-50'
      } cursor-pointer`}
      onClick={() => dispatch(planTypeChanged(props.planType))}
    >
      <Image src={props.imgSource} width={40} height={40} alt="alt" />
      <div className="flex flex-col gap-0">
        <p className="text-marine-blue font-bold">{props.planType}</p>
        <p className="text-cool-gray">
          $
          {
            multiStepPlanData.filter((a) => a.planType == props.planType)[0]
              .planPrices[dateType]
          }
          /{dateType}
        </p>
        {dateType == 'yr' && (
          <p className="text-sm text-marine-blue font-bold">2 months free</p>
        )}
      </div>
    </div>
  )
}

export default SecondFlowItem
