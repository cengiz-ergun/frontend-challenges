import React, { useEffect, useRef } from 'react'
import {
  incremented,
  decremented,
  allStepsFinished,
} from '@/features/multiStepForm/StepSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

type Props = {
  type: 'goToNext' | 'returnToBack'
  visible: 'mobile' | 'desktop'
}

const Button = (props: Props) => {
  const currentStep = useAppSelector((state) => state.step.value)
  const validations = useAppSelector((state) => state.step.validations)
  const values = Object.values(validations)
  const result = values.reduce((prev, current) => prev && current, true)
  const nextAllowed = currentStep !== 1 ? true : result === true ? true : false
  const dispatch = useAppDispatch()
  return (
    <button
      className={`${
        props.type == 'goToNext'
          ? `ml-auto text-white bg-marine-blue ${
              !nextAllowed && 'hover:cursor-not-allowed'
            }`
          : 'mr-auto text-marine-blue bg-white'
      } w-28 h-12 text-center cursor-pointer rounded-lg hover:opacity-80 ${
        !nextAllowed && 'hover:opacity-100'
      } font-ubuntu ${props.visible == 'mobile' && 'my-4'}`}
      // onClick={() => dispatch(props.type == "goToNext" ? (nextAllowed ? incremented() : () => {}) : decremented())}
      // onClick={() => dispatch(props.type == "goToNext" ? ( incremented() ) : decremented())}
      // onClick={() => dispatch(props.type == "goToNext" ? ( (currentStep == 4 ? allStepsFinished(true) : incremented()) ) : decremented())}
      onClick={() =>
        dispatch(
          props.type == 'goToNext'
            ? currentStep == 4
              ? allStepsFinished(true)
              : nextAllowed
              ? incremented()
              : () => {}
            : decremented(),
        )
      }
    >
      {/* {props.type == 'goToNext' ? 'Next Step' : 'Go Back'} */}
      {props.type == 'goToNext'
        ? currentStep == 4
          ? 'Confirm'
          : 'Next Step'
        : 'Go Back'}
    </button>
  )
}

export default Button
