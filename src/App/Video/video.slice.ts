import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

import { IVideo } from '../../Interfaces/video'

type VideosState = {
  video: IVideo
}

const initialState: VideosState = {
  video: {
    id: '',
    title: '',
    description: '',
    url: '',
    img: '',
  },
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideo: (_state: VideosState, action: PayloadAction<VideosState>) => action.payload,
  },
})

export const { setVideo } = videoSlice.actions
export const selectVideo = (state: RootState) => state.video
export default videoSlice.reducer
