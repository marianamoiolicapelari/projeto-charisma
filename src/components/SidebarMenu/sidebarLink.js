import {
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

export default function SidebarLink({ to, icon, label, onClick, isOpen }) {
  return (
    <div className="sidebar-link" onClick={onClick}>
      <div className="sidebar-items">
      {icon}
      {label}
      </div>
      {isOpen ? (
        <FaChevronDown className="arrow-icon"/>
      ) : (
        <FaChevronRight className="arrow-icon" />
      )}
    </div>
  );
};



