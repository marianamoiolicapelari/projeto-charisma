/* eslint-disable react/prop-types */
import { Wrapper, NavbarIcon, NavbarItems } from './styles'
import { FaBars } from "react-icons/fa"
import { AiOutlineSetting, AiOutlineBell } from "react-icons/ai";
import Charisma from '../../assets/charisma.png'

const Navbar = ({ OpenSidebar }) => {

    return (
        <Wrapper>
            <NavbarIcon onClick={OpenSidebar}>
                <i><FaBars /></i>
            </NavbarIcon>
            <NavbarItems>
            <h1>Dashboard</h1>
            <i><AiOutlineSetting /></i>
            <i><AiOutlineBell /></i>
            <img src={Charisma} alt="" />
            </NavbarItems>
        </Wrapper>
    )
}

export default Navbar


