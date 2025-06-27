import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const ProdutoFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [loading, setLoading] = useState(isEditMode);
  const [errors, setErrors] = useState([]);
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: ''
  });

  useEffect(() => {
    if (isEditMode) {
      // Mock data
      setTimeout(() => {
        setFormData({
          id: parseInt(id),
          nome: `Produto ${id}`,
          descricao: `Descrição do produto ${id}`,
          preco: '19.99',
          quantidade: '25'
        });
        setLoading(false);
      }, 500);
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando produto:', formData);
    setTimeout(() => navigate('/produtos'), 500);
  };

  if (loading) {
    return (
      <DefaultLayout title={isEditMode ? 'Editar Produto' : 'Adicionar Produto'}>
        <p>Carregando...</p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title={isEditMode ? 'Editar Produto' : 'Adicionar Produto'}>
      <form onSubmit={handleSubmit}>
        {isEditMode && <input type="hidden" name="id" value={formData.id || ''} />}
        
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} rows="4" />
        </div>
        
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" name="preco" value={formData.preco} onChange={handleChange} required />
        </div>
        
        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" name="quantidade" value={formData.quantidade} onChange={handleChange} required min="0" />
        </div>
        
        <button type="submit">{isEditMode ? 'Salvar Alterações' : 'Adicionar'}</button>
        <Link to="/produtos">Cancelar</Link>
      </form>
    </DefaultLayout>
  );
};

export default ProdutoFormPage;
