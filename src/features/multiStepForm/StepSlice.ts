import {
  MAX_STEP,
  MIN_STEP,
} from '@/components/multiStepForm/constants/constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const multiStepPlanData = [
  { planType: 'Arcade', planPrices: { mo: 9, yr: 90 } },
  { planType: 'Advanced', planPrices: { mo: 12, yr: 120 } },
  { planType: 'Pro', planPrices: { mo: 15, yr: 150 } },
]

export const multiStepAddOnData = [
  { addOnType: 'Online service', addOnPrices: { mo: 1, yr: 10 } },
  { addOnType: 'Larger storage', addOnPrices: { mo: 2, yr: 20 } },
  { addOnType: 'Customizable profile', addOnPrices: { mo: 2, yr: 20 } },
]

interface StepState {
  value: number
  dateType: 'mo' | 'yr'
  planType: 'Arcade' | 'Advanced' | 'Pro'
  addOnType: string[]
  validations: any
  inputData: any
  finished: boolean
}

const initialState: StepState = {
  value: 1,
  dateType: 'mo',
  planType: 'Arcade',
  addOnType: [],
  finished: false,
  validations: {
    name: false,
    email: false,
    tel: false,
  },
  inputData: {
    name: '',
    email: '',
    tel: '',
  },
}

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    incremented(state) {
      if (state.value + 1 <= MAX_STEP) {
        state.value++
      }
    },
    decremented(state) {
      if (state.value - 1 >= MIN_STEP) {
        state.value--
      }
    },
    dateTypeChanged(state, action: PayloadAction<'mo' | 'yr'>) {
      state.dateType = action.payload
    },
    planTypeChanged(
      state,
      action: PayloadAction<'Arcade' | 'Advanced' | 'Pro'>,
    ) {
      state.planType = action.payload
    },
    addOnTypeChanged(state, action: PayloadAction<string>) {
      state.addOnType = state.addOnType.includes(action.payload)
        ? state.addOnType.filter((d) => d !== action.payload)
        : [...state.addOnType, action.payload]
    },
    validationsChanged(state, action: PayloadAction<any>) {
      state.validations = { ...state.validations, ...action.payload }
    },
    dataChanged(state, action: PayloadAction<any>) {
      state.inputData = { ...state.inputData, ...action.payload }
    },
    allStepsFinished(state, action: PayloadAction<boolean>) {
      state.finished = action.payload
    },
  },
})

export const {
  incremented,
  decremented,
  dateTypeChanged,
  planTypeChanged,
  addOnTypeChanged,
  validationsChanged,
  dataChanged,
  allStepsFinished,
} = stepSlice.actions
export default stepSlice.reducer
