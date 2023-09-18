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

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;        
`

export const DropdownStyle = styled.div`
  li {
    margin-top: 5px;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    padding-left: 20px;  
    color: #fff;
    /* font-family: 'Roboto Condensed, sans-serif';   */
  }  
`

export const SidebarLinkStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    color: white;
    margin: 25px 15px 5px 20px;
    cursor: pointer;  

    &:hover {
      background-color: #054f77;
      padding: 5px 2px;
      border-radius: 5px;
    }

.sidebar-items {
  display: flex;
  align-items: center; 
}

.sidebar-items > svg {
  margin-right: 8px;
  font-size: 20px;
}

.arrow-icon {
  display: flex;  
}
`
