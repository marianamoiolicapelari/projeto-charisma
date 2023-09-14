import {
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa"

import {SidebarLinkStyle} from './styles'

// eslint-disable-next-line react/prop-types
export default function SidebarLink({ to, icon, label, onClick, isOpen }) {
  return (
    <SidebarLinkStyle className="sidebar-link" onClick={onClick}>
      <div className="sidebar-items">
      {to}
      {icon}
      {label}
      </div>
      {isOpen ? (
        <FaChevronDown className="arrow-icon"/>
      ) : (
        <FaChevronRight className="arrow-icon" />
      )}
    </SidebarLinkStyle>
  )
}



