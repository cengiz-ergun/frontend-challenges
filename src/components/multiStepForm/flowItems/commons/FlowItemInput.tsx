import {
  dataChanged,
  validationsChanged,
} from '@/features/multiStepForm/StepSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import React, { useState } from 'react'

type Props = {
  miniTitle: string
  placeHolder: string
  inputType: string
}

const FlowItemInput = (props: Props) => {
  const dispatch = useAppDispatch()
  // const [inputValue, setInputValue] = useState('')
  const inputData = useAppSelector((state) => state.step.inputData)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const onValidateHandle = (value: string) => {
    const regexMap: any = {
      name: /^[A-Za-zğüşıöçĞÜŞİÖÇ\s]+$/,
      email: /^\S+@\S+\.\S+$/,
      tel: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    }

    const validationMessages: any = {
      name: 'Invalid Name',
      email: 'Invalid Email',
      tel: 'Invalid Phone Number',
    }

    const regex = regexMap[props.inputType]
    const isValid = regex.test(value)

    setIsError(!isValid)
    setErrorMessage(isValid ? '' : validationMessages[props.inputType])

    if (isValid) {
      dispatch(validationsChanged({ [props.inputType]: true }))
    } else {
      dispatch(validationsChanged({ [props.inputType]: false }))
    }
  }
  return (
    <div className="flex flex-col gap-1 mb-5">
      <div className="flex flex-row justify-between items-center">
        <label className="text-marine-blue">{props.miniTitle}</label>
        {isError && <label className="text-red-500">{errorMessage}</label>}
      </div>
      <input
        className={`w-full h-10 border border-solid ${
          isError ? 'border-red-500' : 'border-cool-gray'
        } rounded-lg px-2 outline-none focus:border-2 focus:border-marine-blue`}
        type="text"
        placeholder={props.placeHolder}
        onChange={(e) => {
          dispatch(dataChanged({ [props.inputType]: e.target.value }))
          onValidateHandle(e.target.value)
        }}
        value={inputData[props.inputType]}
        onFocus={() => setIsError(false)}
        onBlur={(e) => onValidateHandle(e.target.value)}
      />
    </div>
  )
}

export default FlowItemInput
