import { useSelector } from 'react-redux'
import { selectVideo } from '../../App/Video/video.slice'
import { Wrapper } from './styles'

export const Video = () => {
  const { video } = useSelector(selectVideo)

  const preid = video.url.split('v=')[1]
  const id = preid.split('&')[0]

  const handleVolver = () => {
    window.history.back()
  }

  return (
    <Wrapper>
      <button onClick={handleVolver}>Volver</button>
      <iframe src={`https://www.youtube.com/embed/${id}`} width="1050px" height="600px" />
    </Wrapper>
  )
}
