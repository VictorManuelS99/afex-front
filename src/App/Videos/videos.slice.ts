import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

import { IVideo } from '../../Interfaces/video'

type VideosState = {
  videos: IVideo[]
}

const initialState: VideosState = {
  videos: [],
}

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (_state: VideosState, action: PayloadAction<VideosState>) => action.payload,
  },
})

export const { setVideos } = videosSlice.actions
export const selectVideos = (state: RootState) => state.videos
export default videosSlice.reducer
