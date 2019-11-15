const usuarios = [
  {
    nome: "Diego",
    tecnologias: ["HTML", "CSS"]
  },
  {
    nome: "Maria",
    tecnologias: ["JavaScript", "CSS"]
  },
  {
    nome: "João",
    tecnologias: ["HTML", "Node.js"]
  }
];

function imprimeUsuario(usuario) {
  for (let i = 0; i < usuario.length; i++) {
    console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`);
  }
}

console.log(imprimeUsuario(usuarios));
