# prog2.tri2.ativ2

Arquitetura
Componente	Responsabilidade
Backend (index.ts)	Servidor que expõe uma API REST com endpoints para gerenciar tarefas (listar, criar, atualizar, deletar).
Banco de Dados (src/core.ts)	Realiza todas as operações de CRUD diretamente no SQLite.
Frontend (main.js)	Consome a API via fetch e renderiza a interface dinâmica conforme o usuário interage.
Organização dos Arquivos

├── public/
│   ├── index.html
│   ├── main.css
│   └── main.js
├── src/
│   └── core.ts
├── index.ts
├── package.json
└── tsconfig.json

Funcionamento das Operações de Banco de Dados

O arquivo src/core.ts centraliza todas as operações com o SQLite através de quatro funções principais:
addItem

Insere uma nova tarefa no banco usando INSERT INTO items e retorna o item criado com seu ID.
getItems

Recupera todas as tarefas armazenadas através de uma query SELECT * FROM items.
updateItem

Modifica o título de uma tarefa existente usando UPDATE items SET title = ? WHERE id = ?.
deleteItem

Remove uma tarefa do banco com base em seu ID através de DELETE FROM items WHERE id = ?.

Essas funções servem como intermediárias entre o servidor de API e o banco de dados.
Instalação e Execução
Pré-requisito: Instalar o Bun

Linux e macOS:
bash

curl -fsSL https://bun.sh/install | bash

Windows:
bash

powershell -c "irm bun.sh/install.ps1 | iex"

Iniciar a aplicação
bash

bun index.ts

O servidor estará disponível em: http://localhost:3000
Usando a Aplicação

Abra seu navegador e acesse http://localhost:3000 para interagir com a To-Do List.
Funcionalidades Disponíveis

Adicionar tarefa: Digite o texto do campo de entrada e clique em "Add Task" ou pressione Enter
Remover tarefa: Clique no botão "Delete" ao lado da tarefa desejada
