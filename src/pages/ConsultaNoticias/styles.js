import styled from 'styled-components'

export const Container = styled.div`
   position: absolute;
   right: 0; 
   margin-top: 80px;
   height: calc(100% - 120px);
   width: 85%;
   background: #fcfcfc;
   padding: 2em;
   font-family: 'Roboto Condensed', sans-serif; 
   
   
   h1 {
      font-size: 1.8em;
      font-weight: 600;
   }
   
   p {
   font-size: 1.2em;
   color: #6c737f;
   line-height: 1.5em;
   }

   @media screen and (max-width: 992px) {
        width: 100%;  
    }
`

export const Navbar = styled.div`
   display: flex;
   width: 100%;
   border: 1px solid #d2d5d9;
   border-radius: 20px;
   background-color: #fff;
   box-shadow: 3px 3px 7px 0px rgba(210,213,217,1);

   button {
      display: flex;
      align-items: center;
      border: none;
      padding: .3em 1.5em;
      background-color: transparent;
      color: #b9bdc4;       
   }

   .button-icon {         
      border-right: 1px solid #d2d5d9;
   }

   .arrow-icon {
      padding-left: .5em;
   }

   .search-icon {
      padding-right: .2em;
      font-size: 2em;
      color: #1a73ba;  
   }

   .search-icon-button {
      color: #1a73ba; 
   }

   .input-icon {
      font-size: 2em;
      margin: .28em 0 0 .35em;
      color: #b9bdc4; 
   }

   input {
      padding: .8em;
      width: 100%;    
      margin-right: 1em;
      border: none;
      border-right: 1px solid  #d2d5d9;
   }

   input::placeholder {
      color: #b9bdc4; 
   }
`

export const Navigation = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1.5em 0 0 0;


h2 {
      font-size: 1em;
      font-weight: 600;
   }

`

export const NavigationIndexPage = styled.div`
   display: flex;
   align-items: center;
   gap: 1em;

   p {
      font-size: .9em;
      color: #6c737f;
   }

`
export const NavbarBottom = styled.div`
   display: flex;
   justify-content: center;
`

