import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const ClienteListPage = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be fetched from an API
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Mock data for demonstration
        const mockClientes = [
          { id: 1, nome: 'João Silva', cpf: '123.456.789-00', email: 'joao@example.com', telefone: '(11) 98765-4321' },
          { id: 2, nome: 'Maria Oliveira', cpf: '987.654.321-00', email: 'maria@example.com', telefone: '(11) 91234-5678' },
          { id: 3, nome: 'Pedro Santos', cpf: '456.789.123-00', email: 'pedro@example.com', telefone: '(11) 95555-4444' }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setClientes(mockClientes);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao carregar clientes:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      // In a real app, this would make an API call to delete the client
      setClientes(clientes.filter(cliente => cliente.id !== id));
    }
  };

  if (loading) {
    return (
      <DefaultLayout title="Clientes">
        <p>Carregando...</p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title="Clientes">
      <p><Link to="/clientes/novo">Adicionar Novo Cliente</Link></p>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>
                  <Link to={`/clientes/editar/${cliente.id}`}>Editar</Link>{' '}
                  <button onClick={() => handleDelete(cliente.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
};

export default ClienteListPage;
