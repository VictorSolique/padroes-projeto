# 📦 Sistema de Controle de Estoque

Projeto acadêmico desenvolvido em **TypeScript** para a disciplina de Padrões de Projeto.

O sistema tem como objetivo gerenciar produtos, controlar entradas e saídas de mercadorias e calcular o valor total dos itens disponíveis em estoque.

Durante o desenvolvimento, serão aplicados os cinco padrões criacionais estudados na disciplina:

- Factory Method;
- Abstract Factory;
- Builder;
- Prototype;
- Singleton.

Os padrões serão integrados ao sistema para resolver problemas reais de criação e gerenciamento de objetos.

## 🛠️ Tecnologias utilizadas

- **TypeScript:** linguagem utilizada no desenvolvimento.
- **Node.js:** ambiente de execução.
- **tsx:** execução direta de arquivos TypeScript durante o desenvolvimento.
- **Git e GitHub:** controle de versão e armazenamento do projeto.

## 📁 Estrutura do projeto

```text
padroes-projeto/
├── src/
│   ├── models/
│   │   └── Produto.ts
│   └── index.ts
├── docs/
│   └── TEMA.md
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### Responsabilidade dos arquivos

- `src/models/Produto.ts`: representa um produto e contém operações de entrada, saída e cálculo do valor total em estoque.
- `src/index.ts`: executa um exemplo de utilização da classe Produto.
- `docs/TEMA.md`: descreve o domínio e os objetivos do sistema.
- `package.json`: registra as dependências e os comandos de execução.
- `tsconfig.json`: configura a compilação do TypeScript.
- `.gitignore`: define quais arquivos e pastas não devem ser versionados.

## ⚙️ Pré-requisitos

Antes de executar o projeto, instale o [Node.js](https://nodejs.org/), que inclui o npm.

Para conferir as versões instaladas, execute:

```bash
node -v
npm -v
```

## 🚀 Instalação

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json`.

## ▶️ Como executar

### Executar diretamente o TypeScript

Durante o desenvolvimento, utilize:

```bash
npm run dev
```

Esse comando utiliza o `tsx` para executar `src/index.ts` diretamente, sem exigir a geração prévia de arquivos JavaScript.

### Verificar a compilação

Para verificar se o código TypeScript compila sem erros, execute:

```bash
npm run build
```

A compilação gera os arquivos JavaScript na pasta `dist/`.

### Executar pelo script de inicialização

Se o script `start` estiver configurado para utilizar o `tsx`, execute:

```bash
npm start
```

## 📋 Funcionalidades iniciais

Atualmente, o sistema possui uma estrutura inicial para:

- Criar um produto com código, nome, preço e quantidade;
- Registrar entradas de mercadorias;
- Registrar saídas, impedindo quantidades negativas;
- Calcular o valor total dos produtos disponíveis.

## 📚 Padrões de projeto

Os cinco padrões criacionais serão implementados gradualmente e integrados ao sistema durante as quatro aulas.

A aplicação e a justificativa de cada padrão serão documentadas em `docs/PADROES.md` conforme forem desenvolvidas.

## 🎯 Objetivo acadêmico

O projeto busca demonstrar a aplicação prática dos padrões criacionais, utilizando TypeScript e orientação a objetos, com foco na organização do código, na integração das funcionalidades e na compreensão das decisões de projeto.