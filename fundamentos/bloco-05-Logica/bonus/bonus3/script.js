let num = 10;
let arrayPontos = '';
let contador = 1;
let contador1 = num-1;


for (index = 0; index < num; index +=1){
  for (index1 = 0; index1 < contador1; index1 +=1){
    arrayPontos += ' ';
    if (contador1 > num) {
      break;
    }
  }
  for (index2 = 0; index2 < contador; index2 +=1){
    arrayPontos += '*';
    if (contador > num) {
      break;
    }
  }
  console.log(arrayPontos);
  arrayPontos = '';
  contador += 1;
  contador1 -= 1;
}