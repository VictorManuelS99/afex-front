import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDataFromYoutube } from '../../Services/Youtube/youtube.service'
import { createVideo } from '../../Services/Videos/video.service'

import { selectLoad, setLoad } from '../../App/Loading/loading.slice'
import { setVideos } from '../../App/Videos/videos.slice'

import { IVideo } from '../../Interfaces/video'

import { Wrapper } from './styles'

export const NewVideo = () => {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()
  const { value } = useSelector(selectLoad)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSubmit = async () => {
    const pre_id = url.split('v=')[1]
    const id = pre_id.split('&')[0]
    const key = 'AIzaSyAvbuV8cmDZV_k0Uz1V0LZVvOfvTX0I8uQ'

    try {
      dispatch(setLoad({ value: true }))
      const { items } = await getDataFromYoutube(id, key)
      const { snippet } = items[0]
      const { title, thumbnails, description } = snippet
      const { url: img } = thumbnails.medium

      const video: Omit<IVideo, 'id'> = {
        title,
        img,
        url,
        description,
      }

      const { videos } = await createVideo(video)
      dispatch(setVideos({ videos }))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoad({ value: false }))
    }
  }

  return (
    <Wrapper>
      <h1>Añadir nuevo video</h1>

      <div className="add">
        <input type="text" placeholder="Añadir" onChange={handleChange} />
        <button onClick={handleSubmit} disabled={value}>
          Añadir
        </button>
      </div>
    </Wrapper>
  )
}
