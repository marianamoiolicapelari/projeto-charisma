import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: blue;
    height: 80px;
    width: 85%;
    position: absolute;
    right: 0;
    bottom: 0;

    
    @media screen and (max-width: 992px) {
        width: 100%;  
    }
`