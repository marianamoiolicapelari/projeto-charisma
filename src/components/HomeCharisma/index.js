import Charisma from '../../assets/charisma.png'
import Footer from '../Footer'
import Menu from '../Menu'
import { Container } from './styles'
const HomeCharisma = () => {

  return (
    <>
      <Menu />
      <Container>
        <h2>Charisma</h2>
        <img src={Charisma} alt="" />
      </Container>
      <Footer />
    </>
  )
}

export default HomeCharisma