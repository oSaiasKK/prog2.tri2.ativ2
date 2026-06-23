# prog2-tri2-ativ2

# Estrutura do projeto

```
├── public/
│   ├── index.html
│   ├── main.css
│   └── main.js
├── src/
│   └── core.ts
├── index.ts
├── package.json
└── tsconfig.json
```

# Como funciona

Este projeto é uma To-Do List simples que usa Bun, TypeScript e SQLite. As tarefas são salvas em um banco de dados, então não se perdem ao atualizar a página.

O backend (index.ts) cria um servidor que fornece uma API com rotas para listar, criar, atualizar e deletar tarefas. A parte do banco de dados fica no core.ts, onde são feitas as operações de inserir, buscar, atualizar e remover tarefas no SQLite.

O frontend (main.js) consome essa API usando fetch e atualiza a interface da página de forma dinâmica conforme o usuário interage com a lista.

# Como as funções foram implementadas

As funções do sistema estão no arquivo src/core.ts e são responsáveis por interagir diretamente com o banco de dados SQLite.

A função addItem recebe um título e insere uma nova tarefa na tabela items usando uma query INSERT. Depois disso, o item criado é retornado.

A função getItems busca todas as tarefas salvas no banco usando SELECT * FROM items e retorna uma lista com os resultados.

A função deleteItem recebe um id e remove a tarefa correspondente do banco usando DELETE FROM items WHERE id = ?.

A função updateItem recebe um id e um novo título, e atualiza a tarefa correspondente usando UPDATE items SET title = ? WHERE id = ?.

Essas funções fazem toda a comunicação com o banco de dados e são usadas pelo servidor para responder as requisições da API.

# Como rodar o projeto

## 1. Instalar o Bun

Caso ainda não tenha:

Linux e macOS:
```bash
curl -fsSL https://bun.sh/install | bash
```

Windows:
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

## 2. Iniciar o servidor

```bash
bun index.ts
```

O servidor roda em: http://localhost:3000

# Como testar as rotas

O projeto pode ser testado diretamente pelo navegador.

---

## Abrir a aplicação

Acesse:

http://localhost:3000

---

## Testando funcionalidades

Na interface é possível:

- Adicionar uma nova tarefa digitando no campo e clicando em "Add Task"
- Ou pressionando Enter
- Remover uma tarefa clicando no botão "Delete"