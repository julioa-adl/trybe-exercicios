let num = 10;
let numSubsequentes = [];
let restNum = null;
for (let index = 1; index <= num; index += 1) {
  numSubsequentes.unshift(index);
}
let num2 = num;
console.log(num,'! =');
console.log(num);
for (let index2 = 1; index2 < num; index2 +=1) {
  restNum = num2 * numSubsequentes[index2];
  console.log('*',numSubsequentes[index2])
  console.log(restNum);
  num2 = restNum;
}