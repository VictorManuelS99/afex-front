import axios from 'axios'

import { IVideo } from '../../Interfaces/video'

const BASE_URL = 'https://wz1pnozv4j.execute-api.us-west-2.amazonaws.com'

export const getVideos = async (): Promise<{ videos: IVideo[] }> => {
  const { data } = await axios.get(BASE_URL + '/videos')
  return data
}

export const createVideo = async (video: Omit<IVideo, 'id'>): Promise<{ videos: IVideo[] }> => {
  const { data } = await axios.post(BASE_URL + '/videos', video)
  return data
}

export const deleteVideo = async (id: string): Promise<{ videos: IVideo[] }> => {
  const { data } = await axios.delete(BASE_URL + '/videos/' + id)
  return data
}
