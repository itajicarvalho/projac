import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const ClienteFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [loading, setLoading] = useState(isEditMode);
  const [errors, setErrors] = useState([]);
  
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  });

  useEffect(() => {
    if (isEditMode) {
      // Mock data for demonstration
      setTimeout(() => {
        setFormData({
          id: parseInt(id),
          nome: 'Cliente ' + id,
          cpf: '123.456.789-00',
          email: `cliente${id}@example.com`,
          telefone: '(11) 98765-4321'
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
    console.log('Salvando cliente:', formData);
    setTimeout(() => navigate('/clientes'), 500);
  };

  if (loading) {
    return (
      <DefaultLayout title={isEditMode ? 'Editar Cliente' : 'Adicionar Cliente'}>
        <p>Carregando...</p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title={isEditMode ? 'Editar Cliente' : 'Adicionar Cliente'}>
      {errors.length > 0 && (
        <div className="error-container">
          <strong>Por favor, corrija os seguintes erros:</strong>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {isEditMode && <input type="hidden" name="id" value={formData.id || ''} />}
        
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
        </div>
        
        <button type="submit">{isEditMode ? 'Salvar Alterações' : 'Adicionar'}</button>
        <Link to="/clientes">Cancelar</Link>
      </form>
    </DefaultLayout>
  );
};

export default ClienteFormPage;
