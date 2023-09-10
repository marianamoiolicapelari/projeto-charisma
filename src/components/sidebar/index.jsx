/* eslint-disable react/prop-types */
import { Wrapper, SidebarImage, SidebarIcon } from './styles'
import { FaRegWindowClose } from "react-icons/fa"
import ImageLogo from '../../assets/quinto-andar.png'


const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
   
    return (
        <Wrapper openSidebarToggle={openSidebarToggle}>
            <SidebarImage>
            <img src={ImageLogo} alt="logo" />                
            <SidebarIcon onClick={OpenSidebar}>
                <i><FaRegWindowClose /></i>
            </SidebarIcon>
            </SidebarImage>
        </Wrapper>
    )
}

export default Sidebar
