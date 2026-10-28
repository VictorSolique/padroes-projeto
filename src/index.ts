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

// Facade: organiza as operações do estoque
class EstoqueFacade {
  constructor(private estoque: Estoque) {}

  cadastrarPelaFabrica(
    fabrica: ProdutoFactory,
    codigo: string,
    nome: string,
    preco: number,
    quantidade: number
  ): Produto {
    const produto = fabrica.criarProduto(codigo, nome, preco, quantidade);
    this.estoque.cadastrarProduto(produto);
    return produto;
  }

  cadastrarProduto(produto: Produto): void {
    this.estoque.cadastrarProduto(produto);
  }

  adicionarEstoque(codigo: string, quantidade: number): void {
    const produto = this.estoque.buscarProduto(codigo);

    if (!produto) {
      throw new Error("Produto não encontrado.");
    }

    produto.adicionarEstoque(quantidade);
  }

  retirarEstoque(codigo: string, quantidade: number): void {
    const produto = this.estoque.buscarProduto(codigo);

    if (!produto) {
      throw new Error("Produto não encontrado.");
    }

    produto.retirarEstoque(quantidade);
  }

  listarProdutos(): Produto[] {
    return this.estoque.listarProdutos();
  }
}

// Programa principal
const estoque = Estoque.getInstance();
const facade = new EstoqueFacade(estoque);

// Factory Method: cria e cadastra os produtos em sequência
const arroz = facade.cadastrarPelaFabrica(
  new FabricaAlimentos(), "001", "Arroz 5 kg", 25.90, 10
);

const agua = facade.cadastrarPelaFabrica(
  new FabricaBebidas(), "002", "Água mineral", 3.50, 20
);

// Abstract Factory: cria produtos de famílias relacionadas
const supermercado = new FabricaSupermercado();
const limpeza = new FabricaLimpeza();

const leite = supermercado.criarProdutoPrincipal("005", "Leite", 5.50, 8);
const suco = supermercado.criarProdutoComplementar("006", "Suco", 6.00, 10);
const detergente = limpeza.criarProdutoPrincipal("007", "Detergente", 3.25, 12);
const esponja = limpeza.criarProdutoComplementar("008", "Esponja de limpeza", 2.00, 15);

facade.cadastrarProduto(leite);
facade.cadastrarProduto(suco);
facade.cadastrarProduto(detergente);
facade.cadastrarProduto(esponja);

// Builder: monta um produto aos poucos
const feijao = new ProdutoBuilder()
  .definirCodigo("003")
  .definirNome("Feijão 1 kg")
  .definirPreco(8.50)
  .definirQuantidade(5)
  .construir();

facade.cadastrarProduto(feijao);

// Prototype: cria uma cópia de um produto
const feijaoCopia = feijao.clonar("004", "Feijão 1 kg - Cópia");
facade.cadastrarProduto(feijaoCopia);

// Facade: procura os produtos e executa as operações
facade.adicionarEstoque("001", 5);
facade.retirarEstoque("002", 3);

console.log("Produtos no estoque:");

for (const produto of facade.listarProdutos()) {
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

console.log("\nO estoque é o mesmo?", estoque === Estoque.getInstance());
