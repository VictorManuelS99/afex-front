import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectVideo } from '../../App/Video/video.slice'

import { Wrapper } from './styles'

interface Props {
  isOpen: boolean
  closeModal: () => void
}

export const Modal: FC<Props> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null

  const navigate = useNavigate()

  const { video } = useSelector(selectVideo)

  const { img } = video

  const handleClickOutside = (e: any) => {
    const modalContent = document.getElementById('modal-content')
    if (modalContent && !modalContent.contains(e.target)) {
      closeModal()
    }
  }

  const goVideo = () => {
    navigate(`/video`)
    closeModal()
  }

  return (
    <Wrapper isOpen={isOpen} onClick={handleClickOutside}>
      <div id="modal-content" className="modal-content">
        <div className="video">
          <img src={img} alt="video" onClick={goVideo} />

          <div className="video-data">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </div>

        <button onClick={closeModal}>Cerrar</button>
      </div>
    </Wrapper>
  )
}
