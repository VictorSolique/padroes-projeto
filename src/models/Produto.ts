
export class Produto {
  constructor(
    public readonly codigo: string,
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {}

  public adicionarEstoque(quantidade: number): void {
    if (quantidade <= 0) {
      throw new Error("A quantidade deve ser maior que zero.");
    }

    this.quantidade += quantidade;
  }

  public retirarEstoque(quantidade: number): void {
    if (quantidade <= 0) {
      throw new Error("A quantidade deve ser maior que zero.");
    }

    if (quantidade > this.quantidade) {
      throw new Error("Estoque insuficiente.");
    }

    this.quantidade -= quantidade;
  }

  public calcularValorTotal(): number {
    return Math.round(this.preco * this.quantidade * 100) / 100;
  }

  public clonar(codigo: string, nome: string = this.nome): Produto {
    return new Produto(
      codigo,
      nome,
      this.preco,
      this.quantidade
    );
  }
}
