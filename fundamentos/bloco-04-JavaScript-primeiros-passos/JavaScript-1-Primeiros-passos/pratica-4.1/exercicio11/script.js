let salarioBruto = 3000;
console.log("Salário bruto de: R$",salarioBruto);

// Cálculo desconto INSS:
let aliquotaInss = null;

if (salarioBruto <= 1556.94) {
  aliquotaInss = 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
} else if (salarioBruto >= 2594.95 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
}else {
  aliquotaInss = 570.88;
}

let salarioBase = (salarioBruto - (salarioBruto * aliquotaInss));
console.log("Salário Base descontado INSS: R$",salarioBase);

// Cálculo desconto IR:
let aliquotaIr = null;
let deducaoParcela = null;

if (salarioBase <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIr = 0.075;
  deducaoParcela = 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIr = 0.15;
  deducaoParcela = 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIr = 0.225;
  deducaoParcela = 636.13;
} else {
  aliquotaIr = 0.275;
  deducaoParcela = 869.36;
}

let descontosIr = ((salarioBase * aliquotaIr) - deducaoParcela);
console.log("Deduções do IR: R$",descontosIr);

// Resultados com base no salário bruno:
console.log("Salário Líquido: R$",salarioBase - descontosIr);
