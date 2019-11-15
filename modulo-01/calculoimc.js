const nome = "Diego";
const peso = 80;
const altura = 1.73;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log("Diego, você está acima do peso.");
} else {
  console.log("Diego, você não está acima do peso.");
}
