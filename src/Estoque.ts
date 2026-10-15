
import { Produto } from "./models/Produto";

export class Estoque {
  private static instancia: Estoque | null = null;
  private produtos: Produto[] = [];

  private constructor() {}

  public static getInstance(): Estoque {
    if (Estoque.instancia === null) {
      Estoque.instancia = new Estoque();
    }

    return Estoque.instancia;
  }

  public cadastrarProduto(produto: Produto): void {
    const existe = this.produtos.some(
      (item) => item.codigo === produto.codigo
    );

    if (existe) {
      throw new Error("Já existe um produto com esse código.");
    }

    this.produtos.push(produto);
  }

  public listarProdutos(): Produto[] {
    return [...this.produtos];
  }

  public buscarProduto(codigo: string): Produto | undefined {
    return this.produtos.find(
      (produto) => produto.codigo === codigo
    );
  }
}
