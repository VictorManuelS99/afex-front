import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVideo } from '../../App/Video/video.slice'

import { selectVideos, setVideos } from '../../App/Videos/videos.slice'
import { IVideo } from '../../Interfaces/video'
import { getVideos } from '../../Services/Videos/video.service'
import { Modal } from '../Modal'

import { Video } from '../Video'

import { Wrapper } from './styles'

export const Videos = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { videos } = useSelector(selectVideos)

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    const { videos } = await getVideos()
    dispatch(setVideos({ videos }))
  }

  const openModal = (video: IVideo) => {
    dispatch(setVideo({ video }))
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Wrapper>
      {videos.map((el, i) => (
        <Video video={el} openModal={openModal} key={i + '-video-yt'} />
      ))}
      <Modal closeModal={closeModal} isOpen={isOpen} />
    </Wrapper>
  )
}
