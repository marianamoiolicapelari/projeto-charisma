import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;  
`

export const Noticias = styled.div`
    width: 46%;
    height: auto;
    background-color: #fff;
    box-shadow: 3px 3px 7px 0px rgba(210,213,217,1);
    border-radius: 15px;
    padding: 10px;
    margin: 1em;

    .linha {
        width: 100%;
        border-bottom: 1px solid #d2d5d9;
        margin-bottom: 1em;
    }


`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;

    .align {
        display: flex;
        align-items: center;
    }

    img {
        width: 28px;
        height: 27px;
        border-radius: 50%;
    }

    p {
        color: #6c737f;
        font-size: .8em;
        margin-bottom: 0;
    }

    span {
        color: #000;       
    }

`

export const Tier = styled.div`
    width: 50px;
    height: 25px;
    background-color: #6d3893;
    border-radius: 15px;
    text-align: center;
    font-size: .6em;
    color: #fff;
    padding: .5em 1em;
`

export const Public = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;

  span {
    margin-right: .5em;
  }
`


export const Data = styled.div`
    display: flex;

    h2 {
        color: #6c737f;
        font-size: .8em;
        font-weight: 600;
    }

    p {
        color: #6c737f;
        font-size: .8em;        
    }

    .fonte {
        display: flex;
        justify-content: space-between;
    }
`

export const Body = styled.div`
    h2 {
        color: #6c737f;
        font-size: .8em;
        font-weight: 600;
    }

    p {
        color: #6c737f;
        font-size: .8em;        
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        color: #6c737f;
        font-size: .8em;
        font-weight: 600;
    }

    p {
        color: #6c737f;
        font-size: .8em;        
    }

    .tags {
        display: flex;
        gap: .5em;
    }

    .sentimento {
        width: 70px;
        height: 25px;
        background-color: #e8f4ec;
        border: 1px solid #81be99;
        border-radius: 15px;
        text-align: center;
        font-size: .6em;
        color: #81be99;
        padding: .5em 1em;
    }

    .citacao {
        width: 70px;
        height: 25px;
        background-color: #5e76b0;
        border-radius: 15px;
        text-align: center;
        font-size: .6em;
        color: #fff;
        padding: .5em 1em;
    }

    .segmento {
        width: 70px;
        height: 25px;
        background-color: #709acc;
        border-radius: 15px;
        text-align: center;
        font-size: .6em;
        color: #fff;
        padding: .5em 1em;
    }


`



