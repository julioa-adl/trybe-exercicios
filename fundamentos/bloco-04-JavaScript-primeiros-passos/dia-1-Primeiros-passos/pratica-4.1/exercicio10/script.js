const valorCusto = 10;
const valorVenda = 15;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Entradas Inválidas");
} else {
  let valorCustoTotal = (valorCusto + (valorCusto * 0.2));
  let lucro = valorVenda - valorCustoTotal;
  let lucroMil = lucro * 1000;
  console.log("O custo de 1000 produtos é: ", "R$",valorCusto * 1000);
  console.log("Imposto sobre o custo: R$",(valorCusto * 0.2) * 1000);
  console.log("Faturamento total de 1000 produtos, unid. a R$",valorVenda,"é de: R$",valorVenda * 1000)
  console.log("O lucro total de 1000 produtos a unid. de R$",valorVenda," é: ", "R$",lucroMil);
}