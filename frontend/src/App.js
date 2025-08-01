import { Container, Title, Subtitle } from './styles/StyledApp';
import ProdutoList from './components/ProdutoList';

function App() {
  return (
    <Container>
      <Title>🛍️ Loja Virtual</Title>
      <Subtitle>Confira nossos produtos em promoção</Subtitle>
      <ProdutoList />
    </Container>
  );
}

export default App;