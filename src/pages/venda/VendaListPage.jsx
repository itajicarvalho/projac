import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const VendaListPage = () => {
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be fetched from an API
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Mock data for demonstration
        const mockVendas = [
          { id: 1, cliente: 'João Silva', forma_pagamento: 'Cartão de Crédito', dt_venda: '2023-06-25T14:30:00' },
          { id: 2, cliente: 'Maria Oliveira', forma_pagamento: 'Dinheiro', dt_venda: '2023-06-24T10:15:00' },
          { id: 3, cliente: 'Pedro Santos', forma_pagamento: 'Pix', dt_venda: '2023-06-23T16:45:00' }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setVendas(mockVendas);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao carregar vendas:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR');
  };

  if (loading) {
    return (
      <DefaultLayout title="Vendas">
        <p>Carregando...</p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title="Vendas">
      <p><Link to="/vendas/nova">Registrar Nova Venda</Link></p>

      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID Venda</th>
              <th>Cliente</th>
              <th>Forma de Pagamento</th>
              <th>Data da Venda</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map(venda => (
              <tr key={venda.id}>
                <td>{venda.id}</td>
                <td>{venda.cliente}</td>
                <td>{venda.forma_pagamento}</td>
                <td>{formatDate(venda.dt_venda)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
};

export default VendaListPage;
