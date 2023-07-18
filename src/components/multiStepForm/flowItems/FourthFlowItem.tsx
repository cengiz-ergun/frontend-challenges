import React, { useEffect, useRef, useState } from 'react'
import FlowItemHeader from './commons/FlowItemHeader'
import ButtonSet from '../buttonSet/ButtonSet'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  dateTypeChanged,
  multiStepAddOnData,
  multiStepPlanData,
} from '@/features/multiStepForm/StepSlice'

type Props = {}

const FourthFlowItem = (props: Props) => {
  const planType = useAppSelector((state) => state.step.planType)
  const dateType = useAppSelector((state) => state.step.dateType)
  const addOnTypes = useAppSelector((state) => state.step.addOnType)

  const dispatch = useAppDispatch()

  const planData = multiStepPlanData.filter((d) => d.planType == planType)[0]
  const planDataPrice = planData.planPrices[dateType]

  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(0)
    const planData = multiStepPlanData.filter((d) => d.planType == planType)[0]
    const planDataPrice = planData.planPrices[dateType]

    let sumAddOn = 0
    addOnTypes.map(
      (t) =>
        (sumAddOn += multiStepAddOnData.filter((d) => d.addOnType == t)[0]
          .addOnPrices[dateType]),
    )

    setTotal(planDataPrice + sumAddOn)
  }, [addOnTypes, planType, dateType])
  return (
    <div className="flex flex-col h-full w-full">
      <FlowItemHeader
        flowItemTitle="Finishing up"
        flowItemInfo="Double-check everything looks OK before confirming."
      />
      <div className="bg-light-blue bg-opacity-30 rounded-lg p-5">
        <div className="flex flex-row justify-between items-center text-marine-blue font-bold">
          <div className="flex flex-col items-start">
            <p>
              {planType}({dateType == 'mo' ? 'Monthly' : 'Yearly'})
            </p>
            <button
              className="underline font-thin text-blue-600 cursor-pointer"
              onClick={() =>
                dispatch(dateTypeChanged(dateType == 'mo' ? 'yr' : 'mo'))
              }
            >
              Change
            </button>
          </div>
          <div>
            ${planDataPrice}/{dateType}
          </div>
        </div>
        <hr className="h-px mt-6 mb-3 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        {addOnTypes.map((t) => (
          <div
            key={t}
            className="flex flex-row justify-between items-center mt-3"
          >
            {}
            <div className="text-cool-gray">{t}</div>
            <div className="text-marine-blue">
              +$
              {
                multiStepAddOnData.filter((d) => d.addOnType == t)[0]
                  .addOnPrices[dateType]
              }
              /{dateType}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center p-5">
        <div className="text-cool-gray">
          Total(per {dateType == 'mo' ? 'month' : 'year'})
        </div>
        <div className="font-bold text-2xl text-blue-600">
          +${total}/{dateType}
        </div>
      </div>
      <ButtonSet visible="desktop" />
    </div>
  )
}

export default FourthFlowItem
