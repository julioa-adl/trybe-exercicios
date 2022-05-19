let num = 10;
let arrayPontos= '';
contador = 1;

for (index = 0; index < num; index += 1){
  for (index1 = 0; index1 < contador; index1 += 1){
    arrayPontos += '*';
    if (contador > num){
      break;
    }
  }
  console.log(arrayPontos);
  arrayPontos = '';
  contador += 1;
}