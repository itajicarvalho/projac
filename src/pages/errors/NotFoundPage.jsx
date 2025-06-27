import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const NotFoundPage = () => {
  return (
    <DefaultLayout title="Erro 404 - Página Não Encontrada">
      <p>A página que você está procurando não existe ou foi movida.</p>
      <p><Link to="/">Voltar para a Página Inicial</Link></p>
    </DefaultLayout>
  );
};

export default NotFoundPage;
