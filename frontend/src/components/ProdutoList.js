import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProductListContainer,
  Title,
  ProductCard,
  ProductName,
  ProductPrice,
  ProductDescription,
  Loading
} from './ProdutoList.styled';

const ProdutoList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/produtos')
      .then(response => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading>Carregando produtos...</Loading>;
  }

  return (
    <ProductListContainer>
      <Title>Produtos Disponíveis</Title>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {produtos.map(produto => (
            <ProductCard key={produto.id}>
              <ProductName>{produto.nome}</ProductName>
              <ProductPrice>R$ {produto.preco.toFixed(2)}</ProductPrice>
              <ProductDescription>{produto.descricao}</ProductDescription>
            </ProductCard>
          ))}
        </ul>
      )}
    </ProductListContainer>
  );
};

export default ProdutoList;