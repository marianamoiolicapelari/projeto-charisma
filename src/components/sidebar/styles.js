import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;    
    width: 15%;
    position: absolute;
    background: #1a73ba;
    overflow-y: auto;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;

    @media screen and (max-width: 978px) {
        display: ${({ openSidebarToggle }) => (openSidebarToggle ? 'inline' : 'none')};
        height: ${({ openSidebarToggle }) => (openSidebarToggle ? '90%' : '100%')};
        width: ${({ openSidebarToggle }) => (openSidebarToggle ? '90%' : '15%')};
        z-index: 999 !important;
        position: absolute;
    }
`

export const SidebarImage = styled.div`
    display: flex;
    margin: 20px;
    
    img {
        width: 180px;
    }

    @media screen and (max-width: 978px) {
        justify-content: space-between;
        align-items: center;
    }
`

export const SidebarIcon = styled.div`
        display: none;

        i {
        color: 	#fff;
        font-size: 1.5rem;       
    }

    @media screen and (max-width: 978px) {
        display: inline;
    }
`
