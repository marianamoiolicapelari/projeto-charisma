import { Link } from "react-router-dom";
import { DropdownStyle } from './styles'

export default function Dropdown() {
  return (
    <DropdownStyle className="dropdown">
      <ul style={{paddingLeft: '45px'}}>
        <li>
          <Link to="/dashboard/relatorios" style={{color: '#fff', fontFamily: 'Roboto Condensed, sans-serif'}} >Relatórios</Link>
        </li>
        <li>
          <Link to="/dashboard/consultanoticias" style={{color: '#fff', fontFamily: 'Roboto Condensed, sans-serif'}}>Consulta de Notícias</Link>
        </li>
      </ul>
    </DropdownStyle>
  );
};

