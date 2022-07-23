import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type LoadingState = {
  value: boolean
}

const initialState = { value: false }

const dishesSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoad: (_state: LoadingState, action: PayloadAction<LoadingState>) => action.payload,
  },
})

export const { setLoad } = dishesSlice.actions
export const selectLoad = (state: RootState) => state.loading
export default dishesSlice.reducer
