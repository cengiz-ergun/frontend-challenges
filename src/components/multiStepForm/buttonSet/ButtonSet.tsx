import React from 'react'
import Button from '../button/Button'
import { useAppSelector } from '@/hooks/hooks'
import { MIN_STEP } from '../constants/constants'

type Props = {
  visible: 'mobile' | 'desktop'
}

const ButtonSet = (props: Props) => {
  const currentStep = useAppSelector((state) => state.step.value)
  return props.visible == 'desktop' ? (
    <div className="mt-auto hidden lg:flex flex-row justify-between">
      {currentStep != MIN_STEP && (
        <Button type="returnToBack" visible="desktop" />
      )}
      <Button type="goToNext" visible="desktop" />
    </div>
  ) : (
    <div className="flex lg:hidden flex-row h-full px-4">
      {currentStep != MIN_STEP && (
        <Button type="returnToBack" visible="mobile" />
      )}
      <Button type="goToNext" visible="mobile" />
    </div>
  )
}

export default ButtonSet
