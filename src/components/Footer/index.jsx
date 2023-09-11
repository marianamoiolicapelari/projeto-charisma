import { Wrapper } from './styles'
import Charisma from '../../assets/charisma.png'

const Footer = () => {
    return (
        <Wrapper>
            <p>© Todos os direitos reservados charisma</p>
            <img src={Charisma} alt="" />
        </Wrapper>
    )
}

export default Footer
