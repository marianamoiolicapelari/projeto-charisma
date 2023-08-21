import styled from 'styled-components'

export const Container = styled.div`
   height: 100vh;
   width: 100%;
   background-color: #fcfcfc;
   padding: 2em;
   font-family: 'Roboto Condensed', sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
   h2 {
        font-size: 3em;
        color: #6c737f;
        line-height: 1.5em;
    }

    img {
        width: 61px;
        height: 61px;
        border-radius: 50%;
    }
`