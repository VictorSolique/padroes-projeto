import { Produto } from "./models/Produto";

const produto = new Produto(
  "001",
  "Bolacha Maizena",
  12.99,
  10
);

console.log("Produto:", produto.nome);
console.log("Quantidade inicial:", produto.quantidade);

produto.adicionarEstoque(5);
console.log("Após entrada:", produto.quantidade);

produto.retirarEstoque(3);
console.log("Após saída:", produto.quantidade);

console.log(
  "Valor total em estoque:",
  produto.calcularValorTotal()
);