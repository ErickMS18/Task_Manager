<<<<<<< HEAD
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: task_manager
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(155) NOT NULL,
  `descricao` text,
  `task_status` enum('Pendente','Andamento','Concluída') NOT NULL DEFAULT 'Pendente',
  `prioridade` enum('Baixa','Média','Alta','Nenhuma') DEFAULT 'Nenhuma',
  `data_limite` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'Estudar React','Revisar hooks, useEffect e useState','Pendente','Alta','2026-04-01 18:00:00','2026-04-06 23:14:44'),(2,'Finalizar API em Node.js','Implementar autenticação JWT','Andamento','Alta','2026-04-02 23:59:00','2026-04-06 23:14:44'),(3,'Revisar MySQL','Praticar JOINs e subqueries','Pendente','Média','2026-04-06 20:00:00','2026-04-06 23:14:44'),(4,'Ler artigo de arquitetura de software','Foco em microservices','Pendente','Baixa','2026-04-10 12:00:00','2026-04-06 23:14:44'),(5,'Entregar trabalho de Banco de Dados','CRUD completo com interface','Concluída','Alta','2026-03-29 00:00:00','2026-04-06 23:14:44'),(6,'Preparar apresentação do TCC','Slides e roteiro de fala','Concluída','Alta','2026-04-08 00:00:00','2026-04-06 23:14:44'),(7,'Revisar código do projeto de IA','Ajustar modelo de classificação','Pendente','Média',NULL,'2026-04-06 23:14:44'),(8,'Ir à academia','Treino de pernas e cardio','Concluída','Baixa','2026-03-20 19:00:00','2026-04-06 23:14:44'),(9,'Caminhada de 5km','Rotina diária de exercícios','Andamento','Baixa',NULL,'2026-04-06 23:14:44'),(10,'Marcar consulta médica','Check-up geral anual','Pendente','Média',NULL,'2026-04-06 23:14:44'),(11,'Beber 2L de água','Manter hidratação diária','Andamento','Nenhuma',NULL,'2026-04-06 23:14:44'),(12,'Organizar quarto','Limpar e organizar roupas e objetos','Pendente','Baixa',NULL,'2026-04-06 23:14:44'),(14,'Fazer mercado','Comprar itens básicos da semana','Pendente','Alta','2026-04-05 18:00:00','2026-04-06 23:14:44'),(15,'Arrumar desktop','Organizar arquivos e pastas','Pendente','Baixa',NULL,'2026-04-06 23:14:44'),(16,'Pagar conta de luz','Evitar atraso da fatura','Pendente','Alta','2026-04-03 23:59:00','2026-04-06 23:14:44'),(17,'Revisar orçamento mensal','Controlar gastos do mês','Andamento','Média',NULL,'2026-04-06 23:14:44'),(18,'Declarar despesas','Organizar comprovantes','Pendente','Alta','2026-04-07 20:00:00','2026-04-06 23:14:44'),(19,'Atualizar portfólio','Adicionar projetos recentes','Pendente','Alta',NULL,'2026-04-06 23:14:44'),(20,'Fazer deploy do projeto','Publicar aplicação no servidor','Andamento','Alta',NULL,'2026-04-06 23:14:44'),(21,'Estudar Docker','Aprender containers básicos','Pendente','Média','2026-04-09 21:00:00','2026-04-06 23:14:44'),(22,'Assistir série','Episódio novo da temporada','Pendente','Nenhuma',NULL,'2026-04-06 23:14:44'),(23,'Ler livro','Continuar leitura atual','Andamento','Baixa',NULL,'2026-04-06 23:14:44'),(24,'Sair com amigos','Programar encontro no fim de semana','Pendente','Baixa',NULL,'2026-04-06 23:14:44'),(25,'Responder e-mails','Limpar caixa de entrada','Pendente','Média',NULL,'2026-04-06 23:14:44'),(26,'Fazer backup do celular','Salvar fotos importantes','Pendente','Alta',NULL,'2026-04-06 23:14:44'),(27,'Trocar senha de contas','Aumentar segurança online','Pendente','Alta',NULL,'2026-04-06 23:14:44')
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-06 21:40:54
=======
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
('Pagar conta de luz', 'Evitar atraso da fatura', 'Concluída', 'Alta', '2026-04-03 23:59:00'),
('Revisar orçamento mensal', 'Controlar gastos do mês', 'Andamento', 'Média', NULL),
('Declarar despesas', 'Organizar comprovantes', 'Pendente', 'Alta', '2026-04-07 20:00:00'),
('Atualizar portfólio', 'Adicionar projetos recentes', 'Pendente', 'Alta', NULL),
('Fazer deploy do projeto', 'Publicar aplicação no servidor', 'Andamento', 'Alta', NULL),
('Estudar Docker', 'Aprender containers básicos', 'Pendente', 'Média', '2026-04-09 21:00:00'),
('Assistir série', 'Episódio novo da temporada', 'Pendente', 'Nenhuma', NULL),
('Ler livro', 'Continuar leitura atual', 'Andamento', 'Baixa', NULL),
('Sair com amigos', 'Programar encontro no fim de semana', 'Pendente', 'Baixa', NULL),
('Responder e-mails', 'Limpar caixa de entrada', 'Pendente', 'Média', NULL),
('Fazer backup do celular', 'Salvar fotos importantes', 'Pendente', 'Alta', NULL),
('Trocar senha de contas', 'Aumentar segurança online', 'Pendente', 'Alta', NULL);
>>>>>>> ec27108 (Adicionando meu nome na tela)
