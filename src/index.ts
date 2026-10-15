
import { Produto } from "./models/Produto";
import { Estoque } from "./Estoque";

// Tipos de produtos
class ProdutoAlimenticio extends Produto {}

class ProdutoBebida extends Produto {}

// Fábrica de produtos
abstract class ProdutoFactory {
  abstract criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto;
}

// Fábrica de alimentos
class FabricaAlimentos extends ProdutoFactory {
  criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoAlimenticio(
      codigo, nome, preco, quantidade
    );
  }
}

// Fábrica de bebidas
class FabricaBebidas extends ProdutoFactory {
  criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoBebida(
      codigo, nome, preco, quantidade
    );
  }
}

// Programa principal
const estoque = Estoque.getInstance();

const alimentos = new FabricaAlimentos();
const bebidas = new FabricaBebidas();

const arroz = alimentos.criarProduto(
  "001", "Arroz 5 kg", 25.90, 10
);

const agua = bebidas.criarProduto(
  "002", "Água mineral", 3.50, 20
);

estoque.cadastrarProduto(arroz);
estoque.cadastrarProduto(agua);

arroz.adicionarEstoque(5);
agua.retirarEstoque(3);

console.log("Produtos no estoque:");

for (const produto of estoque.listarProdutos()) {
  console.log(
    `${produto.nome} - Quantidade: ${produto.quantidade}`
  );

  console.log(
    `Valor total: ${produto.calcularValorTotal().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`
  );
}

console.log(
  "O estoque é o mesmo?",
  estoque === Estoque.getInstance()
);
