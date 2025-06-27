import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const ProdutoListPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be fetched from an API
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Mock data for demonstration
        const mockProdutos = [
          { id: 1, nome: 'Rosa Vermelha', descricao: 'Rosa vermelha de alta qualidade', preco: 10.99, quantidade: 50 },
          { id: 2, nome: 'Girassol', descricao: 'Girassol grande e vibrante', preco: 8.50, quantidade: 30 },
          { id: 3, nome: 'Orquídea', descricao: 'Orquídea exótica', preco: 25.99, quantidade: 15 }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setProdutos(mockProdutos);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      // In a real app, this would make an API call to delete the product
      setProdutos(produtos.filter(produto => produto.id !== id));
    }
  };

  if (loading) {
    return (
      <DefaultLayout title="Produtos">
        <p>Carregando...</p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title="Produtos">
      <p><Link to="/produtos/novo">Adicionar Novo Produto</Link></p>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                <td>{produto.quantidade}</td>
                <td>
                  <Link to={`/produtos/editar/${produto.id}`}>Editar</Link>{' '}
                  <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
};

export default ProdutoListPage;
