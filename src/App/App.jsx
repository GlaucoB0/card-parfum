import imgParfum from '../../images/image-product-desktop.jpg'
import carrinho from '../../images/icon-cart.svg'
import { Button, Carrinho, CinzaTexto, CinzaTitulo, Container, InfoContainer, NomeParfum, ValorAntigo, ValorAtual, ValorContainer } from '../styles/styles.js'


const App = () => {
  return (
    <Container>
      <div>
        <img className='hero' src={imgParfum} alt="" />
      </div>

      <InfoContainer>
        <CinzaTitulo>PERFUME</CinzaTitulo>

        <NomeParfum>Gabrielle Essence Eau De Parfum</NomeParfum>

        <CinzaTexto>
          A floral, solar and veluptous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
        </CinzaTexto>

        <ValorContainer>
          <ValorAtual>$149.99</ValorAtual>
          <ValorAntigo>$169.99</ValorAntigo>
        </ValorContainer>

        <Button>
          <Carrinho src={carrinho}/>
          Add to Cart
        </Button>
      </InfoContainer>

    </Container>
  )
}

export default App