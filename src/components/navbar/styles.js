import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #fff;
    width: 85%;
    height: 80px;
    position: fixed;
    right: 0;
    display: flex;
    align-items: center;

    
    @media screen and (max-width: 992px) {
        width: 100%;  
    }
`

export const NavbarIcon = styled.div`
    display: none;

    @media only screen and (max-width: 978px) {
    display: inline;   
    margin-left: 30px; 
}
`

export const WrapperSidebarResponsive = styled.div`
    display: inline !important;
    z-index: 999 !important;
    left: 0 !important;
    top: 0;
    position: absolute;
    width: 200px;
`

export const NavbarItems = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 35px;
    margin-right: 30px;
       
    h1 {
        color: #1a73ba;
        font-weight: 400;
        font-size: 1.4rem;
        font-family: 'Roboto Condensed', sans-serif;
        cursor: pointer;
        
    }

    i {
        color: 	#666;
        font-size: 1.5rem;       
    }

    img {
        width: 31px;
        height: 32px;
        border-radius: 50%;
    }
   
`

