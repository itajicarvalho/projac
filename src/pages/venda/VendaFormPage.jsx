import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const VendaFormPage = () => {
  return (
    <DefaultLayout title="Registrar Venda">
      <form>
        <div>
          <label htmlFor="cliente_id">Cliente:</label>
          <select id="cliente_id" name="cliente_id" required>
            <option value="">Selecione um cliente</option>
            <option value="1">João Silva</option>
            <option value="2">Maria Oliveira</option>
            <option value="3">Pedro Santos</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="forma_pagamento">Forma de Pagamento:</label>
          <select id="forma_pagamento" name="forma_pagamento" required>
            <option value="">Selecione</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
            <option value="Transferência">Transferência</option>
          </select>
        </div>
        
        <h3>Produtos da Venda</h3>
        <div>
          <div>
            <label>Produto:</label>
            <select name="produto_id" required>
              <option value="">Selecione um produto</option>
              <option value="1">Rosa Vermelha (R$ 10,99)</option>
              <option value="2">Girassol (R$ 8,50)</option>
              <option value="3">Orquídea (R$ 25,99)</option>
            </select>
            <label>Quantidade:</label>
            <input type="number" name="quantidade" defaultValue="1" min="1" required />
          </div>
        </div>
        
        <button type="submit">Finalizar Venda</button>
        <Link to="/vendas">Cancelar</Link>
      </form>
    </DefaultLayout>
  );
};

export default VendaFormPage;
