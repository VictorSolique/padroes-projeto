# Padrões de Projeto no Controle de Estoque

Este documento explica como os cinco padrões criacionais foram usados no projeto, onde estão no código, qual problema ajudam a resolver e por que fazem sentido neste exemplo.

## 1. Factory Method

**Onde está:** `src/index.ts`, nas classes `ProdutoFactory`, `FabricaAlimentos` e `FabricaBebidas`.

**O que faz:** define um método para criar um produto e deixa que cada fábrica escolha qual tipo de produto será criado.

**Problema que resolve:** evita concentrar todas as decisões de criação de produtos em um único trecho do programa. O código que usa a fábrica pede um produto sem precisar chamar diretamente o construtor de cada tipo concreto.

**Por que faz sentido:** o estoque pode trabalhar com diferentes tipos de produtos, como alimentos e bebidas.

## 2. Abstract Factory

**Onde está:** `src/index.ts`, nas classes `FabricaSetor`, `FabricaSupermercado` e `FabricaLimpeza`.

**O que faz:** define uma fábrica que cria uma família de produtos relacionados. Neste exemplo, cada fábrica tem métodos para criar um produto principal e um produto complementar.

**Problema que resolve:** organiza a criação de conjuntos de produtos de um mesmo setor, em vez de escolher cada item de forma isolada.

**Por que faz sentido:** o exemplo representa dois setores: supermercado, com alimentos e bebidas, e limpeza, com produtos e acessórios de limpeza.

**Diferença para Factory Method:** o Factory Method cria um produto por chamada; o Abstract Factory agrupa métodos de criação de uma família de produtos relacionados.

## 3. Builder

**Onde está:** `src/index.ts`, na classe `ProdutoBuilder`.

**O que faz:** permite informar o código, nome, preço e quantidade em etapas separadas e, ao final, criar o produto com `construir()`.

**Problema que resolve:** evita precisar passar todos os dados de criação juntos quando queremos montar o objeto passo a passo. O método `construir()` também confere se os dados básicos foram preenchidos.

**Por que faz sentido:** produtos possuem várias informações, e o Builder demonstra como organizá-las antes de criar o objeto.

## 4. Prototype

**Onde está:** `src/models/Produto.ts`, no método `clonar()`.

**O que faz:** cria outro produto usando os dados de um produto existente. O novo produto pode receber um código e um nome diferentes.

**Problema que resolve:** evita preencher novamente todos os dados quando queremos criar um produto parecido com outro.

**Por que faz sentido:** no exemplo, a cópia do feijão mantém o preço e a quantidade do original, mas usa outro código e outro nome.

**Observação:** o método atual cria uma nova instância de `Produto` com os dados copiados. É adequado para o exemplo simples usado neste projeto.

## 5. Singleton

**Onde está:** `src/Estoque.ts`, na classe `Estoque`.

**O que faz:** mantém uma única instância do estoque. O construtor é privado e o método `getInstance()` devolve a instância compartilhada.

**Problema que resolve:** evita que diferentes partes do programa criem estoques separados por acidente.

**Por que faz sentido:** no exemplo, todos os produtos são cadastrados no mesmo estoque. O programa verifica isso comparando `Estoque.getInstance()` com a instância que já está usando.

## Como conferir o projeto

Na raiz do projeto, execute:

```bash
npm install
npm run build
npm run dev
```

A saída mostra os produtos cadastrados, suas quantidades, o valor total e a confirmação do Singleton (`true`).
