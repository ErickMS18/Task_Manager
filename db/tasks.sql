CREATE DATABASE IF NOT EXISTS task_manager;

USE task_manager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(155) NOT NULL,
    descricao TEXT,
    task_status ENUM('Pendente', 'Andamento', 'Concluída') DEFAULT 'Pendente' NOT NULL,
    prioridade ENUM('Baixa', 'Média', 'Alta', 'Nenhuma') DEFAULT 'Nenhuma', 
    data_limite DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (titulo, descricao, task_status, prioridade, data_limite) VALUES

('Estudar React', 'Revisar hooks, useEffect e useState', 'Pendente', 'Alta', '2026-04-01 18:00:00'),
('Finalizar API em Node.js', 'Implementar autenticação JWT', 'Andamento', 'Alta', '2026-04-02 23:59:00'),
('Revisar MySQL', 'Praticar JOINs e subqueries', 'Pendente', 'Média', '2026-04-06 20:00:00'),
('Ler artigo de arquitetura de software', 'Foco em microservices', 'Pendente', 'Baixa', '2026-04-10 12:00:00'),
('Entregar trabalho de Banco de Dados', 'CRUD completo com interface', 'Andamento', 'Alta', '2026-03-28 23:59:00'),
('Preparar apresentação do TCC', 'Slides e roteiro de fala', 'Pendente', 'Alta', '2026-04-08 10:00:00'),
('Revisar código do projeto de IA', 'Ajustar modelo de classificação', 'Pendente', 'Média', NULL),
('Ir à academia', 'Treino de pernas e cardio', 'Concluída', 'Baixa', '2026-03-20 19:00:00'),
('Caminhada de 5km', 'Rotina diária de exercícios', 'Andamento', 'Baixa', NULL),
('Marcar consulta médica', 'Check-up geral anual', 'Pendente', 'Média', NULL),
('Beber 2L de água', 'Manter hidratação diária', 'Andamento', 'Nenhuma', NULL),
('Organizar quarto', 'Limpar e organizar roupas e objetos', 'Pendente', 'Baixa', NULL),
('Lavar roupa', 'Separar brancas e coloridas', 'Pendente', 'Média', NULL),
('Fazer mercado', 'Comprar itens básicos da semana', 'Pendente', 'Alta', '2026-04-05 18:00:00'),
('Arrumar desktop', 'Organizar arquivos e pastas', 'Pendente', 'Baixa', NULL),
('Pagar conta de luz', 'Evitar atraso da fatura', 'Pendente', 'Alta', '2026-04-03 23:59:00'),
('Revisar orçamento mensal', 'Controlar gastos do mês', 'Andamento', 'Média', NULL),
('Declarar despesas', 'Organizar comprovantes', 'Pendente', 'Alta', '2026-04-07 20:00:00'),
('Atualizar portfólio', 'Adicionar projetos recentes', 'Pendente', 'Alta', NULL),
('Fazer deploy do projeto', 'Publicar aplicação no servidor', 'Andamento', 'Alta', NULL),
('Estudar Docker', 'Aprender containers básicos', 'Pendente', 'Média', '2026-04-09 21:00:00'),
('Assistir série', 'Episódio novo da temporada', 'Pendente', 'Nenhuma', NULL),
('Ler livro', 'Continuar leitura atual', 'Andamento', 'Baixa', NULL),
('Sair com amigos', 'Programar encontro no fim de semana', 'Pendente', 'Baixa', NULL),
('Responder e-mails', 'Limpar caixa de entrada', 'Pendente', 'Média', NULL),
('Fazer backup do celular', 'Salvar fotos importantes', 'Concluída', 'Alta', NULL),
('Trocar senha de contas', 'Aumentar segurança online', 'Pendente', 'Alta', NULL);
