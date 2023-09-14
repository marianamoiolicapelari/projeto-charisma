import { Link } from "react-router-dom"
import { DropdownStyle } from './styles'

export default function Dropdown() {
  return (
    <DropdownStyle className="dropdown">
      <ul>
        <li>
          <Link to="/relatorios" style={{color: '#fff', fontFamily: 'Roboto Condensed, sans-serif'}}>Relatórios</Link>
        </li>
        <li>
          <Link to="/noticias" style={{color: '#fff', fontFamily: 'Roboto Condensed, sans-serif'}}>Consulta de Notícias</Link>
        </li>
      </ul>
    </DropdownStyle>
  )
}

