import React from 'react'
import FlowItemHeader from './commons/FlowItemHeader'
import ButtonSet from '../buttonSet/ButtonSet'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  addOnTypeChanged,
  multiStepAddOnData,
} from '@/features/multiStepForm/StepSlice'

type Props = {}

const ThirdFlowItem = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <FlowItemHeader
        flowItemTitle="Pick add-ons"
        flowItemInfo="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-5">
        <AddOn
          addOnTitle="Online service"
          addOnDetail="Access to multiplayer games"
        />
        <AddOn
          addOnTitle="Larger storage"
          addOnDetail="Extra 1TB of cloud save"
        />
        <AddOn
          addOnTitle="Customizable profile"
          addOnDetail="Custom theme on your profile"
        />
      </div>
      <ButtonSet visible="desktop" />
    </div>
  )
}

type AddOnProps = {
  addOnTitle: string
  addOnDetail: string
}
const AddOn = (props: AddOnProps) => {
  const dispatch = useAppDispatch()
  const dateType = useAppSelector((state) => state.step.dateType)
  const addOnTypes = useAppSelector((state) => state.step.addOnType)
  const isActive = addOnTypes.includes(props.addOnTitle)
  const price = multiStepAddOnData.filter(
    (d) => d.addOnType == props.addOnTitle,
  )[0].addOnPrices[dateType]
  // console.log(multiStepAddOnData.filter(d => d.addOnType == props.addOnTitle))
  // console.log(isActive)
  return (
    <div
      className={`flex flex-row items-center border border-solid border-cool-gray p-3 rounded-lg gap-5 ${
        isActive && 'border-marine-blue bg-light-blue bg-opacity-40'
      } cursor-pointer`}
      onClick={() => dispatch(addOnTypeChanged(props.addOnTitle))}
    >
      <div
        className={`w-4 h-4 flex justify-center items-center rounded-sm ${
          isActive ? 'bg-purplish-blue' : 'border-cool-gray border-solid border'
        }`}
      >
        <Image
          src={'/multi-step-form/images/icon-checkmark.svg'}
          alt="random"
          width={12}
          height={12}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-base text-marine-blue font-bold">
          {props.addOnTitle}
        </p>
        <p className="text-xs text-cool-gray">{props.addOnDetail}</p>
      </div>
      <p className="text-sm text-purplish-blue ml-auto">
        +${price}/{dateType}
      </p>
    </div>
  )
}

export default ThirdFlowItem
