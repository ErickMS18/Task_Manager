# 📋 Sistema de Gerenciamento de Tarefas (CRUD)

Este projeto é uma aplicação full stack desenvolvida como parte do meu portfólio acadêmico, com foco em demonstrar conhecimentos em desenvolvimento web, integração entre front-end e back-end e manipulação de banco de dados.

---

## 🚀 Tecnologias Utilizadas

### Front-end

* React
* CSS
* Axios

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

Você pode configurar o banco de **duas formas**:

#### ✅ Opção 1 (mais comum – interface gráfica)

Se você já utiliza MySQL Workbench ou outro gerenciador:

1. Abra o arquivo `db/tasks.sql`
2. Execute o script completo

👉 Essa é a forma que foi utilizada durante o desenvolvimento do projeto.

---

#### 💻 Opção 2 (via terminal)

Você também pode executar diretamente pelo terminal:

```bash
mysql -u root -p < db/tasks.sql
```

Depois disso, o banco `task_manager` e a tabela já estarão prontos.

---

👉 Ambas as formas fazem exatamente a mesma coisa — escolha a que você estiver mais confortável.bash
mysql -u root -p < db/tasks.sql

````

---

### 3. Rodar o Back-end

```bash
cd backend
npm install
node index.js
````

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

O front-end consome a API utilizando o `fetch` nativo do JavaScript.

Exemplo baseado no funcionamento real do projeto:

```javascript
fetch(`http://localhost:8800/tasks?task_status=Pendente&limit=10&offset=0`)
```

A aplicação também utiliza:

* Filtros por status (Pendente, Andamento, Concluída)
* Paginação com `limit` e `offset`

Isso permite carregar as tarefas de forma eficiente e organizada, simulando um comportamento próximo de aplicações reais.

---

## 🎯 Objetivo do Projeto

* Praticar desenvolvimento full stack
* Consolidar integração entre front e back
* Trabalhar com banco relacional
