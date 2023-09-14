import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: 0; 
   margin-top: 80px;
   height: calc(100% - 120px);
   width: 85%;
   background: #fcfcfc;
   padding: 20px;
   font-family: 'Roboto Condensed', sans-serif;    
      
   h2 {
        font-size: 3em;
        color: #6c737f;
        line-height: 1.5em;
    }

    @media screen and (max-width: 992px) {
        width: 100%;  
    }
`