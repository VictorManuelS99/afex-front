import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './Loading/loading.slice'
import videoSlice from './Video/video.slice'
import videosSlice from './Videos/videos.slice'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    videos: videosSlice,
    video: videoSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
