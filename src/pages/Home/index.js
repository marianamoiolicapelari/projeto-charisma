import { Container } from './styles'

import GlobalStyles from '../../styles/globalStyles'
import MyRouter from '../../components/SidebarMenu'

function Home() {
  return (
    <Container>
      <GlobalStyles />      
      <MyRouter />     
    </Container>
  )
}

export default Home