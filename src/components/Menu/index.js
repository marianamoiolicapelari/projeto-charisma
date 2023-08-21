import { Container } from './styles'
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import Charisma from '../../assets/charisma.png'

function Menu() {

  return (
    <Container>
      <p>Dasboard</p>
      <i><AiOutlineSetting/></i>
      <i><AiOutlineBell/></i>
      <img src={Charisma} alt="" />
    </Container>
  )
}

export default Menu