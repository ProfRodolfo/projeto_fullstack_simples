import styled from 'styled-components';

export const ProductListContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const ProductCard = styled.li`
  background: #f9f9f9;
  margin: 12px 0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductName = styled.h3`
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.4rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #27ae60;
  margin: 8px 0;
`;

export const ProductDescription = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  line-height: 1.5;
`;

export const Loading = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 50px;
`;