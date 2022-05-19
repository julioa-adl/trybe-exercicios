let notaPorcentagem = -1;

if (notaPorcentagem > 100 || notaPorcentagem < 0) {
  console.log("Entrada Inválida!")
}
else if (notaPorcentagem >= 90) {
  console.log("A");
}
else if (notaPorcentagem >= 80) {
  console.log("B");
}
else if (notaPorcentagem >= 70) {
  console.log("C");
}
else if (notaPorcentagem >= 60) {
  console.log("D");
}
else if (notaPorcentagem >= 50) {
  console.log("E");
}
else if (notaPorcentagem < 50) {
  console.log("F");
}