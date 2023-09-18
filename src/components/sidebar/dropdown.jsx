import { Link } from "react-router-dom"
import { DropdownStyle } from './styles'

export default function Dropdown() {
  return (
    <DropdownStyle className="dropdown">
      <ul>
        <li>
          <Link to="/relatorios">Relatórios</Link>
        </li>
        <li>
          <Link to="/noticias">Consulta de Notícias</Link>
        </li>
      </ul>
    </DropdownStyle>
  )
}

