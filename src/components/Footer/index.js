import { Container } from './styles'
import Charisma from '../../assets/charisma.png'

function Footer() {

  return (
    <Container>
      <p>© Todos os direitos reservados charisma</p>
      <img src={Charisma} alt="" />
    </Container>
  )
}

export default Footer