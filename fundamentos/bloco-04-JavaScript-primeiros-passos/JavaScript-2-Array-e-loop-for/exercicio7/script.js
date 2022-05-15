// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorValor = numbers[0];
// for (let index1 = 0; index1 < numbers.length; index1 += 1) {
//   for (let index = 1; index < numbers.length; index += 1) {
//     if (menorValor > numbers[index]) {
//         menorValor = numbers[index];
//         break;
//     }
//   }
// }
// console.log(menorValor);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);