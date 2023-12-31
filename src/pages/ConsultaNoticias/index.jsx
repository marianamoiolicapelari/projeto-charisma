
import { Container, Navbar, NavbarBottom, Navigation, NavigationIndexPage } from './styles'
import {
  FaChevronDown
} from "react-icons/fa"
import {
  AiOutlineSearch
} from "react-icons/ai"
import {
  BsFilterRight
} from "react-icons/bs"
// import IndexPage from '../../components/pagination'
import CardNoticias from '../../components/card-noticias'

const ConsultaNoticias = () => {

  return (
    <>
    
      <Container>
        <h1>Consulta Notícias</h1>
        <p>Subtítulo de apoio</p>
        <Navbar>
          <button className="button-icon">Marcas<FaChevronDown className="arrow-icon"/></button>
          <button className="button-icon">Categorias<FaChevronDown className="arrow-icon"/></button>
          <AiOutlineSearch className='input-icon'/>
          <input placeholder='Pesquise por: Títulos / Assuntos / Veículos ou Tier'/>
          <button className="search-icon-button"><BsFilterRight className="search-icon"/>Filtro</button>
        </Navbar>
        <Navigation>
        <h2>Comentários encontrados</h2>
        <NavigationIndexPage>
        <p>Exibindo 1-4 de 40 resultados</p>
        {/* <IndexPage/> */}
        </NavigationIndexPage>
        </Navigation>
        <CardNoticias/>
        <NavbarBottom>
        {/* <IndexPage/> */}
        </NavbarBottom>       
      </Container>
 
    </>
  )
}

export default ConsultaNoticias