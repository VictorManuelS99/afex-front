import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper } from './styles'

import { IVideo } from '../../Interfaces/video'

import { deleteVideo } from '../../Services/Videos/video.service'

import { setVideos } from '../../App/Videos/videos.slice'

interface Props {
  video: IVideo
  openModal: (video: IVideo) => void
}

export const Video: FC<Props> = ({ video, openModal }) => {
  const { img, id } = video
  const dispatch = useDispatch()

  const handleClick = async () => {
    const { videos } = await deleteVideo(id)

    dispatch(setVideos({ videos }))
  }

  return (
    <Wrapper>
      <div className="delete" onClick={handleClick}>
        X
      </div>
      <img src={img} alt="video mini" onClick={() => openModal(video)} />
    </Wrapper>
  )
}
