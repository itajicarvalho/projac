-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS legacy_ap;
USE legacy_ap;

-- Remoção de tabelas existentes (ordem inversa das dependências)
DROP TABLE IF EXISTS itens_venda;
DROP TABLE IF EXISTS vendas;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS clientes;

-- Criação das tabelas
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    dt_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE itens_venda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES vendas(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserção de dados de exemplo para clientes
INSERT INTO clientes (nome, cpf, email, telefone) VALUES
('Maria Silva', '123.456.789-00', 'maria.silva@email.com', '(11) 98765-4321'),
('João Santos', '987.654.321-00', 'joao.santos@email.com', '(11) 91234-5678'),
('Ana Oliveira', '456.789.123-00', 'ana.oliveira@email.com', '(21) 98765-1234'),
('Carlos Pereira', '789.123.456-00', 'carlos.pereira@email.com', '(21) 91234-8765'),
('Juliana Costa', '321.654.987-00', 'juliana.costa@email.com', '(31) 98765-8765'),
('Roberto Almeida', '654.987.321-00', 'roberto.almeida@email.com', '(31) 91234-1234'),
('Fernanda Lima', '159.753.852-00', 'fernanda.lima@email.com', '(41) 98765-9876'),
('Paulo Souza', '852.963.741-00', 'paulo.souza@email.com', '(41) 91234-6543');

-- Inserção de dados de exemplo para produtos (flores e itens de floricultura)
INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES
('Rosa Vermelha', 'Rosa vermelha premium, ideal para demonstrar amor.', 12.90, 50),
('Orquídea Phalaenopsis', 'Orquídea elegante em vaso decorativo.', 89.90, 15),
('Buquê de Girassóis', 'Buquê com 6 girassóis e folhagens.', 45.00, 20),
('Lírio Branco', 'Lírio branco símbolo de pureza.', 15.90, 30),
('Tulipa Colorida', 'Tulipa importada em diversas cores.', 9.90, 40),
('Vaso de Cerâmica', 'Vaso decorativo para plantas.', 29.90, 25),
('Arranjo de Mesa', 'Arranjo floral para centro de mesa.', 65.00, 10),
('Terra Adubada', 'Pacote de terra adubada para plantas (1kg).', 8.50, 60),
('Fertilizante Líquido', 'Fertilizante concentrado para flores (500ml).', 18.90, 35),
('Tesoura de Poda', 'Tesoura profissional para poda de plantas.', 32.50, 15),
('Buquê de Rosas Mistas', 'Buquê com 12 rosas em cores variadas.', 79.90, 12),
('Suculenta Decorativa', 'Suculenta em vaso pequeno decorativo.', 24.90, 30),
('Begônia', 'Begônia florida em vaso médio.', 34.90, 18),
('Regador Metálico', 'Regador decorativo para plantas de interior.', 42.00, 10),
('Kit Jardinagem', 'Kit com 3 ferramentas básicas para jardinagem.', 59.90, 8);

-- Inserção de dados de exemplo para vendas
INSERT INTO vendas (cliente_id, forma_pagamento, dt_venda) VALUES
(1, 'Cartão de Crédito', '2025-06-20 10:30:00'),
(2, 'Dinheiro', '2025-06-21 14:15:00'),
(3, 'PIX', '2025-06-22 16:45:00'),
(5, 'Cartão de Débito', '2025-06-23 09:20:00'),
(8, 'Cartão de Crédito', '2025-06-24 11:05:00');

-- Inserção de dados de exemplo para itens_venda
INSERT INTO itens_venda (venda_id, produto_id, quantidade, preco_unitario) VALUES
(1, 1, 6, 12.90),  -- 6 rosas vermelhas
(1, 7, 1, 65.00),  -- 1 arranjo de mesa
(2, 3, 1, 45.00),  -- 1 buquê de girassóis
(2, 9, 2, 18.90),  -- 2 fertilizantes líquidos
(3, 2, 1, 89.90),  -- 1 orquídea
(3, 10, 1, 32.50), -- 1 tesoura de poda
(4, 11, 1, 79.90), -- 1 buquê de rosas mistas
(4, 6, 2, 29.90),  -- 2 vasos de cerâmica
(5, 13, 2, 34.90), -- 2 begônias
(5, 8, 3, 8.50),   -- 3 pacotes de terra adubada
(5, 15, 1, 59.90); -- 1 kit jardinagem
