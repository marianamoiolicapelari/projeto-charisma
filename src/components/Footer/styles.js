import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background: #2e304a;
    height: 80px;
    width: 85%;
    position: absolute;
    right: 0;
    bottom: 0;

    p {
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Roboto Condensed', sans-serif;  
        
    }

    img {
        width: 31px;
        height: 32px;
        border-radius: 50%;
    }
    
    @media screen and (max-width: 992px) {
        width: 100%;  
    }
`