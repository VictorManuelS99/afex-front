import { NewVideo } from '../../Components/NewVideo'
import { Videos } from '../../Components/Videos'
import { Wrapper } from './styles'

export const Home = () => {
  return (
    <Wrapper>
      <NewVideo />
      <Videos />
    </Wrapper>
  )
}
