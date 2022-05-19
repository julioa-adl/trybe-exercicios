let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = numbers[0];
for (let index = 0; index < numbers.length;index += 1) {
  for (let index2 = 1; index2 < numbers.length; index2 += 1) {
    let ii = numbers[index2]
    if (resultado < ii) {
      resultado = ii;
      break;
    }
  }
}
console.log(resultado);