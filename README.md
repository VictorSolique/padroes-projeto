# 📦 Sistema de Controle de Estoque

Projeto acadêmico desenvolvido em **TypeScript** para praticar os cinco padrões de projeto criacionais da programação orientada a objetos.

## 🎯 Objetivo

Desenvolver um sistema simples de controle de estoque que permita cadastrar produtos, consultar quantidades, adicionar e retirar itens e calcular o valor total dos produtos disponíveis.

O projeto também demonstra como os padrões de projeto podem ajudar a organizar e reutilizar o código.

## 🛠️ Tecnologias utilizadas

- TypeScript
- Node.js
- Git e GitHub
- Programação Orientada a Objetos (POO)

## 🧩 Padrões de projeto implementados

| Padrão | Aplicação no projeto |
|---|---|
| **Factory Method** | Cria produtos por meio de fábricas específicas. |
| **Abstract Factory** | Cria famílias de produtos relacionadas a diferentes setores. |
| **Builder** | Permite montar um produto definindo suas informações aos poucos. |
| **Prototype** | Permite criar uma cópia de um produto existente. |
| **Singleton** | Garante que o sistema utilize uma única instância do estoque. |

## ⚙️ Funcionalidades

- Cadastro de produtos.
- Listagem dos produtos cadastrados.
- Busca de produtos pelo código.
- Adição e retirada de quantidades do estoque.
- Cálculo do valor total de cada produto.
- Criação e cópia de produtos utilizando padrões de projeto.

## 📁 Estrutura do projeto

```text
padroes-projeto/
├── src/
│   ├── models/
│   │   └── Produto.ts
│   ├── Estoque.ts
│   └── index.ts
├── docs/
│   ├── TEMA.md
│   └── PADROES.md
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## ▶️ Como executar

**1.** Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

**2.** Entre na pasta do projeto:

```bash
cd padroes-projeto
```

**3.** Instale as dependências:

```bash
npm install
```

**4.** Execute o sistema:

```bash
npm run dev
```

Para verificar se o código compila corretamente:

```bash
npm run build
```

## 📚 Documentação

A pasta `docs/` contém os documentos complementares do projeto:

- **TEMA.md:** apresenta o tema e os objetivos do sistema.
- **PADROES.md:** explica a aplicação dos cinco padrões de projeto.

## 🎓 Finalidade acadêmica

Este projeto foi desenvolvido com finalidade educacional, buscando compreender na prática os padrões criacionais e sua aplicação em um sistema simples de controle de estoque.

---

Desenvolvido como atividade acadêmica de estudo de TypeScript, POO e padrões de projeto.
