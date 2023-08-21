import SidebarLink from './sidebarLink'
import Dropdown from './dropdown'
import ImageLogo from '../../assets/quinto-andar.png'
import { useState } from 'react'
import { Div, Img } from './styles'


// import { Container, Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import ConsultaNoticias from "../ConsultaNoticias/index"
import HomeCharisma from '../HomeCharisma/index'
import Noticias from "../Relatorios/index"

import { MdSubject, MdEmail, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaRegFaceGrinBeam } from "react-icons/fa6"

function SidebarMenu() {
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false)

  const toggleDashboardDropdown = () => {
    setShowDashboardDropdown(!showDashboardDropdown)
  }

  return (
    <Div className="sidebar">
      <Img src={ImageLogo} alt="logo" />
      <SidebarLink
        icon={<MdSubject />}
        label="Notícias"
        onClick={toggleDashboardDropdown}
        isOpen={showDashboardDropdown}
      />
      {showDashboardDropdown && <Dropdown />}
      <SidebarLink to="" icon={<MdEmail />} label="Mailing" />
      <SidebarLink to="" icon={<FaRegFaceGrinBeam />} label="NPS" />
      <SidebarLink to="" icon={<MdOutlineAdminPanelSettings />} label="Administrativo" />
    </Div>
  )
}



export default function MyRouter() {
  return (
    <Router>
      <div style={{ width: '100%' }} className="app-container">
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '20%' }} >
            <SidebarMenu />
          </div>
          <div style={{ width: '80%' }}>
            <Routes>
              <Route path="/" element={<HomeCharisma />} />
              <Route path="/dashboard/relatorios" element={<Noticias />} />
              <Route path="/dashboard/consultanoticias" element={<ConsultaNoticias />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
