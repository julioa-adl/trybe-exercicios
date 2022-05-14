const pecaXadrez = "teu cu";

switch (pecaXadrez.toLowerCase()) {
  case "bispo":
    console.log("diagonais");
    break;
  case "torre":
    console.log("verticais");
    break;
  case "cavalo":
    console.log("em L");
    break;
  case "rainha":
    console.log("qualquer linha reta");
    break;
  default:
    console.log("Entrada Inválida!");
}