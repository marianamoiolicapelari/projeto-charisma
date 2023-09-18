/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Wrapper, SidebarImage, SidebarIcon, SidebarMenu } from './styles'

import { FaRegWindowClose } from "react-icons/fa"
import { FaRegFaceGrinBeam } from "react-icons/fa6"
import { MdSubject, MdEmail, MdOutlineAdminPanelSettings } from "react-icons/md"

import ImageLogo from '../../assets/quinto-andar.png'
import SidebarLink from './sidebarLink'
import Dropdown from './dropdown'

const Sidebar = ({ openSidebarToggle, openSidebar }) => {
    const [showDashboardDropdown, setShowDashboardDropdown] = useState(false)

    const toggleDashboardDropdown = () => {
        setShowDashboardDropdown(!showDashboardDropdown)
    }

    return (
        <Wrapper openSidebarToggle={openSidebarToggle}>
            <SidebarImage>
                <img src={ImageLogo} alt="logo" />
                <SidebarIcon onClick={openSidebar}>
                    <i><FaRegWindowClose /></i>
                </SidebarIcon>
            </SidebarImage>
            <SidebarMenu>
                <SidebarLink
                    icon={<MdSubject />}
                    label='Notícias'
                    onClick={toggleDashboardDropdown}
                    isOpen={showDashboardDropdown}
                />
                {showDashboardDropdown && <Dropdown />}
                <SidebarLink to="" icon={<MdEmail />} label="Mailing" />
                <SidebarLink to="" icon={<FaRegFaceGrinBeam />} label="NPS" />
                <SidebarLink to="" icon={<MdOutlineAdminPanelSettings />} label="Administrativo" />
            </SidebarMenu>
        </Wrapper >
    )
}

export default Sidebar