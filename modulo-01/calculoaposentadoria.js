const nome = "Maria";
const sexo = "F";
const idade = 60;
const contribuicao = 30;

const somaTempo = idade + contribuicao;

if (sexo == "F") {
  if (contribuicao >= 30 && somaTempo >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else if (sexo == "M") {
  if (contribuicao >= 35 && somaTempo >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else {
  console.log("O sexo só pode ser Masculino(M) ou Feminino(F)");
}
