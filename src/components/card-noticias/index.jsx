import { Container, Noticias, Title, Data, Tier, Body, Public, Footer } from './styles'
import Charisma from '../../assets/charisma.png'

import {
  LuNewspaper
} from "react-icons/lu"

import {
  AiOutlineEye
} from "react-icons/ai"

const CardNoticias = () => {

  const noticias = [
    {
      id: 1,
      imagem: Charisma,
      data: '20 de Maio de 2023',
      titulo: 'Título da Notícia',
      visualizacao: 27456,
      valoracao: 165,
      fonte: 'Charisma',
      tier: 1,
      secao: 'Nome da Seção',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor ligula nunam nulla velit congue a accumsan id, pellentesque congue sem.'
    },
    {
      id: 2,
      imagem: Charisma,
      data: '20 de Maio de 2023',
      titulo: 'Título da Notícia',
      visualizacao: 27456,
      valoracao: 165,
      fonte: 'Charisma',
      tier: 1,
      secao: 'Nome da Seção',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor ligula nunam nulla velit congue a accumsan id, pellentesque congue sem.'
    },
    {
      id: 3,
      imagem: Charisma,
      data: '20 de Maio de 2023',
      titulo: 'Título da Notícia',
      visualizacao: 27456,
      valoracao: 165,
      fonte: 'Charisma',
      tier: 1,
      secao: 'Nome da Seção',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor ligula nunam nulla velit congue a accumsan id, pellentesque congue sem.'
    }, {
      id: 4,
      imagem: Charisma,
      data: '20 de Maio de 2023',
      titulo: 'Título da Notícia',
      visualizacao: 27456,
      valoracao: 165,
      fonte: 'Charisma',
      tier: 1,
      secao: 'Nome da Seção',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor ligula nunam nulla velit congue a accumsan id, pellentesque congue sem.'
    }
  ]

  return (
    <Container>
      {noticias.map((noticia) => (

        <Noticias key={noticia.id}>
          <Title>
            <div className='align'>
              <img src={noticia.imagem} alt="logo" />
              <Public>
                <p><span>Publicado em -</span> {noticia.data}</p>
                <p><span><AiOutlineEye /></span>Visualizações: {noticia.visualizacao}</p>
              </Public>
            </div>
            <Tier>TIER {noticia.tier}</Tier>
          </Title>
          <Data>
            <Public>
              <h2>Veículo e seção</h2>
              <div className='fonte'>
                <p><span><LuNewspaper /></span>Fonte: {noticia.fonte}</p>
                <p>- Seção: {noticia.secao}</p>
              </div>
            </Public>
          </Data>
          <div className='linha'></div>
          <Body>
            <h2>{noticia.titulo}</h2>
            <p>{noticia.texto}</p>
          </Body>
          <div className='linha'></div>
          <Footer>
          <h2>Classificação</h2>
          <div className='tags'>
            <p>Tags:</p>
            <div className='sentimento'>SENTIMENTO</div>
            <div className='citacao'>CITAÇÃO</div>
            <div className='segmento'>SEGMENTO</div>
          </div>
          </Footer>
        </Noticias>
      ))}

    </Container>
  )
}

export default CardNoticias
