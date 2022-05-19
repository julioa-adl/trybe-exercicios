const num1 = 1000;
const num2 = 20000;
const num3 = 5000;
let round2 = null

if (num1>num2) {
  round2 = num1;
} 
else {
  round2 = num2;
}
if (round2>num3) {
  console.log(round2);
}
else {
  console.log(num3);
}