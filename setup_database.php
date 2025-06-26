<?php
/**
 * Script para criar e popular o banco de dados da floricultura
 * Este script executa o arquivo db_setup.sql
 */

// Configurações de conexão (sem banco de dados específico)
$host = 'localhost';
$user = 'root';
$pass = '';

// Caminho para o arquivo SQL
$sqlFile = __DIR__ . '/db_setup.sql';

// Verificar se o arquivo existe
if (!file_exists($sqlFile)) {
    die("Erro: O arquivo db_setup.sql não foi encontrado.\n");
}

echo "Iniciando configuração do banco de dados...\n";

try {
    // Conectar ao MySQL (sem especificar o banco de dados)
    $pdo = new PDO("mysql:host=$host", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Conectado ao MySQL com sucesso.\n";
    
    // Ler o conteúdo do arquivo SQL
    $sql = file_get_contents($sqlFile);
    
    // Executar múltiplas consultas
    $queries = explode(';', $sql);
    
    echo "Executando consultas SQL...\n";
    
    foreach ($queries as $query) {
        $query = trim($query);
        if (!empty($query)) {
            $pdo->exec($query);
        }
    }
    
    echo "Banco de dados configurado com sucesso!\n";
    echo "As seguintes tabelas foram criadas e populadas:\n";
    echo "- clientes (8 registros)\n";
    echo "- produtos (15 registros)\n";
    echo "- vendas (5 registros)\n";
    echo "- itens_venda (11 registros)\n";
    
} catch (PDOException $e) {
    die("Erro na configuração do banco de dados: " . $e->getMessage() . "\n");
}
?>
