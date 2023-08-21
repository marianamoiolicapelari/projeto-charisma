
import styled from 'styled-components'

export const Div = styled.div`
  background-color: #1a73ba;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

.sidebar {
  background-color: #1a73ba;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 15px;
  cursor: pointer;  
  justify-content: space-between
}

.sidebar-items {
  display: flex;
  align-items: center;
}

.sidebar-link svg {
  margin-right: 10px;
  margin-left: 10px;
  
}

.app-container {
  margin: 0;
  padding: 0;
}

.arrow-icon {
  display: flex; 
 
}

`

export const Img = styled.img`
  width: 230px;
  margin: 1em 0 2em .5em;
`

export const DropdownStyle = styled.div`
  a {
    text-decoration: none;
    padding-left: .2em;
  }  
`
