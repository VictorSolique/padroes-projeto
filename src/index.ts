import { Produto } from "./models/Produto";
import { Estoque } from "./Estoque";

// Tipos de produtos
class ProdutoAlimenticio extends Produto {}
class ProdutoBebida extends Produto {}
class ProdutoLimpeza extends Produto {}
class ProdutoAcessorioLimpeza extends Produto {}

// Factory Method: cria um tipo de produto por vez
abstract class ProdutoFactory {
  abstract criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto;
}

class FabricaAlimentos extends ProdutoFactory {
  criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoAlimenticio(codigo, nome, preco, quantidade);
  }
}

class FabricaBebidas extends ProdutoFactory {
  criarProduto(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoBebida(codigo, nome, preco, quantidade);
  }
}

// Abstract Factory: cria uma família de produtos relacionados
abstract class FabricaSetor {
  abstract criarProdutoPrincipal(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto;

  abstract criarProdutoComplementar(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto;
}

class FabricaSupermercado extends FabricaSetor {
  criarProdutoPrincipal(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoAlimenticio(codigo, nome, preco, quantidade);
  }

  criarProdutoComplementar(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoBebida(codigo, nome, preco, quantidade);
  }
}

class FabricaLimpeza extends FabricaSetor {
  criarProdutoPrincipal(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoLimpeza(codigo, nome, preco, quantidade);
  }

  criarProdutoComplementar(
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    return new ProdutoAcessorioLimpeza(codigo, nome, preco, quantidade);
  }
}

// Builder: monta um produto aos poucos
class ProdutoBuilder {
  private codigo = "";
  private nome = "";
  private preco = 0;
  private quantidade = 0;

  definirCodigo(codigo: string): this {
    this.codigo = codigo;
    return this;
  }

  definirNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  definirPreco(preco: number): this {
    this.preco = preco;
    return this;
  }

  definirQuantidade(quantidade: number): this {
    this.quantidade = quantidade;
    return this;
  }

  construir(): Produto {
    if (!this.codigo || !this.nome || this.preco <= 0 || this.quantidade < 0) {
      throw new Error("Confira os dados do produto.");
    }

    return new Produto(this.codigo, this.nome, this.preco, this.quantidade);
  }
}

// Programa principal
const estoque = Estoque.getInstance();

// Produtos criados com Factory Method
const alimentos = new FabricaAlimentos();
const bebidas = new FabricaBebidas();

const arroz = alimentos.criarProduto("001", "Arroz 5 kg", 25.90, 10);
const agua = bebidas.criarProduto("002", "Água mineral", 3.50, 20);

// Produtos criados com Abstract Factory
const supermercado = new FabricaSupermercado();
const limpeza = new FabricaLimpeza();

const leite = supermercado.criarProdutoPrincipal(
  "005", "Leite", 5.50, 8
);
const suco = supermercado.criarProdutoComplementar(
  "006", "Suco", 6.00, 10
);
const detergente = limpeza.criarProdutoPrincipal(
  "007", "Detergente", 3.25, 12
);
const esponja = limpeza.criarProdutoComplementar(
  "008", "Esponja de limpeza", 2.00, 15
);

// Produto criado usando Builder
const feijao = new ProdutoBuilder()
  .definirCodigo("003")
  .definirNome("Feijão 1 kg")
  .definirPreco(8.50)
  .definirQuantidade(5)
  .construir();

// Prototype: cópia do produto feijão
const feijaoCopia = feijao.clonar("004", "Feijão 1 kg - Cópia");

// Cadastro dos produtos
estoque.cadastrarProduto(arroz);
estoque.cadastrarProduto(agua);
estoque.cadastrarProduto(feijao);
estoque.cadastrarProduto(feijaoCopia);
estoque.cadastrarProduto(leite);
estoque.cadastrarProduto(suco);
estoque.cadastrarProduto(detergente);
estoque.cadastrarProduto(esponja);

// Operações de estoque
arroz.adicionarEstoque(5);
agua.retirarEstoque(3);

// Exibição dos produtos
console.log("Produtos no estoque:");

for (const produto of estoque.listarProdutos()) {
  console.log(`\nCódigo: ${produto.codigo}`);
  console.log(`Nome: ${produto.nome}`);
  console.log(`Quantidade: ${produto.quantidade}`);
  console.log(
    `Valor total: ${produto.calcularValorTotal().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}`
  );
}

// Verificação do Singleton
console.log(
  "\nO estoque é o mesmo?",
  estoque === Estoque.getInstance()
);
