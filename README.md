# 📝 Lista de Tarefas em React

Este é um projeto simples de **Lista de Tarefas (ToDo List)** desenvolvido com **React**. Ele permite ao usuário adicionar tarefas com prioridade, data limite e status de conclusão. Além disso, possui filtros por status e ordenação por prioridade para melhorar a organização e o foco.

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas  
- 🕓 Definir prioridade: **Alta**, **Média** ou **Baixa**  
- 📅 Definir uma data limite (opcional)  
- ✔️ Marcar uma tarefa como **concluída** ou **pendente**  
- 🔍 Filtrar tarefas por status:  
  - Todas  
  - Concluídas  
  - Pendentes  
- 🔼 Ordenar tarefas por prioridade  
- 🗑️ Remover tarefas individualmente  
- ♻️ Resetar a lista de tarefas  

## 📁 Estrutura do Projeto

📁 src
├── 📄 ListaDeTarefas.jsx # Componente principal com toda a lógica
├── 📄 ToDoList.css # Estilos para o componente
├── 📄 App.jsx # Importa e renderiza a ListaDeTarefas
└── 📄 main.jsx # Ponto de entrada da aplicação

## 🛠️ Tecnologias Utilizadas

- **React** (Hooks: `useState`)  
- **HTML5 + CSS3** (modularizados em arquivo `.css`)  
- **JavaScript (ES6+)**

## 🎯 Conceitos de Usabilidade Aplicados

- **Eficiência**: O sistema permite realizar tarefas com poucos cliques e sem recarregar a página. O formulário é simples, e os filtros e ordenações são reativos.
  
- **Eficácia**: As funcionalidades cobrem o objetivo principal da aplicação — gerenciar tarefas de forma clara e intuitiva. Todas as operações essenciais estão implementadas.
  
- **Facilidade de uso (Usabilidade)**: A interface é limpa, com campos e botões bem identificados, permitindo uso mesmo sem explicações prévias.
  
- **Tolerância ao erro**: O sistema evita falhas, como impedir a adição de tarefas sem nome. A remoção de tarefas e mudanças de status são reversíveis manualmente (ex: desmarcar como concluída).
  
- **Engajamento**: O uso de cores e ícones ajuda na identificação rápida de ações. O feedback visual (classes `concluida` e `pendente`) mantém o usuário engajado com o progresso de suas tarefas.

## 🎨 Preferências de UI/UX

- Uso de **tipografia clara** e espaçamento adequado
- Botões com rótulos objetivos e fáceis de entender
- Cores e estilos visuais que indicam status (por exemplo, tarefas concluídas ganham destaque visual)
- Adoção de **feedback imediato** em todas as ações (ex: concluir, remover, resetar)
