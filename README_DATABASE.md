# Configuração do Banco de Dados - Sistema de Floricultura

Este diretório contém os arquivos necessários para criar e popular o banco de dados do sistema de gerenciamento de floricultura.

## Arquivos Disponíveis

1. **db_setup.sql** - Script SQL com as instruções para:
   - Criar o banco de dados `legacy_ap`
   - Criar todas as tabelas necessárias
   - Popular as tabelas com dados de exemplo

2. **setup_database.php** - Script PHP para execução automatizada do arquivo SQL

## Estrutura do Banco de Dados

O banco de dados consiste em 4 tabelas principais:

### 1. clientes
- `id` - Identificador único (chave primária)
- `nome` - Nome do cliente
- `cpf` - CPF do cliente
- `email` - E-mail do cliente
- `telefone` - Telefone do cliente

### 2. produtos
- `id` - Identificador único (chave primária)
- `nome` - Nome do produto
- `descricao` - Descrição detalhada do produto
- `preco` - Preço unitário do produto
- `quantidade` - Quantidade em estoque

### 3. vendas
- `id` - Identificador único (chave primária)
- `cliente_id` - ID do cliente (chave estrangeira)
- `forma_pagamento` - Método de pagamento utilizado
- `dt_venda` - Data e hora da venda

### 4. itens_venda
- `id` - Identificador único (chave primária)
- `venda_id` - ID da venda (chave estrangeira)
- `produto_id` - ID do produto (chave estrangeira)
- `quantidade` - Quantidade vendida
- `preco_unitario` - Preço unitário no momento da venda

## Como Usar

### Método 1: Usando o Script PHP (Recomendado)

1. Certifique-se de que o MySQL está em execução
2. Execute o script PHP a partir da linha de comando:

```bash
php setup_database.php
```

3. O script irá:
   - Conectar ao MySQL
   - Criar o banco de dados e as tabelas
   - Popular as tabelas com dados de exemplo
   - Exibir uma mensagem de confirmação

### Método 2: Importação Manual do SQL

1. Acesse o MySQL via linha de comando:

```bash
mysql -u root -p
```

2. Execute o script SQL diretamente:

```bash
source caminho/para/db_setup.sql
```

Ou use uma ferramenta como phpMyAdmin para importar o arquivo SQL.

## Dados de Exemplo

O script popula o banco de dados com:
- 8 clientes fictícios
- 15 produtos (flores, plantas e acessórios)
- 5 vendas com diferentes formas de pagamento
- 11 itens de venda distribuídos entre as 5 vendas

## Observações

- O script assume que o usuário MySQL é `root` sem senha. Caso suas configurações sejam diferentes, edite o arquivo `setup_database.php` para ajustar os parâmetros de conexão.
- O script SQL inclui comandos para remover as tabelas existentes antes de criá-las novamente. Tenha cuidado ao executá-lo em um ambiente que já contenha dados importantes.
