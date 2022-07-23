import axios from 'axios'

export const getDataFromYoutube = async (id: string, key: string) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=snippet`
  )
  return data
}
