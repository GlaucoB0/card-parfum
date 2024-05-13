import styled from 'styled-components'
import colors from '../colors.js'

export const Container = styled.div`
    border-radius: 10px;
    display: flex;
    max-width: 800px;
    height: 650px;
    background-color: ${colors.white};

    @media (max-width: 801px) {
      flex-direction: column;
      margin: 30px;
      height: 1200px;
    }

`
export const InfoContainer = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const NomeParfum = styled.h1`
font-size: 2.6rem;
`

export const ValorContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ValorAtual = styled.h1`
    color: ${colors.darkCyan};
    margin-right: 15px;
`
export const ValorAntigo = styled.p`
color: ${colors.darkGrayishBlue};
text-decoration: line-through;
`
export const CinzaTexto = styled.p`
color: ${colors.darkGrayishBlue};
font-size: 1.2rem;
font-family: 'Montserrat';
font-weight: 500;
`

export const CinzaTitulo = styled.p`
color: ${colors.darkGrayishBlue};
font-size: 1.2rem;
font-family: 'Montserrat';
font-weight: 500;
letter-spacing: 4px;
`

export const Button = styled.button`
background-color: ${colors.darkCyan};
border-radius: 10px;
color: ${colors.white};
border: none;
padding: 20px;
width: 100%;
font-size: 18px;
font-family: 'Montserrat';
font-weight: bold;
`

export const Carrinho = styled.img`
width: 20px;
height: 20px;
margin-right: 10px;
`
