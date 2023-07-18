import { configureStore } from '@reduxjs/toolkit'
import stepReducer from '@/features/multiStepForm/StepSlice'

export const store = configureStore({
  reducer: {
    step: stepReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
