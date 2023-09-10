import styled from 'styled-components'

export const Wrapper = styled.div`
     background-color: red;
     height: 100%;
     position: absolute;
     right: 0;
     width: 85%;
     height: calc(100% - 160px);
     margin-top: 80px;

     
    @media screen and (max-width: 992px) {
        width: 100%;  
    }
`