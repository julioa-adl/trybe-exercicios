let resultado = "aprovada";

switch (resultado) {
  case "aprovada":
    console.log("Parabéns, você passou!");
    break;
  case "lista":
    console.log("Você está na lista de espera");
    break;
  case "reprovada":
    console.log("você foi reprovada");
    break;
  default:
    console.log("não se palica");
    break;
}