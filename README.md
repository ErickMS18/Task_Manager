# 📋 Sistema de Gerenciamento de Tarefas (CRUD)

Este projeto é uma aplicação full stack desenvolvida com foco em demonstrar conhecimentos em desenvolvimento web, integração entre front-end e back-end e manipulação de banco de dados.

---

## 📌 Requisitos

Antes de rodar o projeto, é necessário ter instalado:

* Node.js
* MySQL
* Um gerenciador de banco (ex: MySQL Workbench) ou terminal

---

## 🚀 Tecnologias Utilizadas

### Front-end

* React
* CSS
* JavaScript (Fetch API)

### Back-end

* Node.js
* Express
* MySQL

---

## 📦 Funcionalidades

* Criar tarefas
* Listar tarefas
* Buscar tarefa por ID
* Atualizar tarefas
* Excluir tarefas
* Controle de status e prioridade

---

## 🧠 Como o Sistema Funciona

A aplicação segue o padrão cliente-servidor:

### 🔹 Front-end

Responsável pela interface do usuário.

Permite:

* Criar tarefas
* Visualizar lista de tarefas
* Editar e excluir

O front se comunica com o back-end via requisições HTTP.

---

### 🔹 Back-end

Responsável pela lógica de negócio e acesso ao banco.

Principais rotas:

* `GET /tasks` → lista todas as tarefas
* `GET /tasks/:id` → busca tarefa por ID
* `POST /tasks` → cria nova tarefa
* `PUT /tasks/:id` → atualiza tarefa
* `DELETE /tasks/:id` → remove tarefa

O servidor roda em:

```
http://localhost:8800
```

---

### 🔹 Banco de Dados

O banco utilizado é MySQL.

O projeto já possui um arquivo pronto em:

```
db/tasks.sql
```

Esse arquivo contém:

* Criação do banco `task_manager`
* Criação da tabela `tasks`
* Dados de exemplo

---

### 🧩 Estrutura da Tabela

A tabela `tasks` possui:

* `id` → identificador
* `titulo` → nome da tarefa
* `descricao` → descrição
* `task_status` → status (Pendente, Andamento, Concluída)
* `prioridade` → nível (Baixa, Média, Alta, Nenhuma)
* `data_limite` → prazo
* `created_at` → data de criação

---

## ⚙️ Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd nome-do-projeto
```

---

### 2. Configurar o Banco de Dados

Você pode configurar o banco de duas formas:

#### Opção 1 (interface gráfica)

* Abra o arquivo `db/tasks.sql`
* Execute o script completo

Esta foi a forma utilizada durante o desenvolvimento.

---

#### Opção 2 (via terminal)

```bash
mysql -u root -p < db/tasks.sql
```

Após isso, o banco `task_manager` estará pronto para uso.

---

### 3. Rodar o Back-end

```bash
cd backend
npm install
node index.js
```

O servidor iniciará em:

```
http://localhost:8800
```

---

### 4. Rodar o Front-end

```bash
cd frontend
npm install
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 🔗 Integração

O front-end consome a API utilizando o fetch nativo do JavaScript.

Exemplo baseado no funcionamento real do projeto:

```javascript
fetch(`http://localhost:8800/tasks?task_status=Pendente&limit=10&offset=0`)
```

A aplicação também utiliza:

* Filtros por status (Pendente, Andamento, Concluída)
* Paginação com limit e offset

---
